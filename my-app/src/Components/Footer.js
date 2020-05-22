import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="PlayBtn">
      <button>Play Again</button> <br />
      <Link to="/about"> How to play?</Link>
    </div>
  );
}

export default Footer;
