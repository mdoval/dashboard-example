import Link from "next/link";
import { MdDelete } from "react-icons/md";

export default function DeleteProducto() {
  return (
    <Link href={`/dashboard/delete`} className="btn bg-red-800 text-white">
      <MdDelete /><span>Editar</span>
    </Link>
  );
}
