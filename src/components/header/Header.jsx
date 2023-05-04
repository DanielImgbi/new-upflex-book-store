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
                        <li><Link to="#footer" className='link'>Contacts</Link></li>
                    </ul>
                </nav>
                
                <div className="search-cart-con">

                    <div className="search">
                        <span> <Link to="/search" style={{color:'black'}}><BsSearch/></Link></span>
                    </div>
                    <div className="cart">
                        <div className="cart-icon">
                            
                            <BsCart2 />
                            
                            <span>
                                14
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header