
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

INSERT INTO personal_info (employeeId, fullName, address, country, passport, emailAddress, birthDate, phoneNumber, maritalStatus)
VALUES
(1, 'John Doe', '123 Main Street, Apt 4B', 'USA', 'AB123456', 'john.doe@email.com', '1990-05-15', 1234567890, 'Single'),
(2, 'Jane Smith', '456 Elm Avenue, Suite 301', 'Canada', 'CD789012', 'jane.smith@email.com', '1985-09-20', 9876543210, 'Married'),
(3, 'Alice Johnson', '789 Oak Road, Unit 5', 'UK', 'EF345678', 'alice.johnson@email.com', '1992-03-10', 5555555555, 'Single');

INSERT INTO work_info (employeeId, department, epfNumber, SOCSO, startDate, url)
VALUES
(1, 'Sales', 'EPF-12345', 'SOCSO-54321', '2022-01-10', 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'),
(2, 'Marketing', 'EPF-56789', 'SOCSO-98765', '2021-11-05', 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'),
(3, 'Engineering', 'EPF-24680', 'SOCSO-13579', '2023-03-15', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww');