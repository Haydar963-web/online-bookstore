import { useState } from "react";
import "./forms.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");
    console.log({ email, password });
  };

  // Show Password Handler
  const showPasswordHandler = (e) => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <h2 className="form-title">Login to your account</h2>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        {showPassword ? (
          <i
            onClick={showPasswordHandler}
            className="bi bi-eye-slash-fill show-password-icon"
          ></i>
        ) : (
          <i
            onClick={showPasswordHandler}
            className="bi bi-eye-fill show-password-icon"
          ></i>
        )}
        <button className="form-btn">Login</button>
      </form>
      <div className="form-footer">
        Don't have an account{" "}
        <Link to="/register" className="form-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
