import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import './Product.scss'
import useFetch from '../../hooks/useFetch';

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img")
    const [quantity, setQuantity] = useState(1)

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
    console.log(data);
    return (
        <div className='product'>
            {loading ? "loading" :
                <>
                    <div className="left">
                        <div className="images">
                            <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img")} />
                            <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.img1?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img1")} />
                        </div>

                        <div className="mainImg">
                            <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url } alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <h1>{data?.attributes?.title}</h1>
                        <span className='price'>$199</span>
                        <p>{data?.attributes?.desc}</p>
                        <div className="quantity">
                            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
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
                </>
            }
        </div>
    )
}

export default Product