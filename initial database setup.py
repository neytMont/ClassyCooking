import mysql.connector
from mysql.connector.constants import ClientFlag
from mysql.connector import errorcode

config = {
    'user': 'root',
    'password': '******',
    'host': '35.197.70.77',
    'client_flags': [ClientFlag.SSL],
    'ssl_ca': 'ssl/server-ca.pem',
    'ssl_cert': 'ssl/client-cert.pem',
    'ssl_key': 'ssl/client-key.pem'
}

try:
    conn = mysql.connector.connect(**config)
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Invalid password or ssh credentials")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("DB does not exist")
    else:
        print(err)
else:
    conn.close()

#CREATE THE DATABASE (only have to do this once)
def createDB():
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()  # initialize connection cursor
    cursor.execute('CREATE DATABASE ccDB')  # create a new  database
    cursor.close()
    conn.close()  # close connection because we will be reconnecting to testdb
#createDB()

config['database'] = 'ccDB'  # add new database to config dict


conn = mysql.connector.connect(**config)
cursor = conn.cursor()


#CREATE THE TABLES
DB_NAME = 'ccDB'
TABLES = {}
TABLES['Users'] = (
    "CREATE TABLE `Users` ("
    "`UID` INT PRIMARY KEY,"
    "`fName` VARCHAR(50),"
    "`lName` VARCHAR(50),"
    "`age` INT,"
    "`email` VARCHAR(50),"
    "`passHash` VARCHAR(150),"
    "`recipes` VARCHAR(50) )")

TABLES['Recipes'] = (
    "CREATE TABLE `Recipes` ("
    "`recipeID` INT PRIMARY KEY NOT NULL,"
    "`recipeName` VARCHAR(50) NOT NULL,"
    "`totalTime` TIME NOT NULL,"
    "`difficulty` INT NOT NULL,"
    "`calories` INT )")

TABLES['Directions'] = (
    "CREATE TABLE `Directions` ("
    "`recipeID` INT NOT NULL,"
    "`directionID` INT NOT NULL,"
    "`direction` VARCHAR(200) NOT NULL,"
    "CONSTRAINT `PK_Directions` PRIMARY KEY (`recipeID`, `directionID`),"
    "CONSTRAINT `FK_Directions` FOREIGN KEY (`recipeID`) REFERENCES `Recipes`(`recipeID`) )")

TABLES['MainIngredient'] = (
    "CREATE TABLE `MainIngredient` ("
    "`recipeID` INT NOT NULL,"
    "`mainName` VARCHAR(30) NOT NULL,"
    "`mainCategory` VARCHAR(30) NOT NULL,"
    "`mainType` VARCHAR(30) NOT NULL,"
    "CONSTRAINT `PK_MainIngredient` PRIMARY KEY (`recipeID`, `mainName`),"
    "CONSTRAINT `FK_MainIngredient` FOREIGN KEY (`recipeID`) REFERENCES `Recipes`(`recipeID`) )")

TABLES['AdditionalIngredient'] = (
    "CREATE TABLE `AdditionalIngredient` ("
    "`recipeID` INT NOT NULL,"
    "`additName` VARCHAR(30) NOT NULL,"
    "`additCategory` VARCHAR(30) NOT NULL,"
    "`additType` VARCHAR(30) NOT NULL,"
    "CONSTRAINT `PK_AdditionalIngredient` PRIMARY KEY (`recipeID`, `additName`),"
    "CONSTRAINT `FK_AdditionalIngredient` FOREIGN KEY (`recipeID`) REFERENCES `Recipes`(`recipeID`) )")

try:
    cursor.execute("USE {}".format(DB_NAME))
except mysql.connector.Error as err:
    print("Database {} does not exists.".format(DB_NAME))
    if err.errno == errorcode.ER_BAD_DB_ERROR:
        createDB()
        print("Big Error")
        print("Database {} created successfully.".format(DB_NAME))
        conn.database = DB_NAME
    else:
        print(err)
        exit(1)

for table in TABLES:
    desc = TABLES[table]
    try:
        print("Creating table {}: ".format(table), end='')
        cursor.execute(desc)
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
            print("exists already")
        else:
            print(err.msg)
    else:
        print("OK")


#ADD STARTING DATA
add_users = ("INSERT INTO Users "
            "(UID, fName, lName, age, email, passHash, recipes) "
            "VALUES (%s, %s ,%s, %s, %s, %s, %s)")
