"use client";

import { TfiGallery } from "react-icons/tfi";
import Modal from "./modal";
import { useState } from "react";
import Image from "next/image";

export default function ViewPhotoButton({ id, urlImage }: { id: number, urlImage: string }) {
  const [show, setShow] = useState<boolean>(false);

  function handleShowModal(e: any) {    
    e.preventDefault()
    setShow(!show);
  }

  async function handleFormSubmit(formData: FormData) {
    //setSpinner(true);
    //await uploadPhoto(formData);
    //setSpinner(false);
    setShow(!show);
  }

  return (
    <div>
      <button
        className="btn bg-green-800 text-white"
        onClick={handleShowModal}
      >
        <TfiGallery /> Ver Foto
      </button>

      <Modal show={show} title="Subir Photo">
        <form className="flex flex-col w-full" action={handleFormSubmit}>
          <Image src={urlImage} width={100} height={100} alt="Imagen" />
          <div className="w-full space-y-4">
            <button className="btn bg-blue-600 text-white w-1/2">Eliminar Foto</button>
            <button className="btn bg-red-600 text-white w-1/2" onClick={handleShowModal}>Cancelar</button>            
          </div>
        </form>
      </Modal>
    </div>
  );
}
