import Link from "next/link";
import { IoIosAdd } from "react-icons/io";

export default function CreateCategoria() {
  return (
    <Link href={"/dashboard/categorias/create"} className="btn bg-blue-800 text-white">
      <IoIosAdd /><span>Nueva Categoria</span>
    </Link>
  );
}
