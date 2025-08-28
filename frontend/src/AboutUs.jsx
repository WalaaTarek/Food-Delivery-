import colors from "./constant/colors";
import pasta from './assets/pastaImg.jpg'
import sandwich from './assets/sandwich.jpg'
import foodPhoto from './assets/foodPhoto.jpeg'
import beefImg from './assets/beefImg.jpg'
const AboutUs = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h2 style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    fontFamily: "'Lobster', cursive",
                    color: colors.primaryColor,
                    letterSpacing: '1px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                    About Us
                </h2>
                <p style={{
                    fontSize: '1.2rem',
                    color: colors.secondaryColor,
                    fontFamily: "'Quicksand', sans-serif",
                    marginBottom: '30px',
                    lineHeight: '1.6'
                }}>
                    Delivering happiness, one meal at a time 🍔🍕

                </p>
            </div>

            <h6 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                fontFamily: "'Lobster', cursive",
                color: colors.primaryColor,
                letterSpacing: '1px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
                Our Story
            </h6>

            <div className="row align-items-center mb-5 flex-row-reverse">
                <div className="col-md-6 d-flex justify-content-center">
                    <img
                        src={pasta}
                        alt="Food Delivery 2010"
                        className="img-fluid rounded shadow-lg w-75"
                    />
                </div>
                <div className="col-md-6">
                    <p className="lead"
                        style={{
                            fontSize: '1.2rem',
                            color: colors.secondaryColor,
                            fontFamily: "'Lobster', cursive",
                            marginBottom: '30px',
                            lineHeight: '3.6'
                        }}>
                        Our journey started in 2004 as a small local
                        restaurant with a simple goal: bringing delicious meals to our
                        neighborhood. As demand grew, we realized people wanted not only
                        great food but also convenience.
                    </p>
                </div>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                    <img
                        src={beefImg}
                        alt="Food Delivery 2004"
                        className="img-fluid rounded shadow-lg w-75"
                    />
                </div>
                <div className="col-md-6">
                    <p className="lead"
                        style={{
                            fontSize: '1.2rem',
                            color: colors.secondaryColor,
                            fontFamily: "'Lobster', cursive",
                            marginBottom: '30px',
                            lineHeight: '3.6'
                        }}>
                        In 2010, we launched our very first delivery
                        service, connecting hungry customers with our kitchen. The idea was
                        a huge success, and soon we partnered with other local restaurants.
                    </p>
                </div>
            </div>

            <div className="row align-items-center mb-5 flex-row-reverse">
                <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                    <img
                        src={sandwich}
                        alt="Food Delivery 2025"
                        className="img-fluid rounded shadow-lg w-75"
                    />
                </div>
                <div className="col-md-6">
                    <p className="lead"
                        style={{
                            fontSize: '1.2rem',
                            color: colors.secondaryColor,
                            fontFamily: "'Lobster', cursive",
                            marginBottom: '30px',
                            lineHeight: '3.6'
                        }}>
                        By 2015, we expanded our platform into a full food
                        delivery service, making it easier than ever for people to order
                        meals from multiple restaurants in just a few clicks.
                    </p>
                </div>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                    <img
                        src={foodPhoto}
                        alt="Food Delivery 2015"
                        className="img-fluid rounded shadow-lg w-75"
                    />
                </div>
                <div className="col-md-6">
                    <p className="lead"
                        style={{
                            fontSize: '1.2rem',
                            color: colors.secondaryColor,
                            fontFamily: "'Lobster', cursive",
                            marginBottom: '30px',
                            lineHeight: '3.6'
                        }}>
                        Today, in 2025, we are proud to serve thousands of
                        happy customers daily, working with hundreds of restaurant partners,
                        and always focusing on quality, speed, and customer satisfaction.

                    </p>
                </div>
            </div>

            <h2 className="text-center mb-4"
                style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    fontFamily: "'Lobster', cursive",
                    color: colors.primaryColor,
                    letterSpacing: '1px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                Our Values
            </h2>
            <div className="row text-center">

                <div className="col-md-4 mb-3">
                    <div className="p-4 border rounded shadow" style={{ backgroundColor: colors.primaryColor }}>
                        <h3 className="fw-bold" style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: "'Lobster', cursive",
                            color: colors.secondaryColor,
                            letterSpacing: '1px',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                        }}>
                            🍽️ Quality Food
                        </h3>
                        <p className="text-muted"
                            style={{
                                fontSize: '1.2rem',
                                fontFamily: "'Lobster', cursive",
                                marginBottom: '30px',
                            }}>
                            Every meal is prepared with love to make sure it’s always fresh and delicious.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="p-4 border rounded shadow" style={{ backgroundColor: colors.primaryColor }}>
                        <h3 className="fw-bold" style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: "'Lobster', cursive",
                            color: colors.secondaryColor,
                            letterSpacing: '1px',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                        }}>
                            ⚡ Fast Delivery
                        </h3>
                        <p className="text-muted"
                            style={{
                                fontSize: '1.2rem',
                                fontFamily: "'Lobster', cursive",
                                marginBottom: '30px',
                            }}>
                            We value your time — that’s why we deliver hot meals as quickly as possible.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="p-4 border rounded shadow" style={{ backgroundColor: colors.primaryColor }}>
                        <h3 className="fw-bold" style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: "'Lobster', cursive",
                            color: colors.secondaryColor,
                            letterSpacing: '1px',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                        }}>
                            ❤️ Customer First
                        </h3>
                        <p className="text-muted"
                            style={{
                                fontSize: '1.2rem',
                                fontFamily: "'Lobster', cursive",
                                marginBottom: '30px',
                            }}>
                            Your satisfaction is our priority. We’re here to make every order enjoyable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
