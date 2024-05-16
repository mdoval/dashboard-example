'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNavBar() {
  const path = usePathname()
  console.log(path)
  return(
    <ul className="menu bg-gray-200 w-56">
      <li>
        <Link href={"/dashboard/productos"} className={path === "/dashboard/productos"? "active" : ""}>Productos</Link>
      </li>
      <li>
          <Link href={"/dashboard/categorias"} className={path === "/dashboard/categorias"? "active" : ""}>Categorias</Link>
      </li>
    </ul>
  );
}
