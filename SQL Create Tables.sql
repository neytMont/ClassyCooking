CREATE TABLE Users(
  UID int PRIMARY KEY,
  fName varchar(50),
  lName varchar(50),
  age int,
  email varchar(50),
  passHash varchar(150)
);

CREATE TABLE Recpies(
  recpieID int PRIMARY KEY,
  recipeName varchar(50),
  totalTime int,
  difficulty int,
  directions varchar(200),
  nutritionFacts int,
  ingredients varchar(150) -- replace this with something that can hold objects
);

INSERT INTO Recipes(recipeID, recipeName, totalTime, difficulty, directions, nutritionFacts, ingredients)
VALUES (1, 'Brie Cups', 17, 'easy', 'step 1: step 2: ', 136, 'ingredients')
VALUES (2, 'Spinach and Banana Power Smoothie', 17, 'easy', 'step 1: step 2: ', 136, 'ingredients')
VALUES (3, 'Eggplant Burgers', 17, 'easy', 'step 1: step 2: ', 136, 'ingredients')
