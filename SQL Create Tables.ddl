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

CREATE TABLE MainIngredient (
  mainID integer PRIMARY KEY NOT NULL,        -- ID for Main Ingredient
  mainName varchar(30) NOT NULL,              -- Name for Ingredient
  mainCategory varchar(30) NOT NULL,          -- Four Categories: Spices & Oils, Pantry, Refrigerator, & Countertop
  mainType varchar(30) NOT NULL               -- Types refer to Food Groups via Dairy, Fruits, Meat, etc.
);

CREATE TABLE AdditionalIngredient (
  additID integer PRIMARY KEY NOT NULL,       -- Same format as above but for Additional Ingredients 
  additName varchar(30) NOT NULL,
  additCategory varchar(30) NOT NULL,
  additType varchar(30) NOT NULL
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

INSERT INTO MainIngredient (mainID, mainName, mainCategory, mainType) VALUES
(1001, 'Salt', 'Spices & Oils', 'Spice'),
(1002, 'Pepper', 'Spices & Oils', 'Spice'),
(1003, 'Olive Oil', 'Spices & Oils', 'Oil'),
(1004, 'Vegetable Oil', 'Spices & Oils', 'Oil'),
(1005, 'Spinach', 'Refrigerator', 'Vegetable'),
(1006, 'Banana', 'Countertop', 'Fruit'),
(1007, 'Eggplant', 'Refrigerator', 'Vegetable'),
(1008, 'Brie', 'Refrigerator', 'Dairy'),
(1009, 'Tomato', 'Refrigerator', 'Vegetable');

INSERT INTO AdditionalIngredient (additID, additName, additCategory, additType) VALUES
(1010, 'Hamburger Buns', 'Pantry', 'Bread'),
(1011, 'Tart Cups', 'Refrigerator', 'Dough'),
(1012, 'Raspberry Preserves', 'Refrigerator', 'Fruit'),
(1013, 'Peppercorns', 'Spices & Oils', 'Spice'),
(1014, 'BBQ Sauce', 'Refrigerator', 'Table Condiment'),
(1015, 'Ketchup', 'Refrigerator', 'Table Condiment'),
(1016, 'Tomato Paste', 'Pantry', 'Packaged Goods'),
(1017, 'Panko Breadcrumbs', 'Pantry', 'Packaged Goods');
