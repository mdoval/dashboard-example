import { MdOutlinePhotoCamera } from "react-icons/md";

export default function UploadPhotoButton({id} : {id: number}) {
  return (
    <button className="btn bg-purple-800 text-white">
      <MdOutlinePhotoCamera /> Subir Foto
    </button>
  );
}