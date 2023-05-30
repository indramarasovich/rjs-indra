import './CartWidget.scss'
import carrito from '../../assets/carrito.png'

const CartWidget = () => {
    return (
        <div className='carritoEstilo'>
            <a href="#"><img src={carrito} className='carrito' alt='Carrito de compras'/></a>
            <p>0</p>
        </div>
    )
}

export default CartWidget