import { fetchProducts, productsCountPages } from "@/lib/data";
import Link from "next/link";
import { GrCatalog } from "react-icons/gr";
import ProductosTable from "../../ui/dashboard/productos/table-productos";
import CreateProducto from "../../ui/dashboard/productos/create-producto-button";
import InputSearch from "@/app/ui/search";
import PaginationButtons from "@/app/ui/pagination";

export default async function ProductosPage({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const productos = await fetchProducts(query, currentPage);
  const pages = await productsCountPages(query);

  return (
    <main className="w-full h-full p-4">
      <div className="w-full flex justify-end">
        <Link href={"/"} className="btn bg-green-800 text-white">
          <GrCatalog /> Catalogo de Productos
        </Link>
      </div>
      <div className="w-full flex items-center">
        <h1 className=" text-5xl m-4 pr-4">Catalogo de Productos</h1>
        <CreateProducto />
      </div>
      <div className="flex flex-col w-full h-full">
        <InputSearch />
        <ProductosTable productos={productos} />
        <div className="flex justify-center mt-4">
          <PaginationButtons pages={pages} pageActive={currentPage} />
        </div>
      </div>
    </main>
  );
}
