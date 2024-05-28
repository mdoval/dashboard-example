import { category } from "@prisma/client";
import CategoriaItemTable from "./categoria-item-table";

export default function CategoriasTable({categorias}: {categorias: any[] | undefined}) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Categoria</th>
            <th className="flex justify-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
            {categorias?.map((categoria: category) => {
                return(
                    <CategoriaItemTable key={categoria.id} categoria={categoria} />
                )
            })}            
        </tbody>
      </table>
    </div>
  );
}