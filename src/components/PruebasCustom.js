import React from "react";
import { useMayus } from "../hooks/useMayus";

export const PruebasCustom = () => {
  const { mayusculas, minusculas, concatenar } = useMayus("mAnUelHerNadez");

  console.log(mayusculas());
  console.log(minusculas());
  console.log(concatenar(" holi"));

  return (
    <div>
      <h1>Probando componentes personalizados</h1>
    </div>
  );
};
