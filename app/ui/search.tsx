"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function InputSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {  
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full mt-4 mb-4">
      <input
        type="text"
        placeholder="¿ Que desea buscar ?"
        className="input input-bordered w-full max-w-md"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
