import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Zero100Navbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">제로백 PC방</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Suttles">Suttles</Nav.Link>
            <Nav.Link href="/Karaoke">Karaoke</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Zero100Navbar;
