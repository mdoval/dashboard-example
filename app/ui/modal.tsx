import { ReactNode } from "react";

export default function Modal({
  titulo,
  children,
  visible,
}: {
  titulo: string;
  visible: boolean;
  children: ReactNode;
}) {
  return (
    <dialog id="my_modal_1" className={`modal ${visible ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{titulo}</h3>
        <div className="modal-action">
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </dialog>
  );
}
