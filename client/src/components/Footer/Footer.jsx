import payment from '../../assets/payment.png'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam inventore necessitatibus, mollitia nam corrupti eum pariatur? Labore, expedita, repudiandae numquam ipsum dolore architecto maxime ipsa odio reiciendis, dolorem officiis.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime rem deleniti minima laudantium eius architecto soluta esse totam iure quia voluptate ipsum temporibus, voluptatem harum? Atque eius provident excepturi!
                    </span>
                </div>
            </div>

            <div className="bottom">
                <div className="left">
                    <div className="logo">Alphastore</div>
                    <span className="copyright">&copy; Copyright 2023, All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src={payment} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer