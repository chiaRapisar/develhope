import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { languageContex } from "./LanguageContext";

export function Clock() {

  const language = useContext(languageContex)
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID= setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
        clearInterval(intervalID)
    }
  }, []);
  return (
    <div>
     <h2> {language == 'EN' && 'Current time:'}</h2>
     <h2>{language == 'IT' && 'Ora corrente:'}</h2>
     <h2> {language == 'ES' && 'Tiempo actual:'}</h2>
     <h2>{language == 'FR' && 'Heure actuelle:'}</h2>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}
