export default function FormCreateProducto() {
  return (
    <form>
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
        <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Cantidad</span>
        </div>
        <input
          type="number"
          placeholder="0 aqui"
          className="input input-bordered w-full max-w-xs"
          name="cantidad"
        />
        <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Precio</span>
        </div>
        <input
          type="number"
          placeholder="0.00"
          className="input input-bordered w-full max-w-xs"
          name="precio"
        />
        <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div>
      </label>

    </form>
  );
}
