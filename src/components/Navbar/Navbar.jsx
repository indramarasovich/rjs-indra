import './Navbar.scss'
import logo93 from '../../assets/logo93.jpg'
import CartWidget from '../CartWidget/CartWidget.jsx'


const Navbar = () => {
    return (
    <>
        <div className="estilo-nav">
            <a href="#" target="_blank">
                <img src={logo93} className="logo" alt="93 Arte Grafico" />
            </a>
            <nav>
                <a href="#">HOME</a>
                <a href="#">PRODUCTOS</a>
                <a href="#">¿COMO COMPRAR?</a>
                <a href="#">NOSOTROS</a>
                <a href="#">CONTACTO</a>
                <a href='#'><CartWidget /></a>
            </nav>
        </div>        
    </>
    )

}

export default Navbar
