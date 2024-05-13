import EditProducto from "./edit-producto-button";
import DeleteProducto from "./delete-producto-button";
import { product } from "@prisma/client";
import UploadPhotoButton from "./upload-photo-button";

export default function ProductoItemTable({
  producto,
}: {
  producto: product;
}) {
  return (
    <tr className="bg-base-200">
      <th>{producto.id}</th>
      <td>{producto.title}</td>
      <td>{producto.quantity}</td>
      <td>{producto.price.toString()}</td>
      <td className="flex items-center justify-center">
        <EditProducto id={producto.id} />
        <DeleteProducto />
        <UploadPhotoButton id={producto.id} />
      </td>
    </tr>
  );
}
