import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Input, Label,Button } from "reactstrap";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  
  return (
    <>
      <form >
        <input
          type="text"
          name=""
          value={email}
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="text"
          name=""
          value={pass}
          placeholder="pass"
          onChange={(event) => setPass(event.target.value)}
        />
        <br />
        <button>Enviar</button>
      </form>
      {/* <Form>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
        </FormGroup>{" "}
        <Button>Submit</Button>
      </Form> */}
      <div className="container"></div>
    </>
  );
}
