"use client";

import PublishedControl from "./published-control";
import CategoryControl from "./category-control";
import Link from "next/link";
import { useFormState } from "react-dom";
import { updateProduct } from "@/lib/actions";
import { ErrorMessage } from "../errors";
import { ProductoFormErrors } from "@/types/types";
import { product } from "@prisma/client";

export default function FormEditProducto({categories, producto}: {categories: {id: number, name: string}[] | undefined, producto: product | undefined}) {
  const initalValue: ProductoFormErrors = {}
  const updateWithId = updateProduct.bind(null, producto?.id)
  const [errors, dispatch] = useFormState(updateWithId, initalValue);

  return (
    <form action={dispatch} className="p-5 border bg-white shadow-lg flex flex-col">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Nombre del producto</span>
        </div>
        <input
          type="text"
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
          name="title"
          defaultValue={producto?.title}
        />
        {errors?.title ? <ErrorMessage message={errors.title} /> : ''}
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Descripcion</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
          name="description"
          defaultValue={producto?.description}
        ></textarea>
        {errors?.description ? <ErrorMessage message={errors.description} /> : ""}
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
          defaultValue={producto?.quantity}
        />
        {errors?.quantity ? <ErrorMessage  message={errors.quantity}/> : ""}
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
          defaultValue={producto?.price.toString()}
        />
        {errors?.price ? <ErrorMessage  message={errors.price} /> : ""}
      </label>
      <div className="form-control w-1/5 mt-4 mb-4">
        <label className="label cursor-pointer">
          <span className="label-text">El Articulo esta visible ?</span>
          <PublishedControl />
        </label>
      </div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Seleccione la categoria</span>
        </div>
        <CategoryControl categories={categories} />
        {errors?.category ? <ErrorMessage  message={errors.category}/> : ""}
      </label>
      <div className="flex flex-row justify-end space-x-2">
        <button className="btn btn-primary w-1/5">Guardar</button>
        <Link href={"/dashboard"} className="btn btn-error w-1/5">
          Cancelar
        </Link>
      </div>
    </form>
  );
}
