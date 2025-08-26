import { Link } from "react-router-dom";
import logo from '../assets/YumLogo.png'
import colors from "./colors";

const navLinkStyle = {
    color: colors.darkColor,
    fontWeight: 500,
    marginRight: '15px',
    transition: 'color 0.3s ease, transform 0.2s ease'
};

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand transparent-navbar">
            <div className="container ">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="Site Logo" width="60" height="60" className="me-2" />
                    <span style={{
                        fontFamily: "'Pacifico', cursive",
                        fontSize: '30px',
                        color: colors.primaryColor,
                        letterSpacing: '1.5px',
                        transform: 'rotate(-1deg)'
                    }}>
                        YumRun
                    </span>

                </a>
                <ul className="navbar-nav  ms-auto">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            href="#"
                            style={{
                                ...navLinkStyle,
                                color: colors.primaryColor,
                                transition: 'color 0.3s ease, transform 0.2s ease'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            style={navLinkStyle}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = colors.primaryColor;
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = colors.darkColor;
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            Menu
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/about"
                            style={navLinkStyle}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = colors.primaryColor;
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = colors.darkColor;
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >AboutUs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            style={navLinkStyle}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = colors.primaryColor;
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = colors.darkColor;
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >Services</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            style={navLinkStyle}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = colors.primaryColor;
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = colors.darkColor;
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >Contact</a>
                    </li>
                </ul>
                <button className="btn ms-3"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        transition: "all 0.3s ease",
                        fontWeight: "600",
                        backgroundColor: colors.primaryColor
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.backgroundColor = "#ffc107";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.backgroundColor = colors.primaryColor;
                    }}>
                    Login
                </button>

            </div>
        </nav>
    );
}
