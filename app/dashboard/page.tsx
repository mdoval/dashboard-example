import Link from "next/link";
import GraficoDeBarras from "./grafico-de-barras";
import { GrCatalog } from "react-icons/gr";

export default function DashboardPage() {
  return (
    <main className="w-full h-full p-4">
      <div className="w-full flex justify-end">
        <Link href={"/"} className="btn bg-green-800 text-white">
          <GrCatalog /> Catalogo de Productos
        </Link>
      </div>
      <div className="w-full flex items-center">
        <h1 className=" text-5xl m-4 pr-4">Dashboard</h1>
      </div>
      <div className="flex flex-col w-1/3 bg-white p-2 shadow-lg border">
        <GraficoDeBarras />
      </div>
    </main>
  );
}
