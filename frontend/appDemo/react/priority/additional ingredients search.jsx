import React from 'react';
import './css/for ingredients.css';

function additionalIngredientsSearch() {
  return (
    <main>
      <div>
        <meta charSet="utf-8" />
        <title>Additional Ingredients Search</title>
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
          <div id="addiDisplay">
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
              <h3>Now, choose your Additional Ingredients</h3>
              <div className="ingredient">
                <img src="images/hamburger buns.jpg" />
                <h1>Hamburger Buns</h1>
              </div>
              <div className="ingredient">
                <img src="images/tart cups.jpg" />
                <h1>Tart Cups</h1>
              </div>
              <div className="ingredient">
                <img src="images/raspberry preserves.jpg" />
                <h1>Raspberry Preserves</h1>
              </div>
              <div className="ingredient">
                <img src="images/peppercorns.jpg" />
                <h1>Peppercorns</h1>
              </div>
              <div className="ingredient">
                <img src="images/bbq sauce.jpg" />
                <h1>BBQ Sauce</h1>
              </div>
              <div className="ingredient">
                <img id="icon" onclick="clickedOn()" src="images/heavy cream.jpg" />
                <h1>Heavy Cream</h1>
              </div>
              <div className="ingredient">
                <img src="images/mayonnaise.jpeg" />
                <h1>Mayonnaise</h1>
              </div>
              <div className="ingredient">
                <img src="images/ketchup.jpg" />
                <h1>Ketchup</h1>
              </div>
              <div className="ingredient">
                <img src="images/sweetened condensed milk.jpg" />
                <h1>Sweetened Condensed Milk</h1>
              </div>
              <div className="ingredient">
                <img src="images/maple syrup.jpg" />
                <h1>Maple Syrup</h1>
              </div>
            </div>
          </div>
          <div id="nextOption">
            <buttons>
              <a style={{textDecoration: 'none'}} className="choices" href="recipe results additional.html">Search for Recipes</a>
            </buttons>
          </div>
        </content>
      </div>

    </main>
  );
}

export default additionalIngredientsSearch;
