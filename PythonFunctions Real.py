import mysql.connector
from mysql.connector.constants import ClientFlag
from mysql.connector import errorcode


add_recipe = ("INSERT INTO Recipes "
              "(recipeID, recipeName, totalTime, difficulty, calories) "
              "VALUES (%s, %s ,%s, %s, %s)")
add_directions = ("INSERT INTO Directions "
                  "(recipeID, directionID, direction) "
                  "VALUES (%s, %s, %s)")
add_MainIngredient = ("INSERT INTO MainIngredient "
                      "(recipeID, mainName, mainCategory, mainType) "
                      "VALUES (%s, %s ,%s, %s)")
add_AdditIngredient = ("INSERT INTO AdditionalIngredient "
                       "(recipeID, additName, additCategory, additType) "
                       "VALUES (%s, %s ,%s, %s)")

config = {
    'user': 'root',
    'password': '******',
    'host': '11.11.11.11',
    'client_flags': [ClientFlag.SSL],
    'ssl_ca': 'ssl/server-ca.pem',
    'ssl_cert': 'ssl/client-cert.pem',
    'ssl_key': 'ssl/client-key.pem',
    'database': 'ccDB'
}

# Open DB connection
conn = mysql.connector.connect(**config)
cursor = conn.cursor()


# UC2 Create user account
def createUser(data):
    # data is either a list or tuple
    fname, lname, age, email, passwd, recipes = data
    UID = getLastUidFromDB() + 1

    add_user = ("INSERT INTO Users "
                "(UID, fName, lName, age, email, passHash, recipes) "
                "VALUES (%s, %s ,%s, %s, %s, %s, %s)")
    data_user = (UID, fname, lname, age, email, passwd, recipes)
    # Run the sql
    cursor.execute(add_user, data_user)
    conn.commit()
    return True

def getLastUidFromDB():
    query = ("SELECT UID FROM Users "
             "WHERE UID=(SELECT max(UID) FROM Users)")
    # Run the sql
    cursor.execute(query)
    # return what the db returns
    return cursor.fetchall()[0][0]

def createRecipe(data):
    recipeName, totalTime, difficulty, calories = data
    recipe_Id = getLastRecipeID() + 1
    add_recipe = ("INSERT INTO Recipes "
                  "(recipeID, recipeName, totalTime, difficulty, calories) "
                  "VALUES (%s, %s ,%s, %s, %s)")
    data_recipe = (recipe_Id, recipeName, totalTime, difficulty, calories)
    cursor.execute(add_recipe, data_recipe)
    conn.commit()
    return True

def getLastRecipeID():
    query = ("SELECT recipeID FROM Recipes"
             "WHERE recipeID = (SELECT max(recipeID) FROM Recipes)")
    cursor.execute(query)
    return cursor.fetchall()[0][0]


# CC-42 delete user account
def deleteUser(UID):
    query = ("DELETE FROM Users WHERE UID = {}".format(UID))
    # Run the sql
    cursor.execute(query)
    conn.commit()
    print(cursor.rowcount, "record(s) deleted")
    return True


# UC9 Get all saved recipes
def getAllRecipes():
    query = ("SELECT * FROM Recipes")
    # Run the sql
    cursor.execute(query)
    result = []
    for a in cursor:
        result.append(a)
    return result


# UC10 Get length of time for recipe
def getTimeNeeded(recipeID):
    query = ("SELECT totalTime FROM Recipes "
             "WHERE recipeID = {}".format(recipeID))
    # Run the sql
    cursor.execute(query)
    return cursor.fetchall()[0][0]


# UC7 Get recipes based on inputs
def getRecipeFromRID(recipeID):
    query = ("SELECT * FROM Recipes "
             "WHERE recipeID = {}".format(recipeID))
    # Run the sql
    cursor.execute(query)
    return cursor.fetchall()[0]

def getRecipeDifficulty(recipeID):
    query = ("SELECT difficulty FROM Recipes "
             "WHERE recipeID = {}".format(recipeID))
    # Run the sql
    cursor.execute(query)
    return cursor.fetchall()[0][0]

def getRecipeName(recipeID):
    query = ("SELECT recipeName FROM Recipes "
             "WHERE recipeID = {}".format(recipeID))
    # Run the sql
    cursor.execute(query)
    return cursor.fetchall()[0][0]

def getRecipeCallories(recipeID):
    query = ("SELECT calories FROM Recipes "
             "WHERE recipeID = {}".format(recipeID))
    # Run the sql
    cursor.execute(query)
    return cursor.fetchall()[0][0]


cursor.close()
conn.close()
