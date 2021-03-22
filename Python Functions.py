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

def getLastUidFromDB():
    sql = "SELECT UID FROM " + USERS +"WHERE UID=(SELECT max(UID) FROM " + USERS + ")"
    #Run the sql
    uid = 0
    #return what the db returns
    return uid

# CC-42 delete user sccount
def deleteUser(UID):
    sql = "DELETE FROM " + USERS + "WHERE UID=" + UID
    #Run the sql
    #Check db to make sure entry is gone
    #return true or false based on if it worked??
    return True
  
# UC9 Get all saved recipes
def getAllRecipes():
    sql = "SELECT * FROM " + RECIPES
    #Run the sql
    data = 0
    #return what the db returns
    return data

# UC10 Get length of time for recipe
def getTimeNeeded(recipeID):
    sql = "SELECT totalTime FROM " + RECIPES + "WHERE recipeID=" + recipeID
    #Run the sql
    time = 0
    #return the time
    return time

# UC7 Get recipes based on inputs
def getRecipeFromRID(recipeID):
    sql = "SELECT * FROM " + RECIPES + "WHERE recipeID=" + recipeID
    #Run the sql
    data = ''
    #return the recipes
    return data

def getRecipeDifficulty(recipeID):
    sql = "SELECT difficulty FROM " + RECIPES + "WHERE recipeID=" + recipeID
    #Run the sql
    data = ''
    #return the recipes
    return data

def getRecipeName(recipeID):
    sql = "SELECT recipeName FROM " + RECIPES + "WHERE recipeID=" + recipeID
    #Run the sql
    data = ''
    #return the recipes
    return data

def getRecipeCallories(recipeID):
    sql = "SELECT calories FROM " + RECIPES + "WHERE recipeID=" + recipeID
    #Run the sql
    data = ''
    #return the recipes
    return data

    
