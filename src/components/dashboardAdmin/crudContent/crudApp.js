import React from "react";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  FormGroup,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

const url="https://jsonplaceholder.typicode.com/"

class CrudApp extends Component {

//almacenar data
state={
  data:[]
}

peticionGet=()=>{
  axios.get(url).then(response=>
    console.log({data: response.data}));
}
componentDidMount(){
this.peticionGet();
}



  render() {
    return (
      <div className="CrudApp">
        <br />
        <button className="btn btn-success">Agregar Partido</button>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>CREACION</th>
              <th>ACTIVO</th>
              <th>IMAGEN</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(e=>{
              return(
                <td>{e.id}</td>
                <td>{e.nombre}</td>
                <td>{e.creacion}</td>
                <td>{e.activo}</td>
                <td>{e.imagen}</td>
                <td><button className="btn btn-primary"><FontAwesomeIcon icon={faEdit}/> </button>
                {""}
                <td><button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt}/> </button>
                </td>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default CrudApp;
