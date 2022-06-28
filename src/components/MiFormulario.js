import React, { useState } from "react";

export const MiFormulario = () => {
  const [formulario, setFormulario] = useState({});

  const enviado = (e) => {
    e.preventDefault();

    let curso = {
      titulo: e.target.titulo.value,
      anio: e.target.anio.value,
      descripcion: e.target.descripcion.value,
      autor: e.target.autor.value,
      email: e.target.email.value,
    };
    setFormulario(curso);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <p>Formulario para guardar un curso</p>
      <pre>{JSON.stringify(formulario)}</pre>
      <form onSubmit={enviado} className="miFormulario">
        <input type="texto" name="titulo" placeholder="Titulo" />
        <input type="number" name="anio" placeholder="Año publicacion" />
        <textarea name="descripcion" placeholder="Descripcion" />
        <input type="texto" name="autor" placeholder="Autor" />
        <input type="email" name="email" placeholder="Correo de contacto" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};