import CreateCategoria from "@/app/ui/dashboard/categorias/create-categoria-button";
import CategoriasTable from "@/app/ui/dashboard/categorias/table-categorias";
import PaginationButtons from "@/app/ui/pagination";
import InputSearch from "@/app/ui/search";
import { categoriasCountPages, fetchCategoriesFiltered } from "@/lib/data";
import Link from "next/link";
import { GrCatalog } from "react-icons/gr";

export default async function CategoriasPage({
  searchParams,
}: {
  searchParams?: { query: string; page: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const categorias = await fetchCategoriesFiltered(query, currentPage);
  const pages = await categoriasCountPages(query);
  
  return (
    <main className="w-full h-full p-4">
      <div className="w-full flex justify-end">
        <Link href={"/"} className="btn bg-green-800 text-white">
          <GrCatalog /> Catalogo de Productos
        </Link>
      </div>
      <div className="w-full flex items-center">
        <h1 className=" text-5xl m-4 pr-4">Catalogo de Productos</h1>
        <CreateCategoria />
      </div>
      <div className="flex flex-col w-full h-full">
        <InputSearch />
            <CategoriasTable categorias={categorias} />
        <div className="flex justify-center mt-4">
          <PaginationButtons pages={pages} pageActive={currentPage} />
        </div>
      </div>
    </main>
  );
}
