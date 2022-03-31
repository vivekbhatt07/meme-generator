import React from "react";
import TrollFace from "../Assets/Troll-Face.png";
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="left-nav">
        <img className="troll-img" src={TrollFace} />
        <span className="nav-name">Meme Generator</span>
      </div>
      <div className="right-nav">
        <span className="right-nav-content">React Course - Project 3</span>
      </div>
    </nav>
  );
}
