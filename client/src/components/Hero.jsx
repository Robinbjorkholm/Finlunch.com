import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <span className="Banner">Finlunch</span>
      <span className="Login">
        <a href="/Login">Login</a>
      </span>

      <span className="Signup">
        <a href="https://www.google.com/">SignUp</a>
      </span>
    </div>
  );
}
