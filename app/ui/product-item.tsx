import { product } from "@prisma/client";
import Image from "next/image"

export function ProductItem({ product }: { product: product }) {
  return (
    <div className="card w-80 h-80 bg-base-100 shadow-xl m-2">
      <figure className="h-96">
        <Image src={product.image} alt="Hola" width={100} height={100} className="border" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">$<b>{product.price.toString()}</b> Pedir Ahora</button>
        </div>
      </div>
    </div>
  );
}
