import Link from "next/link";

export default function DashboardNavBar() {
  return(
    <ul className="menu bg-base-200 w-56">
      <li>
        <Link href={"/dashboard/productos"}>Productos</Link>
      </li>
      <li>
          <Link href={"/dashboard/categorias"}>Categorias</Link>
      </li>
    </ul>
  );
}
