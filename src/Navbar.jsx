import './Navbar.css'
import logo93 from './assets/logo93.jpg'

function Navbar() {
    return (
    <>
    <div className="contenedor-nav">
        <a href="#" target="_blank">
            <img src={logo93} className="logo" alt="93 Arte Grafico" />
        </a>
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">REMERAS</a></li>
            <li><a href="#">BUZOS</a></li>
            <li><a href="#">TAZAS</a></li>
            <li><a href="#">VINILOS</a></li>
            <li><a href="#">CONTACTO</a></li>
        </ul>
    </div>
        <hr/>
        <p>Somos una empresa joven, innovadora y que apuesta a crecer. Realizamos una gran variedad de productos.</p>
        
    </>
    )

}

export default Navbar