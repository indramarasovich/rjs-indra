import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, category, descripcion, imagen}) => {

        return (
            <div className="detalle d-flex justify-content-center align-items-center">
                <div>
                    <img className="m-3" src={imagen} alt={nombre}/>
                </div>
                <div className="p-3">
                    <h2>{nombre}</h2>
                    <h4>Precio: ${precio}</h4>
                    <hr/>
                    <p className="py-2 px-5">{descripcion}</p>
                    <small>categoría: {category}</small>
            
                </div>
            </div>
        )
}

export default ItemDetail