"use client";

import { publicarProducto } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function PublishedControl({
  id,
  estado,
}: {
  id: number;
  estado: boolean;
}) {
  const router = useRouter()

  const onChangeCheckBox = async (e: {target: { checked: boolean; value: React.SetStateAction<string> };}) => {
    const { value, checked } = e.target;
    await publicarProducto(id, checked)
    router.refresh()
  };

  return (
    <input
      type="checkbox"
      className="toggle"
      name="published"
      checked={estado}
      defaultValue={id}
      onChange={onChangeCheckBox}
    />
  );
}
