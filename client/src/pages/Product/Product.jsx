import { useState } from 'react'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import './Product.scss'
import AccountBalanceWalletRounded from '@mui/icons-material/AccountBalanceWalletRounded';

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [
        "https://images.pexels.com/photos/10026456/pexels-photo-10026456.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    ];

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
                </div>

                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error minima voluptatem quidem odit cupiditate iusto impedit numquam illo facilis facere hic quia, eveniet minus qui tempora amet sunt laboriosam esse?</p>
                <div className="quantity">
                    <button onClick={()=>setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                        {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>

                <button className='add'>
                    <AddShoppingCartRoundedIcon /> ADD TO CART
                </button>

                <div className="links">
                    <div className="item">
                        <FavoriteBorderRoundedIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceRoundedIcon /> ADD TO COMPARE
                    </div>
                </div>

                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product