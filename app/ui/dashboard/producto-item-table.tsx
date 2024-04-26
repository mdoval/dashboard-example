import { IProducto } from "@/lib/definitions";
import EditProducto from "./edit-producto-button";
import DeleteProducto from "./delete-producto-button";

export default function ProductoItemTable({
  producto,
}: {
  producto: IProducto;
}) {
  return (
    <tr className="bg-base-200">
      <th>{producto.id}</th>
      <td>{producto.title}</td>
      <td>{producto.cantidad}</td>
      <td>{producto.precio}</td>
      <td className="flex items-center justify-center">
        <EditProducto id={producto.id} />
        <DeleteProducto />
      </td>
    </tr>
  );
}
