import ItemCard from "../ItemCard/ItemCard"


const ItemList = ( {items} ) => {

    return (
        <div className="container m-5">
            <h2>Productos</h2>
            <hr />

            <div className="row">
                {
                    items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>
        </div>
    )
}

export default ItemList