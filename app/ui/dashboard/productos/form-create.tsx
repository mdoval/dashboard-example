"use client";

import PublishedControl from "./published-control";
import CategoryControl from "./category-control";
import Link from "next/link";
import { useFormState } from "react-dom";
import { createProduct } from "@/lib/actions";
import { ErrorMessage } from "../errors";
import { ProductoFormErrors } from "@/types/types";

export default function FormCreateProducto({
  categories,
}: {
  categories: { id: number; name: string }[] | undefined;
}) {
  const initalValue: ProductoFormErrors = {};
  const [errors, dispatch] = useFormState(createProduct, initalValue);

  return (
    <form
      action={dispatch}
      className="p-5 border bg-white shadow-lg flex flex-col"
    >
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
        {errors?.title ? <ErrorMessage message={errors.title} /> : ""}
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
        {errors?.description ? (
          <ErrorMessage message={errors.description} />
        ) : (
          ""
        )}
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
        {errors?.quantity ? <ErrorMessage message={errors.quantity} /> : ""}
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
        {errors?.price ? <ErrorMessage message={errors.price} /> : ""}
      </label>
      <div className="form-control w-1/5 mt-4 mb-4">
        <label className="label cursor-pointer">
          <span className="label-text">El Articulo esta visible ?</span>
          <input
            type="checkbox"
            className="toggle"
            name="published"
            defaultChecked={false}
          />
        </label>
      </div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Seleccione la categoria</span>
        </div>
        <CategoryControl categories={categories} />
        {errors?.category ? <ErrorMessage message={errors.category} /> : ""}
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
