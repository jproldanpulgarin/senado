import React from "react";

/* BASE DE DATOS FALSA JSON */
const initialDB = [
  {
    id: 1,
    name: "Juan Pablo Roldan Pulgarin",
    Age: 23,
  },
  {
    id: 2,
    name: "Juan Guillermo Roldan Arango",
    Age: 46,
  },
  {
    id: 3,
    name: "Astrid Milena Pulgarin",
    Age: 44,
  },
  {
    id: 4,
    name: "Isabella Roldan Pulgarin",
    FAge: 15,
  }
];

const CrudApp = () => {
  return (
    <div>
      <h2>Ejercicio CRUD</h2>
      <form></form>
      <table></table>
    </div>
  );
};

export default CrudApp;
