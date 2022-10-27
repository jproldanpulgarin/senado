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
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      creacion: "",
      activo: null,
      imagen: "",
    },
  };
  //PETICION GET
  peticionGet = () => {
    axios.get(url).then((response) => {
      //console.log(response.data); MUESTRA LOS DATOS EN CONSOLA
      this.setState({ data: response.data });
    }).catch(error=>{
      console.log(error.message)
    }) 
  };
  //PETICION POST
  peticionPost = async () => {
    delete this.state.form.id
    await axios.post(url, this.state.form).then((response) => {
      //cerrar el modal al momento de q el usuario inserte
      this.modalInsertar();
      this.peticionGet();
      //manejo de errores
    }).catch(error=>{
      console.log(error.message)
    }) 
    
  };

  componentDidMount() {
    this.peticionGet();
  }

  //VENTANA MODAL
  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };
  //INSERTAR DATOS
  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        //heredar los datos y no se borre cuando se escriban
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const {form}=this.state
    return (
      <div className="CrudApp">
        <br />
        <button
          className="btn btn-success"
          onClick={() => this.modalInsertar()}
        >
          Agregar Partido
        </button>
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
                    <button className="btn btn-primary">
                      <FontAwesomeIcon icon={faEdit} />{" "}
                    </button>{" "}
                    <button className="btn btn-danger">
                      <FontAwesomeIcon icon={faTrashAlt} />{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader style={{ display: "block" }}>
            <span
              style={{ float: "right" }}
              onClick={() => this.modalInsertar()}
            >
              X
            </span>
          </ModalHeader>
          <ModalBody>
            <div className="form-goup">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                name="id"
                id="id"
                readOnly
                className="form-control"
                onChange={this.handleChange}
                value={this.state.data.length+1}
              />
              <br />
              <label htmlFor="nombre">NOMBRE</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                className="form-control"
                onChange={this.handleChange}
                value={form.nombre}
              />
              <br />
              <label htmlFor="creacion">CREACION</label>
              <input
                type="text"
                name="creacion"
                id=""
                className="form-control"
                onChange={this.handleChange}
                value={form.creacion}
              />
              <br />
              <label htmlFor="activo">ACTIVO</label>
              <input
                type="text"
                name="activo"
                id="activo"
                className="form-control"
                onChange={this.handleChange}
                value={form.activo}
              />
              <br />
              <label htmlFor="imagen">IMAGEN</label>
              <input
                type="text"
                name="imagen"
                id="imagen"
                className="form-control"
                onChange={this.handleChange}
                value={form.imagen}
              />
              <br />
            </div>
          </ModalBody>

          <ModalFooter>
            <button className="btn btn-success" onClick={()=>this.peticionPost()}>Insertar</button>
            <button
              className="btn btn-danger"
              onClick={() => this.modalInsertar()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default CrudApp;
