
import React from 'react'
import CrudApp from './crudContent/crudApp'


import iu from "../img/Screenshot_3.png"



export default function Content() {
  return (
    <div className="content-wrapper">


      <h1>Aqui estara todo el contenido</h1>

      <CrudApp/>
      

      <div className="container">
        <h1>Here will be the content</h1>
        <img src={iu}/>
        <crudApp/>
      </div>  

    </div>
  );
}


