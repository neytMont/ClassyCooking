import React from 'react';
import './css/for technique.css';

function interTech() {
  return (
    <main>
      <div>
        <meta charSet="utf-8" />
        <title>Interactive Technique Step</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/for technique.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
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
          <h1>Interactive Technique Step</h1><br />
          <h2>Rising Dough</h2>
          <div>
            <gifcontent>
              <center><img src="images/ToastEg.gif" /></center>
            </gifcontent>
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

export default interTech;
