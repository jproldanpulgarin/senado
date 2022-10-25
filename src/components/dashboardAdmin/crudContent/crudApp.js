import { useState } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'




/* BASE DE DATOS TEMPORAL */

const initialDB=[
  {id:1,name:"Juan Pablo Roldan Pulgarin",age:23},
  {id:2,name:"Ana Maria Roldan Pulgarin",age:21},
  {id:3,name:"Isabella Roldan Pulgarin",age:15}
]



const CrudApp = () => {
  const [db, setDB] = useState(initialDB);
  return (
    <div>
      <h3>CRUD PARA LA PAGINA</h3>
      <CrudForm/>
      <CrudTable data={db}/>
    </div>
  )
}

export default CrudApp
