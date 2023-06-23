


const ItemCard = ({nombre, precio, descripcion}) => {

    return (
        <div className='col-3 m-2'>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <button className="btn btn-primary">Ver más</button>
        </div>

    )
}

export default ItemCard