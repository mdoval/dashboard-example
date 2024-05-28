import Link from "next/link";
import { CiEdit } from "react-icons/ci";

export default function EditCategoria({id} : {id: number}) {
  return (
    <Link href={`/dashboard/categorias/${id}/edit`} className="btn bg-blue-800 text-white">
      <CiEdit /><span>Editar</span>
    </Link>
  );
}
