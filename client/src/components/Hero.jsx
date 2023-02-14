import React from "react";
import ".././Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <span className="Banner">
        <a href="/">Finlunch</a>
      </span>
      <span className="Login">
        <a href="/Login">Login</a>
      </span>
    </div>
  );
}
