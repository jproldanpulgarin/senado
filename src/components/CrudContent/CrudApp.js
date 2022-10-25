import React from "react";
/* import "boostrap/dist/css/bootstrap.min.css"; */
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, name: "Juan Pablo Roldan Pulgarin", age: 24 },
  { id: 2, name: "isabella Roldan Pulgarin", age: 15 },
  { id: 3, name: "Astrid Milena Pulgarin", age: 44 },
  { id: 4, name: "Juan Guillermo Roldan Arango", age: 46 },
];
class crudApp extends React.Component {
  state = {
    data: data,
  };
  render() {
    return (
      <>
        <Container>
          <br />
          <button color="primary">Insertar Nuevo Miembro</button>
          <br />
          <br />

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th> 
                <th>ACTIONS</th> 
              </tr>
            </thead>
            <tbody>
                {this.state.data.map((elemento)=>(
                <tr>
                    <td>{elemento.id}</td>
                    <td>{elemento.name}</td>
                    <td>{elemento.age}</td>
                    <td>
                        <Button color="primary">Editar</Button>
                        <Button color="Danger">Eliminar</Button>
                    </td>
                </tr> ))}
            </tbody>
          </table>
        </Container>
      </>
    );
  }
}
