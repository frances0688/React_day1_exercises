import "./Header"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <span className="fa-solid fa-square-full"></span>Frances Morales / FULLSTACK WEB DEVELOPER</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">HOME</Nav.Link>
                        <Nav.Link href="#contact-card">BIO</Nav.Link>
                        <Nav.Link href="#portfolioPage-main">PROJECTS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header