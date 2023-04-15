import './Header.css';
import {  BsCart2, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <header className="header">
            <div className="container">

                <div className="logo">
                    <img src="../img/logo.webp" alt="logo" />

                </div> 

                <nav className="nav">
                    <ul>
                        <li><Link to='/' className='link'>Home</Link></li>
                        <li><Link to='/shop' className='link'>Shop</Link></li>
                        <li>Pages</li>
                        <li><label htmlFor="footer">Contacts</label></li>
                        <li> <label htmlFor="search"><BsSearch/></label></li>
                    </ul>
                </nav>
                
                <div className="cart">
                    <div className="cart-icon"><BsCart2/></div>
                    <span>
                        14
                    </span>
                </div>
            </div>

        </header>
    )
}

export default Header