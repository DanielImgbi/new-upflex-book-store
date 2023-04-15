import { BsTwitter, BsFacebook, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer" id='footer'>

            <div className="container">

                <div className="row1">

                    <form className='form'>
                        <input type="email" placeholder='Enter your email' name="" id="" />
                        <button type="submit">Sign up now</button>
                    </form>

                </div>

                <div className="row2">

                    <ul>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>

                    <ul>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>

                    <ul>
                        <li>Tel: +234 586 95</li>
                    </ul>

                    <div className="media">
                        <BsFacebook />
                        <BsTwitter />
                        <BsWhatsapp />
                        <BsLinkedin/>
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer