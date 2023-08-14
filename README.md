# Full Stack Ezform App

In this repository, you will build a full stack Employment Form app using React, Node/Express, and mySQL.

## Objectives

- Make amendments to the database.
- Make amendments to the API server.
- Make amendments to the front end.

## Setup

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm run dev` install dependencies related to React (the client).

### Database Prep

Create `.env` file in project directory and add

```
DB_HOST=localhost
DB_USER=root
DB_PASS=YOUR_PASSWORD
DB_NAME=employees
```

(replace `YOUR_PASSWORD` with your actual password)

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

In the MySQL CLI, type `create database employees;` to create a database in MySQL.

Run `npm run migrate` in your **TERMINAL**, in the **project** folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'work_info' and 'personal_info' in your database.

### Run Your Development Servers

- Run `npm install express` and `npm start` in project directory to start the Express server on port 4000
- `cd client`, `npm install vite` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.
- Client is configured so all API calls will be proxied to port 4000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:5173`
- You can test your API in `http://localhost:4000/api`

## Basic Requirements

Create a webpage with the following functionality:

- [ ] A list of employees.
- [ ] A form to add new employees. There should be fields to input the Personal Information and Work Information, separately.
  - After submitting the form in User View, the new employees should be added to the employees database and displayed on the Admin page.
- [ ] Each employees can be added with a save button. After clicking on this button, employees should be added from the database and the updated list of employees shown on the page
- [ ] Style the app to make it look as polished as possible. Bootstrap is already loaded in the index.html file, so you can use it if you want to.

## Tips

Suggested Feature Extentsion:

1. Login page for Admin & User respectively.
2. Loading passport photos locally instead of URL.
3. Download file (i.e pdf csv) button.
4. Call the endpoints from the front end.
5. Deleting and updating employee information.
6. Search bar to filter employee based on department.
7. Have an Admin View that initially only displays the names of employees, and upon clicking on a name, it shows the complete profile with passport photo, personal information, and work information. The info to display this profile should be obtained from a fetch request to `/employees/:id`

Suggested Process:

1. Try and write the correct query in `mysql`.
2. Use that query to finish the endpoints in `/routes/employees.js`.
3. Test your endpoints using Postman.

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Documentation](https://react.dev/)