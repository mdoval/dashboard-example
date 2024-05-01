'use client'

import { useState } from "react"

export default function PublishedControl() {
    const [published, setPublished] = useState<boolean>(true)

    return(
        <input 
            type="checkbox" 
            className="toggle" 
            checked={published}
            name="published"
            onChange={() => setPublished(!published)}
          />
    )
}