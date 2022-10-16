import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
function BrandExample() {
  return (
    <Container className='pt-2'>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className='rounded-pill'>
      <Container>
        <Navbar.Brand href="#home">Buttler</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to={'big-screen'} ><Nav.Link href="#features">Big Screen</Nav.Link></Link>
            <Link to={'calling-orders'} ><Nav.Link href="#features">Calling Orders</Nav.Link></Link>
            <Link to={'adh'} ><Nav.Link href="#features">Admin</Nav.Link></Link>
            <Link to={'menu'} ><Nav.Link href="#features">Menu</Nav.Link></Link>
            
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default BrandExample;