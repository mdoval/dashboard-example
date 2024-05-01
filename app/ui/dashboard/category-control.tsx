import { category } from "@prisma/client";

export default function CategoryControl({
  categories,
}: {
  categories: category[] | undefined
}) {
    return (
    <select className="select select-bordered w-full max-w-xs">
        {categories?.map((category: category) => {
            return <option key={category.id} value={category.id}>{category.name}</option>
        })}
    </select>
  );
}
