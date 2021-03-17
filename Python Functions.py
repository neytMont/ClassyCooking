#Open DB connection somehow
db = None

#Check connection somehow


#Hash password TODO
def hash(passwd):
    #Hash the password
    return passwd


USERS = "Users (UID, fName, lName, age, email, passHash, recipes)"
RECIPES = "Recipes (recipeID, recipeName, totalTime, difficulty, calories)"
DIRECTIONS = "Directions (recipeID, directionID, direction)"
MAININGREDIENT = "MainIngredient (recipeID, mainName, mainCategory, mainType)"
ADDITIONALINGREDIENT = "AdditionalIngredient (recipeID, additName, additCategory, additType)"
