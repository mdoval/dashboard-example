import { product } from "@prisma/client";
import ProductoItemTable from "./producto-item-table";

export default function ProductosTable({productos}: {productos: any[] | undefined}) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Categoria</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Publicado?</th>
            <th className="flex justify-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
            {productos?.map((producto: product) => {
                return(
                    <ProductoItemTable key={producto.id} producto={producto} />
                )
            })}            
        </tbody>
      </table>
    </div>
  );
}