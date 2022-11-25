import React from "react";

import header from "../../img/header.png";
import "../../css/crudApp.css";
import CrudProyectos from "./crudContent/crudProyectos"
export default function Content() {

  return (
    <div className="content-wrapper">
      <div className="container" id="12">
        <img src={header} alt="" />
        <CrudProyectos/>
        {/* <CrudApp /> */}
      </div>
    </div>
  );
}
