import React from "react";
import Meme from "../Assets/Meme.svg";

export default function Main() {
  return (
    <main className="meme-generator-box">
      <div className="input-box">
        <input className="left-input"></input>
        <input className="right-input"></input>
      </div>
      <button className="btn-new-img">Get a new meme image 🎞</button>
      <img className="meme-img" src={Meme} alt="change" />
    </main>
  );
}
