import logo from "./assets/YumLogo.png";
import facebookIcon from "./assets/facebook.png";
import twitterIcon from "./assets/twitter.png";
import instagramIcon from "./assets/instagram.png";
import whatsappIcon from "./assets/whatsapp.png";
import chefImage from "./assets/chefImage.png";
import orderIcon from "./assets/orderIcon.png";
import fastIcon from "./assets/fastOrderIcon.png";
import qualityIcon from "./assets/qualityIcon.png";
import imgOfPage from "./assets/imgOfPage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import colors from "./constant/colors";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Navbar from "./components/Navbar";
import MenuItem from "./components/MenuItem";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: colors.darkColor,
        backgroundColor: colors.backgroundColor,
      }}
    >
      <Navbar />

      <div className="container my-5">
        <div className="row row-cols-md-2 align-items-center">
          <div style={{ paddingRight: "50px" }}>
            <h2
              style={{
                fontSize: "3.5rem",
                fontWeight: "bold",
                fontFamily: "'Lobster', cursive",
                color: colors.darkColor,
                letterSpacing: "1px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Bringing tasty bites to your door
            </h2>

            <p
              style={{
                fontSize: "1.2rem",
                color: colors.darkColor,
                fontFamily: "'Quicksand', sans-serif",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              Hungry? We’ve got you covered! From quick snacks to full meals,
              enjoy fresh and tasty food delivered straight to your door in no
              time.
            </p>

            <button
              className="btn mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                transition: "all 0.3s ease",
                fontWeight: "600",
                backgroundColor: colors.primaryColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.backgroundColor = "#ffc107";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = colors.primaryColor;
              }}
              onClick={() => navigate("/menu")}
            >
              Order Now
            </button>

            <div className="d-flex mt-4">
              <a href="#" style={{ marginRight: "15px" }}>
                <img src={facebookIcon} alt="Facebook" width="30" height="30" />
              </a>
              <a href="#" style={{ marginRight: "15px" }}>
                <img src={whatsappIcon} alt="Whatsapp" width="30" height="30" />
              </a>
              <a href="#" style={{ marginRight: "15px" }}>
                <img src={twitterIcon} alt="Twitter" width="30" height="30" />
              </a>
              <a href="#">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={logo}
              alt="Food Banner"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "15px",
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ padding: "50px 0" }}>
        <div className="container text-center my-5">
          <p
            className="text-uppercase fw-bold"
            style={{
              color: colors.primaryColor,
              fontSize: "14px",
              letterSpacing: "2px",
              marginBottom: "5px",
            }}
          >
            Our Services
          </p>
          <h4
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              fontFamily: "'Poppins', sans-serif",
              color: colors.darkColor,
              letterSpacing: "1px",
            }}
          >
            How It Works
          </h4>

          <div className="row row-cols-1 row-cols-md-3 mt-4 justify-content-center">
            <div className="col">
              <div
                style={{
                  margin: "10px",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <img
                  src={orderIcon}
                  alt=""
                  width="200"
                  height="200"
                  style={{ marginBottom: "15px" }}
                />
                <h4
                  style={{
                    color: colors.darkColor,
                    marginTop: "10px",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "0.5px",
                  }}
                >
                  Easy To Order
                </h4>
                <p style={{ color: "#6c757d" }}>
                  Pick your fave and let us do the rest
                </p>
              </div>
            </div>

            <div className="col">
              <div
                style={{
                  margin: "10px",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <img
                  src={fastIcon}
                  alt=""
                  width="200"
                  height="200"
                  style={{ marginBottom: "5px" }}
                />
                <h4
                  style={{
                    color: colors.darkColor,
                    marginTop: "20px",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "0.5px",
                  }}
                >
                  Fastest Delivery
                </h4>

                <p style={{ color: "#6c757d" }}>
                  The fastest way to your favorite food
                </p>
              </div>
            </div>

            <div className="col">
              <div
                style={{
                  margin: "10px",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <img
                  src={qualityIcon}
                  alt=""
                  width="200"
                  height="200"
                  style={{ marginBottom: "15px" }}
                />
                <h4
                  style={{
                    color: colors.darkColor,
                    marginTop: "10px",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "0.5px",
                  }}
                >
                  Best Quality
                </h4>
                <p style={{ color: "#6c757d" }}>
                  Fresh, tasty, and made with care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center my-7">
        <p
          className="text-uppercase fw-bold"
          style={{
            color: colors.primaryColor,
            fontSize: "14px",
            letterSpacing: "2px",
            marginBottom: "5px",
          }}
        >
          Our Menu
        </p>
        <h4
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            fontFamily: "'Poppins', sans-serif",
            color: colors.darkColor,
            letterSpacing: "1px",
          }}
        >
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
            <img
              src={chefImage}
              alt="Chef"
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "15px",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ paddingLeft: "50px" }}>
            <p
              className="text-uppercase fw-bold"
              style={{
                color: colors.primaryColor,
                fontSize: "14px",
                letterSpacing: "2px",
                marginBottom: "5px",
              }}
            >
              Our Chefs
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: colors.darkColor,
                fontWeight: "bold",
                marginBottom: "30px",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "1px",
              }}
            >
              Our chefs make every bite unforgettable
            </h4>
            <div
              style={{
                borderLeft: `3px solid ${colors.primaryColor}`,
                paddingLeft: "20px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "5px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Reviewer Name: Ali
              </p>
              <div className="d-flex align-items-center mb-3">
                <span
                  style={{
                    color: colors.darkColor,
                    fontWeight: "bold",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  5/5 Stars
                </span>
              </div>
              <p style={{ fontStyle: "italic", color: "#6c757d" }}>
                "The food was simply amazing! Every dish was fresh, perfectly
                seasoned, and delivered quickly. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row row-cols-md-2 align-items-center"
        style={{
          backgroundColor: colors.primaryColor,
          padding: "50px 0",
          marginLeft: 100,
          marginRight: 100,
          borderRadius: 50,
        }}
      >
        <div className="p-5">
          <p
            className="text-uppercase fw-bold"
            style={{
              color: colors.darkColor,
              fontSize: "14px",
              letterSpacing: "2px",
              marginBottom: "5px",
            }}
          >
            How It Works
          </p>
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Easy Steps to Order
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              color: colors.darkColor,
              marginBottom: "20px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Browse, order, and enjoy your meal in just a few simple steps.
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: colors.secondaryColor,
              color: "white",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "8px",
              fontFamily: "'Poppins', sans-serif",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Show Steps
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <img
            src={imgOfPage}
            alt="Steps"
            width="200"
            height="200"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>

      <div style={{ padding: "60px 0" }}>
        <div className="container text-center my-5">
          <p
            className="text-uppercase fw-bold"
            style={{ color: colors.primaryColor, letterSpacing: "1px" }}
          >
            Special Offers
          </p>
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#333",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Hot Offers 🔥
          </h3>
          <div className="row row-cols-1 row-cols-md-3 mt-4 justify-content-center">
            <div className="col">
              <div
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  margin: "15px",
                  padding: "20px",
                  backgroundColor: "white",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <img
                  src={logo}
                  alt="Offer 1"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                />
                <h5
                  style={{
                    marginTop: "15px",
                    color: "#333",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Buy 1 Get 1 Free
                </h5>
                <p style={{ color: "#6c757d" }}>
                  On all pizzas this weekend only
                </p>
                <button
                  className="btn btn-warning"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    transition: "all 0.3s ease",
                    fontWeight: "600",
                    backgroundColor: colors.primaryColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.backgroundColor = "#ffc107";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = colors.primaryColor;
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>

            <div className="col">
              <div
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  margin: "15px",
                  padding: "20px",
                  backgroundColor: "white",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <img
                  src={logo}
                  alt="Offer 2"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                />
                <h5 style={{ marginTop: "15px", color: "#333" }}>
                  20% Off Burgers
                </h5>
                <p style={{ color: "#6c757d" }}>
                  Tasty deals for burger lovers
                </p>
                <button
                  className="btn"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    transition: "all 0.3s ease",
                    fontWeight: "600",
                    backgroundColor: colors.primaryColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.backgroundColor = "#ffc107";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = colors.primaryColor;
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
