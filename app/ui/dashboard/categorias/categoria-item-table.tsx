import DeleteCategoria from "./delete-cateogria-button";
import EditCategoria from "./edit-categoria-button";

export default function CategoriaItemTable({ categoria }: { categoria: any }) {
  return (
    <tr className="bg-base-200">
      <th>{categoria.id}</th>
      <td>{categoria.name}</td>
      <td className="flex items-center justify-center">
        <EditCategoria id={categoria.id} />
        <DeleteCategoria categoria={categoria} />
      </td>
    </tr>
  );
}
