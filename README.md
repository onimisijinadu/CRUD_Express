# 📘 Express + PostgreSQL CRUD API

# A simple CRUD (Create, Read, Update, Delete) REST API built with Node.js, Express, and PostgreSQL.

# Tested using Postman.

## 🚀 Features

# Create new users

# Retrieve all users or a single user by ID

# Update user details

# Delete users

# PostgreSQL database integration

# Project structure

express_CRUD/
├── controllers/
│ └── users.js # CRUD logic for users
├── routes/
│ └── users.js # API End point using router.express()
├── postman # screenshots of postman tests
├── db.js # Database connection setup (PostgreSQL client/pool)
├── index.js # Entry point, Express app + routes
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

## 🛠️ Requirements

# \* [Node.js](https://nodejs.org/) v16+

# \* [PostgreSQL](https://www.postgresql.org/) v13+

# \* npm (comes with Node.js)

4. **Run the server**

# bash

# npm start

# Server runs on [http://localhost:5000](http://localhost:5000)

## 📡 API Endpoints

### 1. Get all users

```http
GET /users
```

**Response**

```json
[
  { "id": 1, "name": "Alice", "email": "alice@example.com", "age": 23 },
  { "id": 2, "name": "Bob", "email": "bob@example.com", "age": 30 }
]
```

`(./postman/Screenshot%20(21).png)`

---

### 2. Get user by ID

```http
GET /users/:id
```

**Example:** `GET /users/1`
`(./postman/Screenshot%20(25).png)`

---

### 3. Create a new user

```http
POST /users
```

`(./postman/Screenshot%20(24).png)`
**Body (JSON)**

```json
{
  "name": "Charlie",
  "email": "charlie@example.com",
  "age": 28
}
```

---

### 4. Update a user

```http
PATCH /users/:id
```

**Body (JSON)**

```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "age": 35
}
```

`(./postman/Screenshot%20(26).png)`

### 5. Delete a user

```http
DELETE /users/:id
```

## `(./postman/Screenshot%20(22).png)`

## 🧪 Testing with Postman

- Import endpoints into **Postman**
- Use the provided JSON body for POST and PUT requests
- Verify responses
- Screenshots of Postman requests & responses were included here in the README (using `(./images/screenshot.png)`)

---

## 📜 License

This project is for learning purposes (Operating Systems / Database / Web Development coursework).

---
"# express_crud_api" 
