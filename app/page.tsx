import { fetchPublishedProducts, productsPublishedCountPages } from "@/lib/data";
import { ProductItem } from "./ui/product-item";
import Link from "next/link";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { product } from "@prisma/client";
import InputSearch from "./ui/search";
import PaginationButtons from "./ui/pagination";

export default async function Home({ searchParams, }: { searchParams?: { query?: string; page?: string };}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;  
  const productos = await fetchPublishedProducts(query, currentPage)
  const pages = await productsPublishedCountPages(query)

  return (
    <main className="w-full h-full p-4">
      <div className="w-full flex justify-end">
        <Link href={"/dashboard"} className="btn bg-purple-800 text-white">
          <MdOutlineDashboardCustomize /> Dashboard
        </Link>
      </div>
      <h1 className=" text-5xl m-4">Catalogo de Productos</h1>
      <hr />
      <InputSearch />
      <div className="flex flex-wrap w-full full justify-left">
        {productos?.map((producto: product) => {
          return <ProductItem key={producto.id} product={producto} />;
        })}        
      </div>
      <div className="flex justify-center">
      <PaginationButtons pages={pages} pageActive={currentPage} />
      </div>
    </main>
  );
}
