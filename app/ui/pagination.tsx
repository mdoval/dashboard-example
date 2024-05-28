'use client'

import { ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PaginationButtons({pages, pageActive}: {pages: number | undefined, pageActive: number}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace , refresh} = useRouter();

  function handleChangePage (page: number) {  
    //console.log(page)
    const params = new URLSearchParams(searchParams);
    if(page) {
      params.set("page", page.toString());
    }
    replace(`${pathname}?${params.toString()}`);
    refresh()
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