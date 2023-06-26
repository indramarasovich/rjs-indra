import ItemCard from "../ItemCard/ItemCard"


const ItemList = ( {items} ) => {

    return (
        <div className="container">
            <h4>Productos</h4>

            <div className="row justify-content-center">
                {
                    items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>
        </div>
    )
}

export default ItemList