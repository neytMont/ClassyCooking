SELECT * FROM Users;
SELECT * FROM Recipes;

SELECT * FROM MainIngredient;
SELECT * FROM AdditionalIngredient;

-- Delete user account CC-42
DELETE FROM Users WHERE UID=0;

-- Update user recipe CC-38
UPDATE Users
SET recipes="[]"
WHERE UID=0;

--Delete a user recipe CC-34 (Nathaniel)
DELETE From Recpies 
  WHere recipename = '**USER will have to enter recipe name as a "verification"**' 
  And recipeuserid = '**current user**';

--Calling the user information CC-37
SELECT * FROM Users 
  WHERE uid = '**current user**'
