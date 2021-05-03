import React from 'react';
import './css/for search all.css';

function resultsAdd() {
  return (
    <main>
     <div>
        <meta charSet="utf-8" />
        <title>Recipe Results with Additional Ingredients</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/for search all.css" />
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
          <div>
            <h1>Recipe Results</h1>
          </div>
          <boxarea>
            <div id="allSearch">
              <div className="recipe">
                <img src="images/brie cups.jpg" />
                <h1>Brie Cups</h1>
              </div>
              <div className="recipe">
                <img src="images/spinach banana power smoothie.jpg" />
                <h1>Spinach and Banana Power Smoothie</h1>
              </div>
              <div className="recipe">
                <img src="images/eggplant burger.jpg" />
                <h1>Eggplant Burgers</h1>
              </div>
              <div className="recipe">
                <img src="images/baked bbq chicken wings.jpg" />
                <h1>Baked BBQ Chicken Wings</h1>
              </div>
              <div className="recipe">
                <img src="images/mango royale.jpg" />
                <h1>Mango Royale</h1>
              </div>
              <div className="recipe">
                <img id="icon" onclick="clickedOn()" src="images/egg toast.jpg" />
                <h1>Egg Toast</h1>
              </div>
            </div>
          </boxarea>
          <div id="nextOption">
            <buttons>
              <button className="choices" href="recipeResultsAdd.html">Start Cooking</button>
            </buttons>
          </div>
        </content>
      </div>
    </main>
  );
}

export default resultsAdd;
