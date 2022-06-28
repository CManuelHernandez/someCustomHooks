import React, { useState } from "react";
import { useMayus } from "../hooks/useMayus";

export const PruebasCustom = () => {
  const { estado, mayusculas, minusculas, concatenar } =
    useMayus("Manuel Her Mon");

  return (
    <div>
      <h1>Probando componentes personalizados</h1>
      <h2>{estado}</h2>

      <button onClick={mayusculas}>Poner en mayusuculas</button>
      <button onClick={minusculas}>Poner en mayusuculas</button>
      <button onClick={(e) => concatenar("- Probando Hooks Personalizados")}>
        Poner en mayusuculas
      </button>
    </div>
  );
};
