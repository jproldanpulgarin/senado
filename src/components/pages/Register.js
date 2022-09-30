import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Image from "react-bootstrap/Image"
import logo from '../img/logo.png'
import logo_senado from "../img/Logo_Senado.png"
import "../css/signUp.css"
function Register(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Register User Portal</ModalHeader>
        <ModalBody>
        <section>
       

        <div className="contentBox">
            
            <form className='formBx'>
              {/*   <img src={logo} alt=""/>
                <h1>User Portal</h1> */}
                <Image src={logo_senado}></Image>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Input your User'></input>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Input your Password'></input>
                    <br>
                    </br>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder='Confirm your Password'></input>
                </div>
                <input type="submit" className="btn btn-primary" id='login'></input>

                 
            </form>
            
        </div>
    </section>
        </ModalBody>
        <ModalFooter>
        
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Register;