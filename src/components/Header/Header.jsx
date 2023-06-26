import './Header.scss'
import logo93 from '../../assets/logo93.jpg'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <Navbar expand="lg" className="estilo-nav" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                        src={logo93}
                        className="logo"
                        alt="93 Arte Grafico" 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='color'/>
                
                <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                    
                    <Nav
                        navbarScroll
                    >
                        <Link className='links' to="/">HOME</Link>
                        <Link className="links" to="/productos/indumentaria">INDUMENTARIA</Link>
                        <Link className="links" to="/productos/diseño">DISEÑO</Link>
                        <Link className="links" to="/">¿COMO COMPRAR?</Link>
                        <Link className="links" to="/nosotros">NOSOTROS</Link>
                        <Link className="links" to="/contacto">CONTACTO</Link>
                        <Link className="links" to='/'><CartWidget /></Link> 
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header
