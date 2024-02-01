import { useState } from "react";
import { Clock } from "./Clock";
import { languageContex } from "./LanguageContext";

export function App() {
const [language, setLanguage] = useState('EN')
function handleLangu(l) {
    const lang = l.target.value;
    setLanguage(lang);
    
}

    return (<>
    <select name="language" onClick={handleLangu}>
        <option value="EN">EN</option>
        <option value="IT">IT</option>
         <option value="ES">ES</option>
        <option value="FR">FR</option>
    </select>
        <languageContex.Provider value={language}>
        
             <Clock/>
        
        </languageContex.Provider>
        </>
    )
    
}