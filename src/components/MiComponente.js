import React, { useId } from "react";

export const MiComponente = () => {
  const id = useId();

  console.log(id);

  return (
    <div>
      <h1>Hook useID</h1>
      <input id={id} name="nombre" placeholder="nombre" />
    </div>
  );
};
