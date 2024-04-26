import { IProducto } from "@/lib/definitions";
import ProductoItemTable from "./producto-item-table";

export default function ProductosTable({productos}: {productos: IProducto[]}) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th className="flex justify-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
            {productos.map((producto:IProducto) => {
                return(
                    <ProductoItemTable key={producto.id} producto={producto} />
                )
            })}            
        </tbody>
      </table>
    </div>
  );
}