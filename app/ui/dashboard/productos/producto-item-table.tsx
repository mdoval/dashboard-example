import EditProducto from "./edit-producto-button";
import DeleteProducto from "./delete-producto-button";
import UploadPhotoButton from "./upload-photo-button";
import ViewPhotoButton from "./view-photo-button";
import PublishedControl from "./published-control";

export default function ProductoItemTable({ producto }: { producto: any }) {
  return (
    <tr className="bg-base-200">
      <th>{producto.id}</th>
      <td>{producto.title}</td>
      <td>{producto.category.name}</td>
      <td>{producto.quantity}</td>
      <td>{producto.price.toString()}</td>
      <td><PublishedControl id={producto.id} estado={producto.published} /></td>
      <td className="flex items-center justify-center">
        <EditProducto id={producto.id} />
        <DeleteProducto />
        {producto.image === "/images/noimage.jpg" ? (
          <UploadPhotoButton id={producto.id} />
        ) : (
          <ViewPhotoButton id={producto.id} urlImage={producto.image} />
        )}
      </td>
    </tr>
  );
}