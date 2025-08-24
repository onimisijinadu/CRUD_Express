# Express + PostgreSQL CRUD API

A simple **CRUD (Create, Read, Update, Delete)** REST API built with **Node.js**, **Express**, and **PostgreSQL**.

Tested using **Postman**.

---

## Project Structure

CRUD_Express/
├── controllers/
│ └── users.js # Route logic for user operations
├── routes/
│ └── users.js # Express router for /users
├── postman/ # Postman request & response screenshots
├── db.js # PostgreSQL client or pool connection setup
├── index.js # Entry point: configures Express app and routes
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

---

## Requirements

- **Node.js** v16+
- **PostgreSQL** v13+
- **npm** (comes with Node.js)

---

## Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/onimisijinadu/CRUD_Express.git
   cd CRUD_Express
   ```

npm install

Configure PostgreSQL

Create a database (e.g., mydb)

Create the users table:
CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100) UNIQUE,
age INT
);
Update db.js with your connection details (user, password, host, etc.).

Start the server

npm start

Server will run at: http://localhost:5000

API Endpoints
Method Endpoint Description Request Body Example
GET /users Get all users —
GET /users/:id Get a user by ID —
POST /users Create a new user { "name": "Alice", "email": "alice@example.com", "age": 23 }
PATCH /users/:id Update a user { "name": "New Name", "email": "new@example.com", "age": 30 }
DELETE /users/:id Delete a user —
Postman Testing

Import these endpoints into Postman, set up the necessary JSON bodies for POST and PATCH, and verify the responses. Screenshots are included below from the postman/ folder:

Get all users: postman/Screenshot (21).png

Create user: postman/Screenshot (24).png

Get user by ID: postman/Screenshot (25).png

Update user: postman/Screenshot (26).png

Delete user or other request: (Add whichever relevant screenshot)

![Get all users](<postman/Screenshot%20(21).png>)
![Create user](<postman/Screenshot%20(24).png>)
![Get user by ID](<postman/Screenshot%20(25).png>)
![Update user](<postman/Screenshot%20(26).png>)
