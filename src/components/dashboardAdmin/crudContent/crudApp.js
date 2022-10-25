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
import "bootstrap/dist/css/bootstrap.min.css";


const data = [
  { id: 1, name: "Juan Pablo Roldan Pulgarin", age: 23 },
  { id: 2, name: "Ana Maria Roldan Pulgarin", age: 21 },
  { id: 3, name: "Isabella Roldan Pulgarin", age: 15 },
];
class CrudApp extends React.Component {
  state = {
    data: data,
    form: {
      id: "",
      name: "",
      age: "",
    },
    modalInsertar: false,
  };



  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  mostrarModalInsertar=()=>{
    this.setState({modalInsertar:true})
  }
  ocultarModalInsertar=()=>{
    this.setState({modalInsertar:false})
  }

  insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data:lista,modalInsertar:false})
  }

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Agregar Registro</Button>
          
          <br />
          <br />

          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((e) => (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>
                    <Button color="primary">Editar</Button>{" "}
                    <Button color="danger">Eliminar</Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div className="">
              <h3>Insertar Registros</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label htmlFor="">Id:</label>
              <input
                type="text"
                name=""
                id=""
                readOnly
                className="form-control"
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="">Nombre:</label>
              <input
                type="text"
                name="name"
                id=""
                
                className="form-control"
                onChange={this.handleChange}
                
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="">Edad:</label>
              <input
                type="text"
                name="age"
                id=""
                
                className="form-control"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.insertar()}> Insertar</Button>
            <Button color="danger" onClick={() => this.ocultarModalInsertar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default CrudApp;
