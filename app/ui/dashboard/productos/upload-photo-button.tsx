"use client";

import { MdOutlinePhotoCamera } from "react-icons/md";
import Modal from "../modal";
import { useState } from "react";
import { uploadPhoto } from "@/lib/actions";

export default function UploadPhotoButton({ id }: { id: number }) {
  const [show, setShow] = useState<boolean>(false);

  function handleShowModal(e: any) {    
    e.preventDefault()
    setShow(!show);
  }

  async function handleFormSubmit(formData: FormData) {
    //setSpinner(true);
    await uploadPhoto(formData);
    //setSpinner(false);
    setShow(!show);
  }

  return (
    <div>
      <button
        className="btn bg-purple-800 text-white"
        onClick={handleShowModal}
      >
        <MdOutlinePhotoCamera /> Subir Foto
      </button>

      <Modal show={show} title="Subir Photo">
        <form className="flex flex-col w-full" action={handleFormSubmit}>
          <input type="hidden" value={id} name="id" />
          <input
            name="file"
            type="file"
            className="file-input file-input-bordered w-full"
          />
          <div className="w-full space-y-4">
            <button className="btn bg-blue-600 text-white w-1/2">Subir</button>
            <button className="btn bg-red-600 text-white w-1/2" onClick={handleShowModal}>Cancelar</button>            
          </div>
        </form>
      </Modal>
    </div>
  );
}
