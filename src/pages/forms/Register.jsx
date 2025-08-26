import { useState } from "react";
import "./forms.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (username.trim() === "") return toast.error("UserName is required");
    if (password.trim() === "") return toast.error("Password is required");
    console.log({ email, password, username });
  };

  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <h2 className="form-title">Create new account</h2>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="User Name"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <button className="form-btn">Register</button>
      </form>
      <div className="form-footer">
        Already have an account{" "}
        <Link to="/login" className="form-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
