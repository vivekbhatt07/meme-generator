import React from "react";
import Meme from "../Assets/Meme.svg";

export default function Main() {
  return (
    <main className="meme-generator-box">
      <div className="input-box">
        <input placeholder="TOP" className="left-input"></input>
        <input placeholder="BOTTOM" className="right-input"></input>
      </div>
      <button className="btn-new-img">Get a new meme image 🎞</button>
      <div className="text">
        <div className="top-text text-style">shut up</div>
        <div className="bottom-text text-style">and take my money</div>
      </div>
    </main>
  );
}
