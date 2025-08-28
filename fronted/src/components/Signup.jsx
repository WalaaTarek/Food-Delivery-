import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../constant/colors";
import chefImage from "../assets/chefImage.png";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Signup failed. Please try again.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      alert("🎉 Account created successfully!");
      //navigate("/login");
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="container-fluid vh-100"
      style={{ overflow: "hidden", backgroundColor: colors.lightColor }}
    >
      <div className="row h-100">
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={chefImage}
            alt="signup"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          <div className="w-75">
            <h2 className="mb-4 fw-bold">Welcome to Food Delivery</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  minLength="3"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your Email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="6"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "38px",
                    background: "none",
                    border: "none",
                    color: colors.primaryColor,
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength="6"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "38px",
                    background: "none",
                    border: "none",
                    color: colors.primaryColor,
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
                style={{ backgroundColor: colors.primaryColor, border: "none" }}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>

              {error && <p className="text-danger mt-2">{error}</p>}
            </form>

            <p className="mt-3 text-center">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-decoration-none fw-semibold"
                style={{ cursor: "pointer", color: colors.primaryColor }}
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
