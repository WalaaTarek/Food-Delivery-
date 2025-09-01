import { useLocation, useNavigate } from "react-router-dom";
import QuantityInput from "./QuantityInput";
import { useEffect, useState } from "react";
import colors from '../constant/colors'

export default function SingleItemView() {
    const location = useLocation();
    const navigate = useNavigate();
    const { item } = location.state || {};
    const [relatedItems, setRelatedItems] = useState([]);

    const getItem = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/category/getItem/${item.category_id}`
            );
            const data = await response.json();
            if (data) {
                const filtered = data.filter((i) => i._id !== item._id).slice(0, 3);
                setRelatedItems(filtered);
            }
        } catch (err) {
            console.log("Error fetching items:", err);
        }
    };

    useEffect(() => {
        if (item?.category_id) {
            getItem();
        }
    }, [item]);

    if (!item) {
        return (
            <h2 className="text-center mt-5 text-danger fw-bold">
                No item found. Please navigate from the menu.
            </h2>
        );
    }

    return (
        <div className="container py-5" style={{ backgroundColor: colors.backgroundColor }}>
            <div className="row g-5 align-items-start">
                <div className="col-md-5 text-center">
                    <img
                        style={{ width: 400, height: 400 }}
                        src={item.images[0]}
                        alt={item.item_name}
                        className="img-fluid rounded shadow"
                    />

                    <section className="mt-4">
                        <h3 className="h4 border-bottom pb-2 text-dark fw-bold text-center"
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                fontFamily: "'Poppins', sans-serif",
                                color: colors.darkColor,
                                letterSpacing: "1px",
                            }}>
                            🥕 Ingredients
                        </h3>
                        <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-2 mt-3">
                            {item.ingredients?.map((ingredient, index) => (
                                <li
                                    key={index}
                                    className="d-flex align-items-center bg-light border rounded px-3 py-2 shadow-sm"
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: "700",
                                        fontFamily: "'Poppins', sans-serif",
                                        color: colors.darkColor,
                                        letterSpacing: "1px",
                                    }}
                                >
                                    <span className="me-2" style={{ color: colors.p }}>✓</span>
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="col-md-7">
                    <h1 className="display-5 fw-bold text-dark"
                        style={{
                            fontSize: "3.5rem",
                            fontWeight: "bold",
                            fontFamily: "'Lobster', cursive",
                            color: colors.darkColor,
                            letterSpacing: "1px",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                            marginBottom: 30,
                        }}>
                        {item.item_name}
                    </h1>
                    <h2 className="text-success fw-bold fs-2">${item.price}</h2>
                    <p className="text-muted fs-5"
                        style={{
                            marginTop: 30,
                            fontSize: "1.2rem",
                            color: colors.darkColor,
                            fontFamily: "'Quicksand', sans-serif",
                            marginBottom: "30px",
                            lineHeight: "1.6",
                        }}>
                        {item.description}
                    </p>

                    <section className="mt-4">
                        <p className="fw-semibold"
                            style={{
                                fontSize: "1.1rem",
                                fontWeight: "600",
                                fontFamily: "'Poppins', sans-serif",
                                color: colors.darkColor,
                                letterSpacing: "1px",
                            }}>
                            Quantity
                        </p>
                        <div className="d-flex flex-column flex-sm-row gap-3 align-items-center">
                            <div className="d-flex gap-2 w-sm-auto">
                                <QuantityInput />
                                <button
                                    className="btn btn-lg rounded-pill flex-grow-1"
                                    style={{
                                        fontSize: "1rem",
                                        marginTop: 18,
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
                                    Add to cart
                                </button>
                            </div>
                        </div>

                        <button
                            className="btn btn-lg rounded-pill"
                            style={{
                                marginTop: 20,
                                fontFamily: "'Poppins', sans-serif",
                                transition: "all 0.3s ease",
                                fontWeight: "600",
                                backgroundColor: colors.primaryColor,
                                width: '80%'
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
                            Order now
                        </button>
                    </section>
                </div>
            </div>

            <h3 className="h4 mt-5 mb-3 text-center fw-bold"
                style={{
                    fontSize: "1.7rem",
                    fontWeight: "700",
                    fontFamily: "'Poppins', sans-serif",
                    color: colors.darkColor,
                    letterSpacing: "1px",
                }}>
                You Might Also Like
            </h3>
            <div className="d-flex gap-3 overflow-auto pb-2 justify-content-center">
                {relatedItems.length > 0 ? (
                    relatedItems.map((related) => (
                        <div
                            key={related._id}
                            onClick={() =>
                                navigate("/singleitemview", { state: { item: related } })
                            }
                            className="card shadow-sm border-0 d-flex flex-column align-items-center"
                            style={{ minWidth: "160px", cursor: "pointer" }}
                        >
                            <img
                                src={related.images[0]}
                                alt={related.item_name}
                                className="card-img-top rounded"
                                style={{ height: "120px", width: "100%", objectFit: "cover" }}
                            />
                            <div className="card-body p-2 d-flex justify-content-center">
                                <p className="card-text text-center fw-semibold small mb-0">
                                    {related.item_name}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-muted text-center">No related items found.</p>
                )}
            </div>
        </div>
    );
}