import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../constant/colors";
import chefImage from "../assets/chefImage.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(
          data.message || "Login failed. Please check your credentials."
        );
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      alert("🎉 Logged in successfully!");
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
      className="container-fluid vh-100 d-flex flex-column"
      style={{ backgroundColor: colors.lightColor }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "25%" }}
      >
        <img
          src={chefImage}
          alt="logo"
          style={{
            maxHeight: "100%",
            maxWidth: "40%",
            objectFit: "contain",
          }}
        />
      </div>

      <div className="flex-grow-1 d-flex align-items-center justify-content-center bg-light">
        <div
          className="p-4 rounded shadow-sm"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "75%",
            backgroundColor: "#fff",
          }}
        >
          <h2 className="mb-4 fw-bold text-center">Login to Food Delivery</h2>

          <form onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="btn btn-success w-100"
              style={{
                backgroundColor: colors.primaryColor,
                border: "none",
              }}
            >
              {isLoading ? "Logging In..." : "Login"}
            </button>

            {error && <p className="text-danger mt-2">{error}</p>}
          </form>

          <p className="mt-3 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-decoration-none fw-semibold"
              style={{ cursor: "pointer", color: colors.primaryColor }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
