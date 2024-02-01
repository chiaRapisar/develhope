import { useState } from "react"
import './Container.css'

export function Container({title, children}) {
    const[collapsed, setCollapsed]=useState(false)

    function handlecollaps() {
        setCollapsed((c)=>!c)
        
    }
    return (<>
        <h1 className="title" onClick={handlecollaps}>{title} </h1>
        <div className={!collapsed ? 'container' : 'container-hidden' }>{children}</div>
        </>
        )
    
}