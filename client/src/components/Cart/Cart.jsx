import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import './Cart.scss'

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img1: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam consectetur veritatis repellendus, non amet praesentium incidunt omnis repellat? Dolor velit autem, eaque quibusdam maxime voluptatibus distinctio neque asperiores ratione.",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam consectetur veritatis repellendus, non amet praesentium incidunt omnis repellat? Dolor velit autem, eaque quibusdam maxime voluptatibus distinctio neque asperiores ratione.",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
    ];

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map((item, index) => (
                <div className='item' key={index}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlineRoundedIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>

            <button>PROCEES TO CHECKOUT</button>
            <div className="reset">Reset Cart</div>
        </div>
    )
}

export default Cart