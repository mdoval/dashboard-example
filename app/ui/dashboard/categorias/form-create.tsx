"use client";

import { createCategory } from "@/lib/actions";
import { CategoriaFormErrors } from "@/types/types";
import { useFormState } from "react-dom";
import { ErrorMessage } from "../errors";
import Link from "next/link";

export default function FormCreateCategoria() {
  const initalValue: CategoriaFormErrors = {};
  const [errors, dispatch] = useFormState(createCategory, initalValue);

  return (
    <form
      action={dispatch}
      className="p-5 border bg-white shadow-lg flex flex-col"
    >
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Nombre Categoria</span>
        </div>
        <input
          type="text"
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
          name="name"
        />
        {errors?.name ? <ErrorMessage message={errors.name} /> : ""}
      </label>
      <div className="flex flex-row justify-end space-x-2">
        <button className="btn btn-primary w-1/5">Guardar</button>
        <Link href={"/categorias"} className="btn btn-error w-1/5">
          Cancelar
        </Link>
      </div>
    </form>
  );
}
