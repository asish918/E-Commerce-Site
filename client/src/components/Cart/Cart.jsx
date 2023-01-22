import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import './Cart.scss'
import {useSelector, useDispatch} from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)
    const totalPrice = () => {
        let total = 0
        products.forEach(element => {
            total += element.quantity * element.price
        });

        return total.toFixed(2);
    }

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {products?.map((item, index) => (
                <div className='item' key={index}>
                    <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">{item.quantity} x ${item.price}</div>
                    </div>
                    <DeleteOutlineRoundedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>

            <button>PROCEES TO CHECKOUT</button>
            <div className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</div>
        </div>
    )
}

export default Cart