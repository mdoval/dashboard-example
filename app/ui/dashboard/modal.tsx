import { ReactNode } from "react";

export default function Modal({
  children,
  show,
  title,
}: {
  children: ReactNode;
  show: boolean;
  title: string;
}) {
  return (
    <dialog
      id="my_modal_1"
      className={`modal modal-bottom sm:modal-middle ${
        show ? "modal-open" : ""
      }`}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="modal-action">{children}</div>
      </div>
    </dialog>
  );
}
