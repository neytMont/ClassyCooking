import React from 'react';
import './css/for create user.css';

function createUser() {
  return (
    <main>
      <div>
        <meta charSet="utf-8" />
        <title>Create User / Register</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/for create user.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
        <header-top>
          <div className="nLogo">
            <h4>Classy Cooking</h4>
          </div>
        </header-top>
        <header />
        <img align="right" src="images/Food Eg 5.jpg" />
        <content>
          <h2>Let's begin your classy culinary experience...</h2><br /><br />
          <div>
            <registerarea className="boxArea">
              <ul>First Name </ul>
              <input type="text" className="box" placeholder="First Name" />
              <ul>Last Name </ul>
              <input type="text" className="box" placeholder="Last Name" />
            </registerarea><br /><br />
            <registerarea className="boxArea">
              <ul>Age</ul>
              <input type="text" className="box" placeholder="Age" />
              <ul>Email Address</ul>
              <input type="text" className="box" placeholder="Email" />
            </registerarea><br /><br />
            <registerarea className="boxArea">
              <ul>Password</ul>
              <input type="text" className="box" placeholder="Password" />
              <ul>Confirm Password</ul>
              <input type="text" className="box" placeholder="Confirm Password" />
            </registerarea><br /><br />
          </div>
          <div>
            <buttons>
              <a style={{textDecoration: 'none'}} className="progress" href="dark mode.html">Register</a>
            </buttons>
          </div>
        </content>
      </div>
    </main>
  );
}

export default createUser;
