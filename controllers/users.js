import client from '../db.js';

//get all users
export const getUsers = (req, res) => {
  const users = "SELECT * FROM users";

  client.query(users, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error fetching users");
    } else if (result.rows.length === 0) {
      res.send("No users found");
    } else {
      res.json(result.rows);
    }
  });
};

//get a single user by id
export const getUserId = (req, res) => {
  const { id } = req.params;

  const userId = "SELECT * From users  WHERE id =$1";

  client.query(userId, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error fetching user by id");
    } else if (result.rows.length === 0) {
      res.send("No users found");
    } else {
      res.send(result.rows);
    }
  });
};

//create a new user
export const createUser = (req, res) => {
  const { name, email, age } = req.body;

  const newUser = "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) ";

  client.query(newUser, [name, email, age], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error creating user");
    } else {
      res.send("User created successfully");
    }
  });
};

//udate a user by id
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const userUpdate = "UPDATE users SET name=$1, email=$2, age=$3 WHERE id=$4";

  client.query(userUpdate, [name, email, age, id], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error updating user");
    } else {
      res.send("User updated successfully");
    }
  });
};

//delete a user by id
export const deleteUser = (req, res) => {
  const { id } = req.params;

  const deleteUser = "DELETE FROM users WHERE id=$1";

  client.query(deleteUser, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error deleting user");
    } else {
      res.send("User deleted successfully");
    }
  });
};
