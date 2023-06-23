import './ItemCard.css'

const ItemCard = ({imagen, nombre, precio, descripcion}) => {

    return (
        <div className='estilo col-3 my-4'>
            <img className="tamaño m-3" src={imagen} />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <button className="btn btn-primary">Ver más</button>
        </div>

    )
}

export default ItemCard