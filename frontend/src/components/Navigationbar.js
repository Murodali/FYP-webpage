import React, {useState}from 'react'
import {Navbar,Nav,Form,Button,Modal} from 'react-bootstrap'


//import 'bootstrap/dist/css/bootstrap.min.css'

function Navigationbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  

    

    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
  <Navbar.Brand href="/">FindaDoc <i className="fa fa-heartbeat"></i></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/doctors">Find a Doctor</Nav.Link>
      <Nav.Link href="/contacts">Contacts</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
   
     
    </Nav>
    <Form inline>
    <Nav.Link href="/">

    <Button variant="outline-primary" onClick={handleShow}>Sign In/Up</Button>


    <Modal
        show={show}
        onHide={handleShow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>


    </Nav.Link>
    </Form>

  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default Navigationbar
