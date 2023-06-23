import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useProductos } from '../../hooks/useProductos'

const ItemListContainer = () => {

    const { productos, loading } = useProductos()

    return (
        <div className="container text-center">
            {
                loading
                    ? <h2>Cargando</h2>
                    : <ItemList items={productos} />
            }
        </div>
    )
}

export default ItemListContainer