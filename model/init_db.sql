
DROP TABLE IF EXISTS personal_info;
DROP TABLE IF EXISTS work_info; 

   CREATE TABLE personal_info (
    employeeId INT NOT NULL,
    fullName VARCHAR(30) NOT NULL, 
    address VARCHAR(200),
    country VARCHAR(15) NOT NULL,
    passport VARCHAR(20),
    emailAddress VARCHAR(25),
    birthDate date, phoneNumber bigint,
    maritalStatus VARCHAR(10),
    PRIMARY KEY (employeeId)
    );
    
   CREATE TABLE work_info (
    employeeId INT NOT NULL,
    department VARCHAR(30) NOT NULL,
    epfNumber VARCHAR(30),
    SOCSO VARCHAR(30),
    startDate date,
    url TEXT,
    PRIMARY KEY (employeeId)
    );  
