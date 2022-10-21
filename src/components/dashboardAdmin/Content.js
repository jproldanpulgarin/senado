import React from "react";
import iu from "../img/Screenshot_3.png"

import crudApp from "../CrudContent/crudApp"
export default function Content() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <h1>Here will be the content</h1>
        <img src={iu}/>
        <crudApp/>
      </div>
    </div>
  );
}
