"use client";
import { useState, useEffect } from "react";

export function Writer() {
  const texts = [
    // El siguiente texto se va a desplegar en un H3, añade un salto de linea
    `Hola, mi nombrr es`,
    `Hola, mi nombre es Álvaro y soy desarrollador web...`,
    `Hola, mi nombre es Álvaro y soy nutricionista`,
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === texts.length) return; // fin opcional

    const currentText = texts[index];

    // velocidad de escritura
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      //escribe texto
      if (!deleting && subIndex < currentText.length) { 
        setText(currentText.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
        //elimina texto
      } else if ((deleting && subIndex > 5 && (index == 0 || index >= 2)) || (deleting && subIndex > 31 && index > 0)) {
        setText(currentText.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
        //pausa entre escribir y borrar
      } else if (!deleting && subIndex === currentText.length) {
        setTimeout(() => setDeleting(true), 1000);
        //dejar de borrar 
      } else if ((deleting && subIndex === 5 && index == 0) || (deleting && subIndex === 31 && index > 0)) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  // parpadeo del cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="position-absolute ms-5 top-50 translate-middle-y d-flex w-50" 
        style={{zIndex: 1, height: '250px'}}>
        <h3 className="display-5 fw-semibold" style={{zIndex: 1, color: 'white'}}>
        {text}
        <span style={{ opacity: blink ? 1 : 0 }}>|</span>
        </h3>

    </div>
    
  );
}
