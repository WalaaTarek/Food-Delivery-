import logo from './assets/YumLogo.png'
import facebookIcon from './assets/facebook.png'
import twitterIcon from './assets/twitter.png'
import instagramIcon from './assets/instagram.png'
import whatsappIcon from './assets/whatsapp.png'
import cheifImage from './assets/chefImage.png'
import orderIcon from './assets/orderIcon.png'
import fastIcon from './assets/fastOrderIcon.png'
import qualityIcon from './assets/qualityIcon.png'
import imgOfPage from './assets/imgOfPage.png'
import { Swiper, SwiperSlide } from "swiper/react";
import colors from './components/colors'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function App() {

  const navLinkStyle = {
    color: colors.darkColor,
    fontWeight: 500,
    marginRight: '15px',
    transition: 'color 0.3s ease, transform 0.2s ease'
  };


  const MenuItem = ({ icon, title, price }) => (
    <div
      style={{
        padding: '15px',
        borderRadius: '8px',
        margin: '10px',
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.backgroundColor = '#fffaf0';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
      }}
    >
      <img
        src={icon}
        alt={title}
        width="100"
        height="100"
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <h4 style={{
        fontWeight: '500',
        fontFamily: "'Poppins', sans-serif",
        color: colors.darkColor,
        letterSpacing: '1px'
      }}>
        {title}
      </h4>
      <h4 style={{
        fontFamily: "'Poppins', sans-serif",
        color: colors.primaryColor,
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginTop: '10px'
      }}>
        ${price}
      </h4>

    </div>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: colors.darkColor, backgroundColor: 'white' }}>

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
              >AboutUs</a>
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

      <div className="container my-5">
        <div className="row row-cols-md-2 align-items-center">
          <div style={{ paddingRight: '50px' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              fontFamily: "'Lobster', cursive",
              color: colors.darkColor,
              letterSpacing: '1px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              Bringing tasty bites to your door
            </h2>

            <p style={{
              fontSize: '1.2rem',
              color: colors.darkColor,
              fontFamily: "'Quicksand', sans-serif",
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              Hungry? We’ve got you covered! From quick snacks to full meals,
              enjoy fresh and tasty food delivered straight to your door in no time.
            </p>

            <button className="btn mb-4"
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
              }}
            >
              Order Now
            </button>

            <div className="d-flex mt-4">
              <a href="#" style={{ marginRight: '15px' }}><img src={facebookIcon} alt="Facebook" width="30" height="30" /></a>
              <a href="#" style={{ marginRight: '15px' }}><img src={whatsappIcon} alt="Whatsapp" width="30" height="30" /></a>
              <a href="#" style={{ marginRight: '15px' }}><img src={twitterIcon} alt="Twitter" width="30" height="30" /></a>
              <a href="#"><img src={instagramIcon} alt="Instagram" width="30" height="30" /></a>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <img src={logo} alt="Food Banner" style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '15px' }} />
          </div>
        </div>
      </div>

      <div style={{ padding: '50px 0' }}>
        <div className="container text-center my-5">
          <p className="text-uppercase fw-bold"
            style={{
              color: colors.primaryColor,
              fontSize: '14px',
              letterSpacing: '2px',
              marginBottom: '5px',
            }}>
            Our Services</p>
          <h4 style={{
            fontSize: '2rem',
            fontWeight: '700',
            fontFamily: "'Poppins', sans-serif",
            color: colors.darkColor,
            letterSpacing: '1px'
          }}>
            How It Works
          </h4>

          <div className="row row-cols-1 row-cols-md-3 mt-4 justify-content-center">

            <div className="col">
              <div style={{
                margin: '10px',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}>
                <img src={orderIcon} alt="" width="200" height="200" style={{ marginBottom: '15px' }} />
                <h4 style={{
                  color: colors.darkColor,
                  marginTop: '10px',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: '0.5px'
                }}>
                  Easy To Order
                </h4>
                <p style={{ color: '#6c757d' }}>Pick your fave and let us do the rest</p>
              </div>
            </div>

            <div className="col">
              <div style={{
                margin: '10px',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}>
                <img src={fastIcon} alt="" width="200" height="200" style={{ marginBottom: '5px' }} />
                <h4 style={{
                  color: colors.darkColor,
                  marginTop: '20px',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: '0.5px'
                }}>
                  Fastest Delivery
                </h4>

                <p style={{ color: '#6c757d' }}>The fastest way to your favorite food</p>
              </div>
            </div>

            <div className="col">
              <div style={{
                margin: '10px',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}>
                <img src={qualityIcon} alt="" width="200" height="200" style={{ marginBottom: '15px' }} />
                <h4 style={{
                  color: colors.darkColor,
                  marginTop: '10px',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: '0.5px'
                }}>
                  Best Quality
                </h4>
                <p style={{ color: '#6c757d' }}>Fresh, tasty, and made with care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center my-7">
        <p className="text-uppercase fw-bold"
          style={{
            color: colors.primaryColor,
            fontSize: '14px',
            letterSpacing: '2px',
            marginBottom: '5px',
          }}>Our Menu</p>
        <h4 style={{
          fontSize: '2rem',
          fontWeight: '700',
          fontFamily: "'Poppins', sans-serif",
          color: colors.darkColor,
          letterSpacing: '1px'
        }}>
          The Most Popular
        </h4>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <MenuItem icon={logo} title="Chicken" price="33" />
          </SwiperSlide>
          <SwiperSlide>
            <MenuItem icon={logo} title="Pizza" price="33" />
          </SwiperSlide>
          <SwiperSlide>
            <MenuItem icon={logo} title="Soup" price="33" />
          </SwiperSlide>
          <SwiperSlide>
            <MenuItem icon={logo} title="Fish" price="33" />
          </SwiperSlide>
          <SwiperSlide>
            <MenuItem icon={logo} title="Juice" price="33" />
          </SwiperSlide>
          <SwiperSlide>
            <MenuItem icon={logo} title="Salad" price="33" />
          </SwiperSlide>
          <SwiperSlide>
            <MenuItem icon={logo} title="Burger" price="33" />
          </SwiperSlide>
        </Swiper>

      </div>

      <div className="container my-5">
        <div className="row row-cols-md-2 align-items-center">
          <div className="d-flex justify-content-center">
            <img src={cheifImage} alt="Chef" style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '15px', objectFit: 'cover' }} />
          </div>
          <div style={{ paddingLeft: '50px' }}>
            <p className="text-uppercase fw-bold"
              style={{
                color: colors.primaryColor,
                fontSize: '14px',
                letterSpacing: '2px',
                marginBottom: '5px',
              }}>Our Chefs</p>

            <h4 style={{ fontSize: '2rem', color: colors.darkColor, fontWeight: 'bold', marginBottom: '30px', fontFamily: "'Poppins', sans-serif", letterSpacing: '1px' }}>Our chefs make every bite unforgettable</h4>
            <div style={{ borderLeft: `3px solid ${colors.primaryColor}`, paddingLeft: '20px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '5px', fontFamily: "'Poppins', sans-serif" }}>Reviewer Name: Ali</p>
              <div className="d-flex align-items-center mb-3">
                <span style={{ color: colors.darkColor, fontWeight: 'bold', fontFamily: "'Poppins', sans-serif" }}>5/5 Stars</span>
              </div>
              <p style={{ fontStyle: 'italic', color: '#6c757d' }}>
                "The food was simply amazing! Every dish was fresh, perfectly seasoned, and delivered quickly. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-md-2 align-items-center" style={{ backgroundColor: colors.primaryColor, padding: '50px 0', marginLeft: 100, marginRight: 100, borderRadius: 50 }}>
        <div className="p-5">
          <p className="text-uppercase fw-bold" style={{ color: colors.darkColor, fontSize: '14px', letterSpacing: '2px', marginBottom: '5px' }}>How It Works</p>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: "'Poppins', sans-serif" }}>Easy Steps to Order</h3>
          <p style={{ fontSize: '1.1rem', color: colors.darkColor, marginBottom: '20px', fontFamily: "'Poppins', sans-serif" }}>Browse, order, and enjoy your meal in just a few simple steps.</p>
          <button className="btn"
            style={{
              backgroundColor: colors.secondaryColor,
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '8px',
              fontFamily: "'Poppins', sans-serif",
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Show Steps
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <img src={imgOfPage} alt="Steps" width="200" height="200" style={{ borderRadius: '10px' }} />
        </div>
      </div>

      <div style={{ padding: "60px 0" }}>
        <div className="container text-center my-5">
          <p className="text-uppercase fw-bold" style={{ color: colors.primaryColor, letterSpacing: "1px" }}>
            Special Offers
          </p>
          <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333", fontFamily: "'Poppins', sans-serif" }}>
            Hot Offers 🔥
          </h3>
          <div className="row row-cols-1 row-cols-md-3 mt-4 justify-content-center">

            <div className="col">
              <div style={{
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                margin: "15px",
                padding: "20px",
                backgroundColor: "white",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}>
                <img src={logo} alt="Offer 1" className="img-fluid" style={{ borderRadius: "10px" }} />
                <h5 style={{ marginTop: "15px", color: "#333", fontFamily: "'Poppins', sans-serif" }}>Buy 1 Get 1 Free</h5>
                <p style={{ color: "#6c757d" }}>On all pizzas this weekend only</p>
                <button
                  className="btn btn-warning"
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
                  Order Now
                </button>
              </div>
            </div>

            <div className="col">
              <div style={{
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                margin: "15px",
                padding: "20px",
                backgroundColor: "white",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}>
                <img src={logo} alt="Offer 2" className="img-fluid" style={{ borderRadius: "10px" }} />
                <h5 style={{ marginTop: "15px", color: "#333" }}>20% Off Burgers</h5>
                <p style={{ color: "#6c757d" }}>Tasty deals for burger lovers</p>
                <button
                  className="btn"
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
                  Order Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

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
            <p style={{ cursor: 'pointer', margin: '5px 0' }}>About Us</p>
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
    </div>
  );
}

export default App;