import React from 'react';
import './css/for dark mode.css';

function darkMode() {
  return (
    <main>
      <div>
        <meta charSet="utf-8" />
        <title>Dark Mode in Settings</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/for dark mode.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
        <header-top>
          <div className="nLogo">
            <h4>Classy Cooking</h4>
          </div>
        </header-top>
        <header>
          <a className="special" href="main ingredients search.html">Recipe Search</a>
          <nav>
            <div className="nLinks">
              <li><a href="search all recipes.html">All Recipes</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Ratings</a></li>
              <li><a href="#">Logout</a></li>
            </div>
          </nav>
        </header>
        <content>
          <div>
            <h1>Settings Menu</h1><br />
            <buttons>
              <ul><a className="current">View User Profile</a></ul>
            </buttons>
            <buttons>
              <ul><a className="options">Edit User Information</a></ul>
            </buttons>
            <buttons>
              <ul><a className="options">Create Original Recipe</a></ul>
            </buttons>
            <buttons>
              <ul><a className="options">View Original Recipes</a></ul>
            </buttons>
            <buttons>
              <ul><a className="accented" onclick="darkMode()">Dark Mode</a></ul>
            </buttons>
          </div>
          <div>
            <h2>User Information</h2><br />
            <registerarea className="boxArea">
              <ul>First Name: Todd</ul>
              <ul>Last Name: Snap</ul>
              <ul>Username: OGPokeSnapper</ul>
              <ul>Email: toddsnap@gmail.com</ul>
            </registerarea><br /><br /><br />
            <h2>Contact Information</h2><br />
            <registerarea className="boxArea">
              <ul>Address: 123 Wind Way</ul>
              <ul>City: Mondstat</ul>
              <ul>Country: Teyvat</ul>
              <ul>Postcal Code: 10293</ul>
            </registerarea><br /><br /><br />
            <buttons>
              <button onclick="deleteCheck()" className="accented">Delete Account</button>
            </buttons>
            <p id="test" />
          </div>
        </content>
      </div>
    </main>
  );
}

export default darkMode;
