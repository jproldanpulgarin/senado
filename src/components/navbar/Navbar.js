import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from "react-bootstrap/Image"
import logo_senado from "../img/Logo_Senado.png"
import "../navbar/Navbar.css"

function BarraNavegacion() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-2">
          <Container fluid>
            {/* PARTE EXTERNA DE EL MENU */}
              <Navbar.Brand href="#"></Navbar.Brand>

            {/* PARTE INTERNA DEL MENU HAMBURGUESA */}  
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id="menu" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="menu"
            >
              <Offcanvas.Header closeButton>
                {/* LOGO MENU */}
                <Image src={logo_senado} />
               
              </Offcanvas.Header>
                
              {/* CUERPO DEL MENU */}
              <Offcanvas.Body>
               
                <Form className="">
              
                  <Form.Control
                    type="text"
                    placeholder= "User"
                    className="me-2"
                    aria-label="User"
                    id='items'
                    
                  />
                  
                  <br/>
                  
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="me-2"
                    aria-label="Password"
                    id='items'
                  />

                  <br/>
                  <Button  variant='secondary'>Login</Button>
                  
                  <a href='' id='signUp'>Sign Up</a>


                </Form>
              </Offcanvas.Body>
             
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default BarraNavegacion;