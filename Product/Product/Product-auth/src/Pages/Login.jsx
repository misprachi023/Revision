import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    const user = { email, password };
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }); 
      if (!res.ok) {
        if (res.status === 401) {
            throw new Error("Invalid email or password. Please try again.");
          } else {
            throw new Error("An error occurred while logging in. Please try again later.");
          }
      }
      const data = await res.json();
      if (data.token) {
        setAuth(true);
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blue", fontSize: "30px" }}>Welcome to Login Page</h1>
      <form style={{ textAlign: "center", margin: "10px" }} onSubmit={handleLogin}>
        <input
          style={{ padding: "8px", margin: "10px", width: 200 }}
          type="email"
          className="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <input
          style={{ padding: "8px", margin: "10px", width: 200 }}
          type="password"
          className="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <input style={{ padding: "5px", margin: "5px", width: 100 , color:"black", backgroundColor:"cyan", fontSize:"15px"}} type="submit" />
      </form>
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
}
