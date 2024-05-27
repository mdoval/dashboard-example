'use client'

import { ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PaginationButtons({pages, pageActive}: {pages: number | undefined, pageActive: number}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter()
  

  function handleChangePage (page: number) {  
    console.log(page)
    const params = new URLSearchParams(searchParams);
    if(page) {
      params.set("page", page.toString());
    }
    router.refresh()
    replace(`${pathname}?${params.toString()}`);
  }
  
  function buttons(pages: number | undefined, pageActive: number) {
    let botones: ReactNode[] = []
    if(pages) {
      for (let i = 1; i <= pages; i++) {
        botones[i] = <button key={i} className={`join-item btn ${pageActive === i? "btn-active": ""}`} onClick={() => handleChangePage(i)}>{i}</button>
      }  
    } 
    return botones
  }

  return (
    <div className="join">
        {buttons(pages,pageActive)}
    </div>
  );
}