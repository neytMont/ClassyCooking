CREATE TABLE Users(
  UID int PRIMARY KEY,
  fName varchar(50),
  lName varchar(50),
  age int,
  email varchar(50),
  passHash varchar(150),
  recipes varchar(50) -- Hold recipe ids with an array?
);

CREATE TABLE Recipes(
  recipeID int PRIMARY KEY,
  recipeName varchar(50),
  totalTime int,
  difficulty int, -- 1-5 going from east to hard
  directions varchar(200),
  nutritionFacts int,
  ingredients varchar(150) -- replace this with something that can hold objects
);


INSERT INTO Recipes (recipeID, recipeName, totalTime, difficulty, directions, nutritionFacts, ingredients)
VALUES (1, 'Brie Cups', 17, 1, 'step 1: step 2: ', 136, 'ingredients');
INSERT INTO Recipes (recipeID, recipeName, totalTime, difficulty, directions, nutritionFacts, ingredients)
VALUES (2, 'Spinach and Banana Power Smoothie', 17, 1, 'step 1: step 2: ', 136, 'ingredients');
INSERT INTO Recipes (recipeID, recipeName, totalTime, difficulty, directions, nutritionFacts, ingredients)
VALUES (3, 'Eggplant Burgers', 17, 1, 'step 1: step 2: ', 136, 'ingredients');

INSERT INTO Users (UID, fName, lName, age, email, passHash, recipes)
VALUES (0, "test", "tester", 21, "example@e.com", "sgdfgrfgh5et4wefdr", "[]");
INSERT INTO Users (UID, fName, lName, age, email, passHash, recipes)
VALUES (1, "test2", "tester2", 22, "example2@e.com", "sgdfg23432rfgh5et4wefdr", "[]");