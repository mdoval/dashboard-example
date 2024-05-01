'use client'

import { fetchCategories } from "@/lib/data";
import PublishedControl from "./published-control";
import CategoryControl from "./category-control";
import Link from "next/link";
import { useFormState } from "react-dom";
import { createProduct } from "@/lib/actions";
import { ErrorMessage } from "./errors";

export default async function FormCreateProducto() {
  const initalValue: {field: string, message: string }[] | undefined = undefined
  const [errors, dispatch] = useFormState(createProduct, initalValue)
  const categories = await fetchCategories();

  return (
    <form className="p-5 border bg-white shadow-lg flex flex-col">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Nombre del producto</span>
        </div>
        <input
          type="text"
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
          name="title"
        />        
        <ErrorMessage />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Descripcion</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
          name="description"
        ></textarea>
        <ErrorMessage />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Cantidad</span>
        </div>
        <input
          type="number"
          placeholder="0 aqui"
          className="input input-bordered w-full max-w-xs"
          name="quantity"
        />
        <ErrorMessage />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Precio</span>
        </div>
        <input
          type="number"
          placeholder="0.00"
          className="input input-bordered w-full max-w-xs"
          name="price"
        />
        <ErrorMessage />
      </label>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Publicarlo ?</span>
          <PublishedControl />
        </label>
      </div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Seleccione la categoria</span>
        </div>
        <CategoryControl categories={categories} />
        <ErrorMessage />
      </label>
      <div className="flex flex-row justify-end space-x-2"> 
        <button className="btn btn-primary w-1/5">Guardar</button>
        <Link href={"/dashboard"} className="btn btn-error w-1/5">
          Guardar
        </Link>
      </div>
    </form>
  );
}
