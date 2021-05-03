import React from 'react';
import './css/for ingredients.css';

function mainIngredientsSearch() {
  return (
    <main>
     <div>
        <meta charSet="utf-8" />
        <title>Main Ingredients Search</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/for ingredients.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
        <header-top>
          <div className="nLogo">
            <h4 onclick="darkMode()">Classy Cooking</h4>
          </div>
        </header-top>
        <header>
          <a className="special" href="#">Recipe Search</a>
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
          <div id="searchDisplay">
            <h2>Recipe Search</h2><br /><br />
            <h3>Additional Search Constraints</h3><br /><br />
            <div className="boxArea">
              <ul>Time</ul>
              <select name="timeOpt">
                <option value="none">None</option>
                <option value={1}>Short (0-20 Minutes)</option>
                <option value={2}>Medium (20-45 Minutes)</option>
                <option value={3}>Long (45+ Minutes)</option>
              </select>
              <ul>Budget</ul>
              <select name="budgetOpt">
                <option value="none">None</option>
                <option value={1}>Budget ($)</option>
                <option value={2}>Affordable ($$)</option>
                <option value={3}>Expensive ($$$)</option>
              </select>
              <ul>Difficulty</ul>
              <select name="diffOpt">
                <option value="none">None</option>
                <option value={1}>Easy</option>
                <option value={2}>Medium</option>
                <option value={3}>Hard</option>
              </select>
            </div><br />
            <div id="mainSearch">
              <h3>First, choose your Main Ingredients</h3>
              <div className="ingredient">
                <img src="images/spinach.jpg" />
                <h1>Spinach</h1>
              </div>
              <div className="ingredient">
                <img src="images/banana.jpg" />
                <h1>Banana</h1>
              </div>
              <div className="ingredient">
                <img src="images/eggplant.jpg" />
                <h1>Eggplant</h1>
              </div>
              <div className="ingredient">
                <img src="images/brie.jpg" />
                <h1>Brie</h1>
              </div>
              <div className="ingredient">
                <img src="images/mango.jpeg" />
                <h1>Mango</h1>
              </div>
              <div onclick="clickedOn()" className="ingredient">
                <img id="icon" src="images/sandwhich bread.jpg" />
                <h1>Sandwich Bread</h1>
              </div>
              <div onclick="clickedOn()" className="ingredient">
                <img id="icon" src="images/egg.jpg" />
                <h1>Egg</h1>
              </div>
              <div className="ingredient">
                <img src="images/graham crackers.jpg" />
                <h1>Graham Crackers</h1>
              </div>
              <div className="ingredient">
                <img src="images/tomato.jpg" />
                <h1>Tomato</h1>
              </div>
              <div className="ingredient">
                <img src="images/chicken wings.jpg" />
                <h1>Chicken Wings</h1>
              </div>
              <div className="ingredient">
                <img src="images/white rice.jpeg" />
                <h1>White Rice</h1>
              </div>
              <div className="ingredient">
                <img src="images/brown rice.jpg" />
                <h1>Brown Rice</h1>
              </div>
              <div className="ingredient">
                <img src="images/ground beef.jpg" />
                <h1>Ground Beef</h1>
              </div>
              <div className="ingredient">
                <img src="images/oats.jpg" />
                <h1>Oats</h1>
              </div>
              <div className="ingredient">
                <img src="images/yogurt.jpg" />
                <h1>Yogurt</h1>
              </div>
            </div>
          </div>
          <div id="nextOption">
            <buttons>
              <a style={{textDecoration: 'none'}} className="choices" href="recipe results skip.html">Skip to Recipes</a>
              <a style={{textDecoration: 'none'}} className="choices" href="additional ingredients search.html">Add Additional Ingredients</a>
            </buttons>
          </div>
        </content>
      </div>
    </main>
  );
}

export default mainIngredientsSearch;
