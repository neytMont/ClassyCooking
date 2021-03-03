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
