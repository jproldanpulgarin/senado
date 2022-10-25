import React from 'react'

const CrudTableRow = ({el}) => {
  return (
    <div>
         <tr>
            <td>{el.name}</td>
            <td>{el.age}</td>
            <td>
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
    </div>
  )
}

export default CrudTableRow
