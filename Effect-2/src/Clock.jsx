import { useEffect } from "react";
import { useState } from "react";

export function Clock() {
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
      <h2>Ora corrente:{date.toLocaleTimeString()}</h2>
    </div>
  );
}
