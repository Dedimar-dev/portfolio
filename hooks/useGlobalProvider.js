import { useState } from "react";

export default function useGlobalProvider () {
  const [mostrarSobre, setMostrarSobre] = useState(false);
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);
  const [mostrarProjetos, setMostrarProjetos] = useState(false);
  const [irParaSobre, setIrParaSobre] = useState(false);
  const [irParaProjetos, setIrParaProjetos] = useState(false);
  const [irParaHabilidades, setIrParaHabilidades] = useState(false);

  return {
    mostrarSobre, 
    setMostrarSobre,

    mostrarHabilidades, 
    setMostrarHabilidades,

    mostrarProjetos, 
    setMostrarProjetos,

    irParaSobre,
    setIrParaSobre,

    irParaProjetos, 
    setIrParaProjetos,
    
    irParaHabilidades, 
    setIrParaHabilidades
  }
}
