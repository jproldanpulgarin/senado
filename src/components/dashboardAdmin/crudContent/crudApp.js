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

const url = "http://localhost:3001/partidos";

class CrudApp extends Component {
  //almacenar data
  state = {
    data: [],
  };

  peticionGet = () => {
    axios.get(url).then((response) => {
      //console.log(response.data); MUESTRA LOS DATOS EN CONSOLA
      this.setState({ data: response.data });
    });
  };
  componentDidMount() {
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
          

            {this.state.data.map((partidos) => {
              return (
                <tr>
                  <td>{partidos.id}</td>
                  <td>{partidos.nombre}</td>
                  <td>{partidos.creacion}</td>
                  <td>{partidos.activo}</td>
                  <td>{partidos.imagen}</td>
                  <td>
                    <button className="btn btn-primary"><FontAwesomeIcon icon={faEdit}/> </button>
                    {" "}
                    <button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt}/> </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default CrudApp;
