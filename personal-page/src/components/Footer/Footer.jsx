import "./Footer"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <Navbar sticky="bottom" expand="lg" className="bg-body-tertiary">
            <Container >
                <h5>Developed with<span className="fa-solid fa-heart"></span>by Frances</h5>
                <div>
                    <h4>Call</h4>
                    <p>123 45 67 89</p>
                </div>
                <div>
                    <h4>Write</h4>
                    <p>myemail@email.com</p>
                </div>
                <div>
                    <h4>Follow</h4>
                    <div>
                        <a href="#">
                            <span className="fa-brands fa-linkedin-in"></span>
                        </a>
                        <a href="#">
                            <span className="fa-brands fa-github"></span>
                        </a>
                        <a href="#">
                            <span className="fa-brands fa-facebook-f"></span>
                        </a>
                        <a href="#">
                            <span className="fa-brands fa-instagram"></span>
                        </a>
                    </div>
                </div>
            </Container>
        </Navbar>

    )
}

export default Footer