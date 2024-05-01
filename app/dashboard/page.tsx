import { fetchProducts } from "@/lib/data";
import Link from "next/link";
import { GrCatalog } from "react-icons/gr";
import ProductosTable from "../ui/dashboard/table-productos";
import CreateProducto from "../ui/dashboard/create-producto-button";

export default async function DashboardPage() {
  const productos = await fetchProducts()

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
      <hr />
      <div className="flex flex-col w-full h-full"  >
        <ProductosTable productos={productos} />
      </div>
    </main>
  );
}
