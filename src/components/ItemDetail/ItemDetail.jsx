

const ItemDetail = ({id, nombre, precio, category, descripcion, imagen}) => {

        return (
            <div className="container my-5">
                <h2>{nombre} </h2>

                <img className="tamaño m-3" src={imagen} alt={nombre}/>
                <p>{descripcion}</p>

                <h4>Precio: ${precio}</h4>
                <br/>
                <small>categoría: {category}</small>
           
            </div>
        )
}

export default ItemDetail