import React, { useState, useEffect } from 'react';

export default function App(){
  
  const [hora,setHora] = useState(4);
  const [minuto,setMinuto] = useState(30);
  const [segundo,setSegundo] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setSegundo(segundo + 1);
      if (segundo === 59) {
        setSegundo(0);
        setMinuto(minuto + 1);
        if (minuto === 59) {
          setMinuto(0);
          setHora(hora + 1);
          if (hora === 24) {
            setHora(0);
          }
        }
      }

      }, 1000);

    return () => clearInterval(interval);

});

  
  return (
    <div>
      <h2>{hora}:{minuto}:{segundo}</h2>
    </div>
  );
}
