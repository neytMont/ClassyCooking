CREATE TABLE Users(
  UID int PRIMARY KEY,
  fName varchar(50),
  lName varchar(50),
  age int,
  email varchar(50),
  passHash varchar(150)
);

CREATE TABLE Recpies(
  recpieID int PRIMARY KEY,
  name varchar(50),
  timeLength int,
  difficulty int,
  ingredients varchar(150) -- replace this with something that can hold objects
);