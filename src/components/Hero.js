import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form,Button } from 'react-bootstrap';

function Hero() {
  return (
    <>
      <Navbar style={{backgroundColor:'	#696969'}} variant="dark">
        <Container>
          <Navbar.Brand className='ms-5' href="#">Navbar</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Review</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Container>
        <Form className="d-flex me-5">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Search</Button>
          </Form>
      </Navbar>
     
    </>
  );
}

export default Hero;