add_recipes = ("INSERT INTO Recipes "
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

try:
    data = (0, "test", "tester", 21, "example@e.com", "sgdfgrfgh5et4wefdr", "[]")
    cursor.execute(add_users, data)
    data = (1, "test2", "tester2", 22, "example2@e.com", "sgdfg23432rfgh5et4wefdr", "[]")
    cursor.execute(add_users, data)

    data = (1, 'Brie Cups', '17:00', 1, 136)
    cursor.execute(add_recipes, data)
    data = (2, 'Spinach and Banana Power Smoothie', '17:00', 1, 136)
    cursor.execute(add_recipes, data)
    data = (3, 'Eggplant Burgers', '17:00', 1, 136)
    cursor.execute(add_recipes, data)
    data = (4, 'Baked BBQ Chicken Wings', '17:00', 1, 173)
    cursor.execute(add_recipes, data)
    data = (5, 'Mango Royale','30:00', 1, 350)
    cursor.execute(add_recipes, data)
    data = (6, 'Egg Toast', '15:00', 1, 110)
    cursor.execute(add_recipes, data)

    data = (1, 1001, 'step 1: step 2: ')
    cursor.execute(add_directions, data)
    data = (2, 1002, 'step 1: step 2: ')
    cursor.execute(add_directions, data)
    data = (3, 1003, 'step 1: step 2: ')
    cursor.execute(add_directions, data)
    data = (4, 1004, 'step 1: step 2: ')
    cursor.execute(add_directions, data)
    data = (5, 1005, 'step 1: step 2: ')
    cursor.execute(add_directions, data)
    data = (6, 1006, 'step 1: step 2: ')
    cursor.execute(add_directions, data)

    data = (2, 'Spinach', 'Refrigerator', 'Vegetable')
    cursor.execute(add_MainIngredient, data)
    data = (2, 'Banana', 'Countertop', 'Fruit')
    cursor.execute(add_MainIngredient, data)
    data = (3, 'Eggplant', 'Refrigerator', 'Vegetable')
    cursor.execute(add_MainIngredient, data)
    data = (1, 'Brie', 'Refrigerator', 'Dairy')
    cursor.execute(add_MainIngredient, data)
    data = (5, 'Mango', 'Countertop', 'Fruit')
    cursor.execute(add_MainIngredient, data)
    data = (6, 'Sandwich Bread', 'Pantry', 'Bread')
    cursor.execute(add_MainIngredient, data)
    data = (6, 'Egg', 'Refrigerator', 'Dairy')
    cursor.execute(add_MainIngredient, data)
    data = (5, 'Graham Crackers', 'Pantry', 'Snacks')
    cursor.execute(add_MainIngredient, data)
    data = (3, 'Tomato', 'Refrigerator', 'Vegetable')
    cursor.execute(add_MainIngredient, data)

    data = (3, 'Hamburger Buns', 'Pantry', 'Bread')
    cursor.execute(add_AdditIngredient, data)
    data = (1, 'Tart Cups', 'Refrigerator', 'Dough')
    cursor.execute(add_AdditIngredient, data)
    data = (1, 'Raspberry Preserves', 'Refrigerator', 'Fruit')
    cursor.execute(add_AdditIngredient, data)
    data = (3, 'Peppercorns', 'Spices & Oils', 'Spice')
    cursor.execute(add_AdditIngredient, data)
    data = (3, 'BBQ Sauce', 'Refrigerator', 'Table Condiment')
    cursor.execute(add_AdditIngredient, data)
    data = (5, 'Heavy Cream', 'Refrigerator', 'Dairy')
    cursor.execute(add_AdditIngredient, data)
    data = (5, 'Sweetened Condensed Milk', 'Pantry', 'Packaged Goods')
    cursor.execute(add_AdditIngredient, data)
    data = (6, 'Mayonnaise', 'Refrigerator', 'Table Condiment')
    cursor.execute(add_AdditIngredient, data)
    data = (3, 'Salt', 'Spices & Oils', 'Spice')
    cursor.execute(add_AdditIngredient, data)
    data = (3, 'Pepper', 'Spices & Oils', 'Spice')
    cursor.execute(add_AdditIngredient, data)
    data = (3, 'Olive Oil', 'Spices & Oils', 'Oil')
    cursor.execute(add_AdditIngredient, data)
    data = (3, 'Vegetable Oil', 'Spices & Oils', 'Oil')
    cursor.execute(add_AdditIngredient, data)
    data = (3, 'Ketchup', 'Refrigerator', 'Table Condiment')
    cursor.execute(add_AdditIngredient, data)
except mysql.connector.Error as err:
    print(err)

#make sure data is committed to db
conn.commit()

#QUERY DB
query = ("SELECT * FROM Users")
cursor.execute(query)
for a in cursor:
    print(a)

query = ("SELECT * FROM Recipes")
cursor.execute(query)
for a in cursor:
    print(a)

query = ("SELECT * FROM Directions")
cursor.execute(query)
for a in cursor:
    print(a)

query = ("SELECT * FROM MainIngredient ")
cursor.execute(query)
for a in cursor:
    print(a)

query = ("SELECT * FROM AdditionalIngredient ")
cursor.execute(query)
for a in cursor:
    print(a)

cursor.close()
conn.close()
