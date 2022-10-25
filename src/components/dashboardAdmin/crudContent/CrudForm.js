import React from "react";
import { useState } from "react";

const initialForm = {
  name: "",
  age: null,
  id: null,
};

const CrudForm = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};
  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="age"
          id=""
          placeholder="Edad"
          onChange={handleChange}
          value={form.age}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset}/>
      </form>
    </div>
  );
};

export default CrudForm;
