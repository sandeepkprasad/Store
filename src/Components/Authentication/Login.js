import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import storeContext from "../../Context/storeContext";

const Login = () => {
  const [cred, setCred] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const { showAlert } = useContext(storeContext);

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = "https://storebackend-l0fx.onrender.com/user/login";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: cred.email, password: cred.password }),
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.jwtData);
      navigate("/");
      showAlert("success", "Logged in successfully");
    } else {
      showAlert("danger", "Invalid credentials");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="text-center py-3">
          <h3 className="fs-3 fw-bold">Login Your Account</h3>
        </div>
        <div
          className="col-md-8 border border-danger-subtle p-5 rounded"
          style={{ width: "24rem" }}
        >
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label htmlFor="email" class="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={cred.email}
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                onChange={handleChange}
                minLength={3}
                required
              />
            </div>
            <div class="mb-3">
              <label htmlFor="password" class="form-label fw-bold">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                value={cred.password}
                placeholder="Enter your password"
                onChange={handleChange}
                minLength={6}
                required
              />
            </div>
            <button type="submit" class="btn btn-danger">
              Login
            </button>
          </form>
        </div>
        <div className="py-4 text-center">
          <p className="text-muted">
            Don't have an account?{" "}
            <Link className="text-decoration-none" to="/signup">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
