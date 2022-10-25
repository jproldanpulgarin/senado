import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/*  CONDICIONAL SI NO HAY DATOS */}
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} el={el}/>)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
