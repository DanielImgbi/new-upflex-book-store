import '../style/Header.css';
import { BsSearch } from 'react-icons/bs';


const Header = () => {
    return(
        <header className="header">
            <div className="container">

                <div className="logo">
                    <img src="./logo.webp" alt="logo" />

                </div>

                <nav className="nav">
                    <ul>
                        <li>Homepage</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li>Contacts</li>
                        <li> <label htmlFor="search"><BsSearch/></label></li>
                    </ul>
                </nav>
                
                <div className="cart">
                    <div className="cart-icon"></div>
                    <span>
                        14
                    </span>
                </div>
            </div>

        </header>
    )
}

export default Header