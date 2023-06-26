import './Navbar.scss'
import logo93 from '../../assets/logo93.jpg'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="estilo-nav">
                <Link className="header_link" to="/">
                    <img src={logo93} className="logo" alt="93 Arte Grafico" />
                </Link>
                <nav>
                    <Link className="header_link" to="/">HOME</Link>
                    <Link className="header_link" to="/productos/indumentaria">INDUMENTARIA</Link>
                    <Link className="header_link" to="/productos/diseño">DISEÑO</Link>
                    <Link className="header_link" to="/">¿COMO COMPRAR?</Link>
                    <Link className="header_link" to="/nosotros">NOSOTROS</Link>
                    <Link className="header_link" to="/contacto">CONTACTO</Link>
                    <Link className="header_link" to='/'><CartWidget /></Link> 
                </nav>
            </div>        
        </>
    )
}
export default Navbar
