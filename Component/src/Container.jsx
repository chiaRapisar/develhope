import { useState } from "react"
import './Container.css'

export function Container({title, children}) {
    const[collapsed, setCollapsed]=useState(false)

    function handlecollaps() {
        setCollapsed((c)=>!c)
        
    }
    return (<>
        <div className="title" onClick={handlecollaps}>{title} </div>
        <div className={!collapsed ? 'container' : 'container-hidden' }>{children}</div>
        </>
        )
    
}