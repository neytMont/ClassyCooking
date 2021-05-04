/* eslint-disable no-restricted-globals */
import React, {useEffect, useState} from 'react';
import './css/for search all.css';

const SearchAll = () => {
  const APP_ID = "13067d15";
  const APP_KEY = "b5fbc15843617debeff3fb814254d2c4";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=goat&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  return (
    <main>
      <div>
        <meta charSet="utf-8" />
        <title>Search All Recipes</title>
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
          <a className="special" href="main ingredients search.jsx">Recipe Search</a>
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
            <h1>All Classy Recipes</h1>
          </div>
          
          <boxarea>
            <div id="allSearch">
              
              <div className="recipe">
                <img src="images/brie cups.jpg" alt="" />
                <h1>Brie Cups</h1>
              </div>
              
              <div className="recipe">
                <img src="images/spinach banana power smoothie.jpg" alt=""  />
                <h1>Spinach and Banana Power Smoothie</h1>
              </div>
              
              <div className="recipe">
                <img src="images/eggplant burger.jpg" alt=""  />
                <h1>Eggplant Burgers</h1>
              </div>
              
              <div className="recipe">
                <img src="images/baked bbq chicken wings.jpg"  alt="" />
                <h1>Baked BBQ Chicken Wings</h1>
              </div>
              
              <div className="recipe">
                <img src="images/mango royale.jpg"  alt="" />
                <h1>Mango Royale</h1>
              </div>
              
              <div className="recipe">
                <img id="icon" onclick="clickedOn()" src="images/egg toast.jpg" alt=""  />
                <h1>Egg Toast</h1>
              </div>

              <ul>
                {recipes.map(recipe =>(
                  <div className="recipe">
                    <img src={recipe.recipe.image} alt=""/>
                    <h1>{recipe.recipe.label}</h1> 
                  </div>
                ))}
              </ul>
        
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

export default SearchAll;
