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
('John Smith', 'Male', 'Married', '123 Main Street Apt 4B', 'United States', 515476987, 'john.smith@email.com', 1234567890, '1990-05-15'),
('Kerry Dill', 'Prefer not to say', 'Single', '456 Elm Avenue, Suite 301', 'Canada', 715476987, 'kerry.dill@email.com', 9876543210, '1985-09-20'),
('Alice Johnson', 'Female', 'Single', '789 Oak Road, Unit 5', 'United Kingdom', 915476987, 'alice.johnson@email.com', 5555555555, '1992-03-10');

INSERT INTO employment_info (employeeId, department, epfNumber, SOCSO, startDate, url)
VALUES
('A5187', 'Sales', 12345678, 921206126537, '2022-01-10', 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'),
('K2685', 'Marketing', 23456789, 851208126537, '2021-11-05', 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'),
('M9632', 'Engineering', 34567890, 96121026537, '2023-03-15', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww');