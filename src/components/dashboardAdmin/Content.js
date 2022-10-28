import React from "react";
import CrudApp from "./crudContent/crudApp";
import header from "../img/header.png";
import "../css/crudApp.css";

export default function Content() {
  return (
    <div className="content-wrapper">
      <div className="container" id="12">
        <img src={header} alt="" />

        <CrudApp />
      </div>
    </div>
  );
}
