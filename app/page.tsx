import { fetchProducts } from "@/lib/data";
import { ProductItem } from "./ui/product-item";
import Link from "next/link";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { product } from "@prisma/client";

export default async function Home() {
  const productos = await fetchProducts();

  return (
    <main className="w-full h-full p-4">
      <div className="w-full flex justify-end">
        <Link href={"/dashboard"} className="btn bg-purple-800 text-white">
          <MdOutlineDashboardCustomize /> Dashboard
        </Link>
      </div>
      <h1 className=" text-5xl m-4">Catalogo de Productos</h1>
      <hr />
      <div className="flex flex-wrap w-full h-full justify-left">
        {productos?.map((producto: product) => {
          return <ProductItem key={producto.id} product={producto} />;
        })}
      </div>
    </main>
  );
}
