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
  recipeID int PRIMARY KEY NOT NULL,
  recipeName varchar(50) NOT NULL,
  -- mainIngredients varchar(30) NOT NULL,                                       -- Removed due to being multivalued attribute (multiple main ingredients)
  -- addIngredients varchar(30) NOT NULL,                                        -- Removed due to being multivalued attribute (multiple additional ingredients)
  totalTime time NOT NULL,                                                       -- Edited since time type takes in hours / min / sec which is more accurate compared to integers
  difficulty int NOT NULL,                                                       -- Edit: 1-3 representing Easy, Intermediate, & Hard; Initial: 1-5 going from east to hard
  -- servings int,                                                               -- Optional; Amount of servings per recipe made
  calories int                                                                   -- Optional; Edited from nutritionFacts since we're not able to provide full details of nutrition facts
  -- directions varchar(200)                                                     -- Removed due to being multivalued attribute (directions / steps)
);

CREATE TABLE Directions(
  recipeID int NOT NULL,                                                         -- Table format for Multivalued Attribute for Recipe
  directionID int NOT NULL,                                                      -- To distinguish different steps from each other in database
  direction varchar(200) NOT NULL,
  CONSTRAINT PK_Directions PRIMARY KEY (recipeID, directionID),
  CONSTRAINT FK_Directions FOREIGN KEY (recipeID) REFERENCES Recipes(recipeID)
);

CREATE TABLE MainIngredient (
  recipeID int NOT NULL,                                                         -- Table format for Multivalued Attribute for Recipe
  mainName varchar(30) NOT NULL,                                                 -- Name for Ingredient
  mainCategory varchar(30) NOT NULL,                                             -- Four Categories: Spices & Oils, Pantry, Refrigerator, & Countertop
  mainType varchar(30) NOT NULL,                                                 -- Types refer to Food Groups via Dairy, Fruits, Meat, etc.
  CONSTRAINT PK_MainIngredient PRIMARY KEY (recipeID, mainName),
  CONSTRAINT FK_MainIngredient FOREIGN KEY (recipeID) REFERENCES Recipes(recipeID)
);

CREATE TABLE AdditionalIngredient (
  recipeID int NOT NULL,                                                         -- Same format as above but for Additional Ingredients
  additName varchar(30) NOT NULL,
  additCategory varchar(30) NOT NULL,
  additType varchar(30) NOT NULL,
  CONSTRAINT PK_AdditionalIngredient PRIMARY KEY (recipeID, additName),
  CONSTRAINT FK_AdditionalIngredient FOREIGN KEY (recipeID) REFERENCES Recipes(recipeID)
);

INSERT INTO Users (UID, fName, lName, age, email, passHash, recipes) VALUES
(0, "test", "tester", 21, "example@e.com", "sgdfgrfgh5et4wefdr", "[]"),
(1, "test2", "tester2", 22, "example2@e.com", "sgdfg23432rfgh5et4wefdr", "[]");

-- Original Recipes Insert Below:
-- INSERT INTO Recipes (recipeID, recipeName, totalTime, difficulty, directions, nutritionFacts, ingredients) VALUES
-- (1, 'Brie Cups', 17, 1, 'step 1: step 2: ', 136, 'ingredients'),
-- (2, 'Spinach and Banana Power Smoothie', 17, 1, 'step 1: step 2: ', 136, 'ingredients'),
-- (3, 'Eggplant Burgers', 17, 1, 'step 1: step 2: ', 136, 'ingredients');

-- Edited version of Recipes Insert Below:
INSERT INTO Recipes (recipeID, recipeName, totalTime, difficulty, calories) VALUES
(1, 'Brie Cups', '17:00', 1, 136),
(2, 'Spinach and Banana Power Smoothie', '17:00', 1, 136),
(3, 'Eggplant Burgers', '17:00', 1, 136),
(4, 'Baked BBQ Chicken Wings', '17:00', 1, 173), --incomplete
(5, 'Mango Royale','30:00', 1, 350),
(6, 'Egg Toast', '15:00', 1, 110);

INSERT INTO Directions (recipeID, directionID, direction) VALUES
(1, 1001, 'step 1: step 2: '),
(2, 1002, 'step 1: step 2: '),
(3, 1003, 'step 1: step 2: '),
(4, 1004, 'step 1: step 2: '),
(5, 1005, 'step 1: step 2: '),
(6, 1006, 'step 1: step 2: ');

INSERT INTO MainIngredient (recipeID, mainName, mainCategory, mainType) VALUES
(2, 'Spinach', 'Refrigerator', 'Vegetable'),
(2, 'Banana', 'Countertop', 'Fruit'),
(3, 'Eggplant', 'Refrigerator', 'Vegetable'),
(1, 'Brie', 'Refrigerator', 'Dairy'),
(5, 'Mango', 'Countertop', 'Fruit'),
(6, 'Sandwich Bread', 'Pantry', 'Bread'),
(6, 'Egg', 'Refrigerator', 'Dairy'),
(5, 'Graham Crackers', 'Pantry', 'Snacks'),
(3, 'Tomato', 'Refrigerator', 'Vegetable');

INSERT INTO AdditionalIngredient (recipeID, additName, additCategory, additType) VALUES
(3, 'Hamburger Buns', 'Pantry', 'Bread'),
(1, 'Tart Cups', 'Refrigerator', 'Dough'),
(1, 'Raspberry Preserves', 'Refrigerator', 'Fruit'),
(3, 'Peppercorns', 'Spices & Oils', 'Spice'),
(3, 'BBQ Sauce', 'Refrigerator', 'Table Condiment'),
(5, 'Heavy Cream', 'Refrigerator', 'Dairy'),
(5, 'Sweetened Condensed Milk', 'Pantry', 'Packaged Goods'),
(6, 'Mayonnaise', 'Refrigerator', 'Table Condiment'),
(3, 'Salt', 'Spices & Oils', 'Spice'),
(3, 'Pepper', 'Spices & Oils', 'Spice'),
(3, 'Olive Oil', 'Spices & Oils', 'Oil'),
(3, 'Vegetable Oil', 'Spices & Oils', 'Oil'),
(3, 'Ketchup', 'Refrigerator', 'Table Condiment');
