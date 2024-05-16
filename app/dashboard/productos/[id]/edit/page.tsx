import FormEditProducto from "@/app/ui/dashboard/productos/form-edit";
import { fetchCategories, fetchProduct } from "@/lib/data";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default async function EditarProductoPage({
  params,
}: {
  params: { id: string };
}) {
  const idProducto = parseInt(params.id)
  const producto = await fetchProduct(idProducto);
  const categories = await fetchCategories();

  return (
    <div className="w-full h-full p-4">
      <div className="w-full flex justify-end">
        <Link href={"/dashboard"} className="btn bg-green-800 text-white">
          <IoArrowBack /> Volver
        </Link>
      </div>
      <div className="w-full flex items-center">
        <h1 className=" text-5xl m-4 pr-4">Editando Producto</h1>
      </div>
      <hr />
      <div className="flex flex-col w-full h-full">
        <FormEditProducto categories={categories} producto={producto} />
      </div>
    </div>
  );
}