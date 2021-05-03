import React from 'react';
import './css/for timer.css';

function interTimer() {
  return (
    <main>
     <div>
        <meta charSet="utf-8" />
        <title>Interactive Timer Step</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/for timer.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        <header-top>
          <div className="nLogo">
            <h4 onclick="darkMode()">Classy Cooking</h4>
          </div>
        </header-top>
        <header>
          <a className="special" href="main ingredients search.html">Recipe Search</a>
          <nav>
            <div className="nLinks">
              <li><a href="search all recipes.html">All Recipes</a></li>
              <li><a href="dark mode.html">Settings</a></li>
              <li><a href="#">Ratings</a></li>
              <li><a href="#">Logout</a></li>
            </div>
          </nav>
        </header>
        <content>
          <h1>Interactive Timer Step</h1>
          <div>
            <timercount>
              <center><a>00:25:30</a></center>
            </timercount>
          </div>
          <div>
            <buttons>
              <button className="progress">Previous Step</button>
              <button className="progress">Next Step</button>
            </buttons>
          </div>
        </content>
      </div>
    </main>
  );
}

export default interTimer;
