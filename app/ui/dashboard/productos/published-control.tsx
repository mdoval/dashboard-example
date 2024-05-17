'use client'

import { publicarProducto } from "@/lib/actions"
import { useState } from "react"

export default function PublishedControl({id, estado}: {id:number, estado: boolean}) {
    async function handlePublicado() {
        try {
            const nuevoEstado = !published
            const productoActualizado= await publicarProducto(id, nuevoEstado)
            setPublished(nuevoEstado)
        } catch(error) {
            console.log(error)
        }
    }

    const [published, setPublished] = useState<boolean>(estado)

    return(        
        <input 
            type="checkbox" 
            className="toggle" 
            checked={published}
            name="published"
            onChange={() => handlePublicado()}
          />
    )
}