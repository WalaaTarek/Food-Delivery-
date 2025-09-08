import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../constant/colors";
import quotesDown from "../assets/quotes-down.svg";
import quotesTop from "../assets/quotes-top.svg";

export function AverageRating({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  const average = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="d-flex align-items-center gap-2 mb-3">
      <div className="d-flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`fs-4 mx-1 ${i + 1 <= Math.round(average) ? "text-warning" : "text-muted"
              }`}
          >
            ★
          </span>
        ))}
      </div>
      <h6 className="fw-bold mb-0" style={{ color: colors.darkColor }}>
        {average} / 5{" "}
        <small className="text-muted">({reviews.length} reviews)</small>
      </h6>
    </div>
  );
}

export default function ReviewSection({ item_id, reviews, setReviews }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/reviews/${item_id}`);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    if (item_id) fetchReviews();
  }, [item_id, setReviews]);

  const handleSubmitReview = async () => {
    if (!user) {
      alert("Please login first to add a review.");
      navigate("/login");
      return;
    }
    if (!rating || !comment) return alert("Please add stars and a comment.");

    try {
      const res = await fetch("http://localhost:5000/api/reviews/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ item_id, rating, comment }),
      });

      if (res.ok) {
        setRating(0);
        setComment("");
        const updatedRes = await fetch(
          `http://localhost:5000/api/reviews/${item_id}`
        );
        const updatedData = await updatedRes.json();
        setReviews(updatedData);
      } else {
        const data = await res.json();
        alert(`Error: ${data.message || "Failed to submit review"}`);
      }
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Something went wrong while submitting your review.");
    }
  };

  return (
    <section className="container my-5">
      <h3 className="fw-bold text-center mb-4" style={{ color: colors.primaryColor }}>
        Customer Reviews
      </h3>

      <div className="text-center mb-4">
        <div className="d-flex justify-content-center mb-3">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <span
                key={index}
                className={`fs-2 mx-1 ${starValue <= (hover || rating) ? "text-warning" : "text-muted"
                  }`}
                style={{ cursor: "pointer", transition: "transform 0.2s" }}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            );
          })}
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <textarea
            className="form-control shadow-sm"
            style={{ maxWidth: "600px" }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review..."
            rows={4}
          />
          <button
            className="btn btn-warning px-4 py-2 fw-semibold shadow"
            onClick={handleSubmitReview}
          >
            Submit Review
          </button>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {reviews.length > 0 ? (
          reviews.map((r) => (
            <div
              key={r._id}
              className="card shadow-sm border-0 p-3"
              style={{ borderRadius: "12px" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`fs-5 ${i < r.rating ? "text-warning" : "text-muted"
                        }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <small className="fw-semibold text-muted">
                  {r.user_id?.name || "Anonymous"}
                </small>
              </div>

              <div className="position-relative">
                <img
                  src={quotesDown}
                  alt="quotes"
                  className="mb-2"
                  style={{ width: "18px", opacity: 0.5 }}
                />
                <p className="mb-1 text-dark">{r.comment}</p>
                <img
                  src={quotesTop}
                  alt="quotes"
                  className="d-block ms-auto"
                  style={{ width: "18px", opacity: 0.4 }}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-3">No reviews yet.</p>
        )}
      </div>
    </section>
  );
}
