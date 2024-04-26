import { IProducto } from "@/lib/definitions";

export function ProductItem({ product }: { product: IProducto }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl m-2">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.descripcion}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">$<b>{product.precio}</b> Pedir Ahora</button>
        </div>
      </div>
    </div>
  );
}
