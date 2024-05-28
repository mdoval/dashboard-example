import FormEditCategoria from "@/app/ui/dashboard/categorias/form-edit";
import { fetchCategoria } from "@/lib/data";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default async function EditarCategoriaPage({
  params,
}: {
  params: { id: string };
}) {
  const idCategoria = parseInt(params.id)
  const categoria = await fetchCategoria(idCategoria)
  
  return (
    <div className="w-full h-full p-4">
      <div className="w-full flex justify-end">
        <Link href={"/categorias"} className="btn bg-green-800 text-white">
          <IoArrowBack /> Volver
        </Link>
      </div>
      <div className="w-full flex items-center">
        <h1 className=" text-5xl m-4 pr-4">Editando Categoria</h1>
      </div>
      <hr />
      <div className="flex flex-col w-full h-full">
        <FormEditCategoria categoria={categoria} />
      </div>
    </div>
  );
}