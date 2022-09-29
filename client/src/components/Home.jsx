import React, { Component } from "react";
import Navbar from "./Navbar";
import Tabs from "./Tabs";
import Filter from "./Filter";
import Picture from "../HomeImage.jpeg";

function Home() {
  return (
    <div>
      <header id="home">
        <img className="image" src={Picture} />
        <div>
          <h1 className="homepageHeader">Exercise Haven</h1>
        </div>
      </header>
      <div class="w3-col m6 w3-padding-large">
        <h1 class="w3-center">About Exercise Haven</h1>
        <br />
        <h5 class="w3-center">A personal project to aid a healthy lifestyle</h5>
        <p class="w3-large">
         Exercise Haven contains a database of exercises that you can use to enhance your work out routines and improve yourself in every way possible.
        </p>
      </div>
    </div>
  );
}

export default Home;
