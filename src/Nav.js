import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const Navstyle = {
    color: "green",
  };

  return (
    <div>
      <nav>
        <li className="m-3">
          <ul>Logo</ul>

          <li>
            <Link to="/" style={Navstyle}>
              <ul>Home</ul>
            </Link>
            <Link to="/About" style={Navstyle}>
              <ul>about</ul>
            </Link>
            <Link to="/Shop" style={Navstyle}>
              <ul>shop</ul>
            </Link>
          </li>
        </li>
      </nav>
    </div>
  );
}
