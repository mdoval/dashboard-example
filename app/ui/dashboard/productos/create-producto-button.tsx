import Link from "next/link";
import { IoIosAdd } from "react-icons/io";

export default function CreateProducto() {
  return (
    <Link href={"/dashboard/productos/create"} className="btn bg-blue-800 text-white">
      <IoIosAdd /><span>Nuevo Producto</span>
    </Link>
  );
}
