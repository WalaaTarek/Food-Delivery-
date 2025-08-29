import logo from '../assets/YumLogo.png'
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'
import instagramIcon from '../assets/instagram.png'
import whatsappIcon from '../assets/whatsapp.png'
import colors from '../constant/colors';
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="mt-5">
            <div className="row row-cols-2 row-cols-md-4 p-4" style={{ backgroundColor: colors.secondaryColor, color: 'white' }}>
                <div style={{ padding: '15px' }}>
                    <a href="#"><img src={logo} alt="Logo" width="50" height="50" /></a>
                    <p className="mt-2" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                        Food you love, ordered easy, delivered fresh, enjoyed happily.
                    </p>
                    <div className="d-flex mt-3">
                        <a href="#" style={{ marginRight: '10px' }}><img src={facebookIcon} alt="Social" width="30" height="30" /></a>
                        <a href="#" style={{ marginRight: '10px' }}><img src={twitterIcon} alt="Social" width="30" height="30" /></a>
                        <a href="#" style={{ marginRight: '10px' }}><img src={instagramIcon} alt="Social" width="30" height="30" /></a>
                        <a href="#"><img src={whatsappIcon} alt="Social" width="30" height="30" /></a>
                    </div>
                </div>

                <div style={{ padding: '15px' }}>
                    <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Company</h6>
                    <Link
                        className="nav-link"
                        to="/aboutUs"
                    // onMouseEnter={(e) => {
                    //     e.currentTarget.style.color = colors.primaryColor;
                    //      e.currentTarget.style.transform = 'scale(1.05) translateY(-3px)';
                    //     e.currentTarget.style.transition = 'all 0.3s ease'; 
                    // }}
                    // onMouseLeave={(e) => {
                    //     e.currentTarget.style.color = "";
                    //     e.currentTarget.style.transform = "scale(1)";
                    // }}
                    >
                        About Us
                    </Link>
                    <p style={{ cursor: 'pointer', margin: '5px 0' }}>Careers</p>
                    <p style={{ cursor: 'pointer', margin: '5px 0' }}>Press</p>
                </div>

                <div style={{ padding: '15px' }}>
                    <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Services</h6>
                    <p style={{ cursor: 'pointer', margin: '5px 0' }}>Menu</p>
                    <p style={{ cursor: 'pointer', margin: '5px 0' }}>Delivery</p>
                    <p style={{ cursor: 'pointer', margin: '5px 0' }}>Support</p>
                </div>

                <div style={{ padding: '15px' }}>
                    <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Contact</h6>
                    <p style={{ margin: '5px 0' }}>Email: support@yumrun.com</p>
                    <p style={{ margin: '5px 0' }}>Phone: +0123 456 789</p>
                    <p style={{ margin: '5px 0' }}>Location: Giza, Egypt</p>
                </div>
            </div>
        </footer>
    );
}
