import FormCreateProducto from "@/app/ui/dashboard/form-create";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { fetchCategories } from "@/lib/data";

export default async function CrearProductoPage() {
  const categories = await fetchCategories();

  return (
    <div className="w-full h-full p-4">
      <div className="w-full flex justify-end">
        <Link href={"/dashboard"} className="btn bg-green-800 text-white">
          <IoArrowBack /> Volver
        </Link>
      </div>
      <div className="w-full flex items-center">
        <h1 className=" text-5xl m-4 pr-4">Formulario de Producto</h1>
      </div>
      <hr />
      <div className="flex flex-col w-full h-full">
        <FormCreateProducto categories={categories} />
      </div>
    </div>
  );
}
