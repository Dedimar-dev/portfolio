import { useState } from "react";

export default function useGlobalProvider() {

  const [mostrarSecao, setMostrarSecao] = useState({
    mostrarSobre: false,
    mostrarHabilidades: false,
    mostrarProjetos: false

  });

  const [open, setOpen] = useState(false);

  return {
    mostrarSecao,
    setMostrarSecao,

    open, 
    setOpen
  }
}
