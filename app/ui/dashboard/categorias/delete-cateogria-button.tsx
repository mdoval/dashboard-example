"use client";

import { MdDelete } from "react-icons/md";
import Modal from "@/app/ui/modal";
import { useState } from "react";
import { category } from "@prisma/client";
import { deleteCategoria } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function DeleteCategoria({categoria}: {categoria: category}) {
  const router = useRouter()
  const [visible, setVisible] = useState<boolean>(false);  

  const handleModal = () => {
    setVisible(!visible);
  };

  const eliminarCategoria = async (id: number) => {
    const categoriaBorrada = await deleteCategoria(id)
    handleModal()
    router.refresh()
  }

  return (
    <div>
      <button className="btn bg-red-800 text-white" onClick={handleModal}>
        <MdDelete /> <span>Eliminar</span>
      </button>
      <Modal titulo="Eliminando Registro" visible={visible}>
        <p className="m-4">Desea eliminar el registro <b>{`"${categoria.name}"`}</b> ?</p>
        <div className="w-full flex flex-row space-x-3 justify-center" >
          <button className="btn btn-primary w-1/3" onClick={() => eliminarCategoria(categoria.id)}>Eliminar</button>
          <button className="btn btn-error w-1/3" onClick={handleModal}>
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  );
}
