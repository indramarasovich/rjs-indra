import './ItemCard.css'
import { Link } from 'react-router-dom'

const ItemCard = ({id, imagen, nombre, precio}) => {

    return (
        <div className='estilo col-3 my-4'>
            <img className="m-3" src={imagen} />
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <Link className="btn btn-primary" to={`/detail/${id}`}>Ver más</Link>
        </div>

    )
}

export default ItemCard