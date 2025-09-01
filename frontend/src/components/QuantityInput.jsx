import { useState } from "react";

export default function QuantityInput() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () =>
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "20px",
            }}
        >
            <button
                onClick={decrement}
                style={{
                    width: "40px",
                    height: "40px",
                    fontSize: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#f0f0f0",
                    cursor: "pointer",
                }}
            >
                −
            </button>

            <input
                type="text"
                value={quantity}
                readOnly
                style={{
                    width: "50px",
                    textAlign: "center",
                    fontSize: "18px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "5px",
                }}
            />

            <button
                onClick={increment}
                style={{
                    width: "40px",
                    height: "40px",
                    fontSize: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#f0f0f0",
                    cursor: "pointer",
                }}
            >
                +
            </button>
        </div>
    );
}
