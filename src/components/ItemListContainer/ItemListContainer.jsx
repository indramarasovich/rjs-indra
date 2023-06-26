import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useProductos } from '../../hooks/useProductos'

const ItemListContainer = () => {

    const { productos, loading } = useProductos()

    return (
        <div className='contenedor'>
            <div className="container text-center">
                {
                    loading
                        ? <h4>Cargando</h4>
                        : <ItemList items={productos} />
                }
            </div>
        </div>
    )
}

export default ItemListContainer