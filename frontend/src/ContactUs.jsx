import facebookIcon from './assets/facebook.png'
import twitterIcon from './assets/twitter.png'
import instagramIcon from './assets/instagram.png'
import whatsappIcon from './assets/whatsapp.png'
import colors from './constant/colors'
import { FaPhoneAlt, FaClock, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
    return (
        <div className="container py-5" style={{ overflow: 'hidden' }}>
            <div className="d-flex justify-content-center mb-5">
                <h2 style={{
                    fontSize: "5rem",
                    fontWeight: 'bold',
                    fontFamily: "'Lobster', cursive",
                    color: colors.primaryColor,
                    letterSpacing: '10px',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
                    transform: 'rotate(-2deg)',
                    transformOrigin: 'top left',
                    marginLeft: '-20px',
                    marginTop: '30px'
                }}>
                    Contact Us
                </h2>
            </div>

            <div className="row g-4 mt-5 justify-content-center">

                <div className="col-12 col-md-6 col-lg-4" style={{ transform: 'rotate(2deg)' }}>
                    <div className="p-4 rounded-3 shadow-lg h-100 d-flex flex-column justify-content-center align-items-center"
                        style={{ backgroundColor: "#ffdb4d", transition: 'transform 0.3s ease-in-out' }}>
                        <p className="fw-bold fs-3 mb-2 d-flex align-items-center">
                            <FaPhoneAlt className="me-2 text-dark" />
                            <span className="text-dark">Call</span>
                        </p>
                        <p className="m-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>+02 0126 065 4343</p>
                        <p className="m-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>+02 0115 439 4545</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4" style={{ transform: 'rotate(-2deg)', marginTop: '50px' }}>
                    <div className="p-4 rounded-3 shadow-lg h-100 d-flex flex-column justify-content-center align-items-center"
                        style={{ backgroundColor: "#ffdb4d", transition: 'transform 0.3s ease-in-out' }}>
                        <p className="fw-bold fs-3 mb-2 d-flex align-items-center">
                            <FaClock className="me-2 text-dark" />
                            <span className="text-dark">Hours</span>
                        </p>
                        <p className="m-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>Sunday - Thursday</p>
                        <p className="m-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>11 am : 6 pm</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4" style={{ transform: 'rotate(2deg)' }}>
                    <div className="p-4 rounded-3 shadow-lg h-100 d-flex flex-column justify-content-center align-items-center"
                        style={{ backgroundColor: "#ffdb4d", transition: 'transform 0.3s ease-in-out' }}>
                        <p className="fw-bold fs-3 mb-2 d-flex align-items-center">
                            <FaEnvelope className="me-2 text-dark" />
                            <span className="text-dark">Send</span>
                        </p>
                        <p className="m-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>Mail: support@yumrun.com</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4" style={{ transform: 'rotate(-2deg)', marginTop: '50px' }}>
                    <div className="p-4 rounded-3 shadow-lg h-100 d-flex flex-column justify-content-center align-items-center"
                        style={{ backgroundColor: "#ffdb4d", transition: 'transform 0.3s ease-in-out' }}>
                        <p className="fw-bold fs-3 mb-2 d-flex align-items-center">
                            <FaMapMarkerAlt className="me-2 text-dark" />
                            <span className="text-dark">Location</span>
                        </p>
                        <p className="m-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>Giza, Egypt</p>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <a href="#" className="me-4"><img src={facebookIcon} alt="Facebook" width="50" height="50" style={{ transition: 'transform 0.3s ease-in-out', filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))' }} /></a>
                    <a href="#" className="me-4"><img src={whatsappIcon} alt="Whatsapp" width="50" height="50" style={{ transition: 'transform 0.3s ease-in-out', filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))' }} /></a>
                    <a href="#" className="me-4"><img src={twitterIcon} alt="Twitter" width="50" height="50" style={{ transition: 'transform 0.3s ease-in-out', filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))' }} /></a>
                    <a href="#" className="me-4"><img src={instagramIcon} alt="Instagram" width="50" height="50" style={{ transition: 'transform 0.3s ease-in-out', filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))' }} /></a>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;