import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function EditarProductoPage({params}: {params: {id: number}}) {
    const idProducto = params.id 

    return <main className="w-full h-full p-4">
    <div className="w-full flex justify-end">
      <Link href={"/dashboard"} className="btn bg-green-800 text-white">
        <IoArrowBack /> Volver
      </Link>
    </div>
    <div className="w-full flex items-center">
        <h1 className=" text-5xl m-4 pr-4">Editando Producto {idProducto}</h1>
    </div>
    <hr />
    <div className="flex flex-col w-full h-full"  >
        Formulario  
    </div>
  </main>
}