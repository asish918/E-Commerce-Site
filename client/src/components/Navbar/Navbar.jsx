import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import en from '../../assets/en.png'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const products = useSelector(state => state.cart.products)

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src={en} alt="colonizers" />
                        <ArrowDownwardRoundedIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <ArrowDownwardRoundedIcon />
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                </div>

                <div className="center">
                    <Link className='link' to="/">ALPHA STORE</Link>
                </div>

                <div className="right">
                    <div className='item'>
                        <Link className='link' to="/">Homepage</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/">About</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/">Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/">Stores</Link>
                    </div>
                    <div className='icons'>
                        <SearchRoundedIcon />
                        <PersonOutlineRoundedIcon />
                        <FavoriteBorderRoundedIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartRoundedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar