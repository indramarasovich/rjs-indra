import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer row">
            <div className="col-3 p-5">
                <p>93 Arte Gráfico </p>
                <p>Estamos comprometidos al 100% con cada trabajo que hacemos. Queremos clientes y emprendimientos más felices, ellos son nuestro detalle y gracias a eso logramos nuestra reputación.</p>
            </div>
            <div className="col-3 p-5">
                <ul>
                    <li><Link className='lista' to="/">HOME</Link></li>
                    <li><Link className="lista" to="/productos/indumentaria">INDUMENTARIA</Link></li>
                    <li><Link className="lista" to="/productos/diseño">DISEÑO</Link></li>
                </ul>
            </div>
            <div className="col-3 p-5">
                <ul>
                    <li><Link className="lista" to="/">¿COMO COMPRAR?</Link></li>
                    <li><Link className="lista" to="/nosotros">NOSOTROS</Link></li>
                    <li><Link className="lista" to="/contacto">CONTACTO</Link></li>
                </ul>
            </div>
            <div className="info col-3 p-5">
                <p>1149157393</p>
                <p>mal.artegrafico@gmail.com</p>
                <p>Vicente López, Buenos Aires</p>
            </div>
        </div>

    )
}

export default Footer