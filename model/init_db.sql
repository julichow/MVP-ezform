-- Delete database 
DROP DATABASE IF EXISTS employees;

-- Create database
CREATE DATABASE employees;

-- Choose database to work with 
USE employees;

-- Drop the tables
DROP TABLE IF EXISTS employment_info;
DROP TABLE IF EXISTS personal_info;

-- Create tables
CREATE TABLE personal_info (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fullName VARCHAR(30) NOT NULL, 
    gender VARCHAR(20),
    maritalStatus VARCHAR(10),
    address VARCHAR(200),
    country VARCHAR(30) NOT NULL,
    phoneNumber bigint,
    emailAddress VARCHAR(25) NOT NULL,
    passport VARCHAR(20),
    birthDate date
    );

CREATE TABLE employment_info (
    id INT PRIMARY KEY AUTO_INCREMENT,
    employeeId VARCHAR(10) NOT NULL,
    department VARCHAR(30) NOT NULL,
    epfNumber INTEGER,
    SOCSO BIGINT,
    startDate date,
    url TEXT
    );  

INSERT INTO personal_info (fullName, gender, maritalStatus, address, country, phoneNumber, emailAddress, passport, birthDate)
VALUES
('John Smith', 'Male', 'Married', '123 Main Street Apt 4B', 'Malaysia', 515476987, 'john.smith@gmail.com', 1234567890, '1990-05-15'),
('Kerry Dill', 'Prefer not to say', 'Single', '456 Elm Avenue, Suite 301', 'Canada', 715476987, 'kerry.dill@gmail.com', 9876543210, '1985-09-20'),
('Alice Johnson', 'Female', 'Single', '789 Oak Road, Unit 5', 'Malaysia', 915476987, 'alice.johnson@outlook.com', 5555555555, '1992-03-10'),
('Karan Devin', 'Male', 'Married', 'Jalan Tan Cheng Lok, Unit 29', 'Malaysia', 123456787, 'karan.devin@outlook.com', 1252555785, '1985-05-20'),
('Merrick Coletti', 'Prefer not to say', 'Single', 'Taman Tun Dr Ismail, Unit 26', 'Malaysia', 615476890, 'merrick.coletti@gmail.com', 4321512345, '1990-12-10'),
('Terry Jina', 'Female', 'Married', '456 Jalan Yew Pudu', 'Malaysia', 123676449, 'terry.jina@outlook.com', 4397559871, '1999-01-15');

INSERT INTO employment_info (employeeId, department, epfNumber, SOCSO, startDate, url)
VALUES
('A5187', 'Sales', 12345678, 921206126537, '2022-01-10', 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'),
('K2685', 'Marketing', 0 , 0 , '2021-11-05', 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'),
('M9632', 'Engineering', 34567890, 96121026537, '2023-03-15', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'),
('A1232', 'Sales', 56789990, 85052012596, '2000-05-01', 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww'),
('M8162', 'Engineering', 34567890, 90121008537, '2005-03-15', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'),
('K1332', 'Business Development', 34567890, 99011508516, '2001-03-15', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D');