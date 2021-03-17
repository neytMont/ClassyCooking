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

# UC2 Create user account
def createUser(data):
    #data is either a list or tuple
    fname, lname, age, email, passwd = data
    UID = getLastUidFromDB() + 1
    
    #Hash the users password
    passwd = hash(passwd)
    
    sql = "INSERT INTO " + USERS + "VALUES " + UID + "," + fname + "," + lname + "," + age + "," + email + "," + passwd + "," + "[]"
    #Run the sql
    #Check to make sure entry is in db
    #return true or false based on if it worked??
    return True
    
# UC9 Get all saved recipes
def getAllRecipes():
    sql = "SELECT * FROM Recipes"
    #Run the sql
    data = 0
    #return what the db returns
    return data

