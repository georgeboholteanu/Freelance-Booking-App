// jshint esversion: 6
// import data from "./users.json";

const data = require("./src/users.json");
const express = require("express");
const fs = require("fs");
const port = 5000;
const app = express();

app.use(express.json()); // Add this line to parse JSON requests

app.get("/", (req, res) => res.send("Helloooo"));

// Get all users
app.get("/users", (req, res) => {
  res.json({
    users: data.users,
  });
});

// Update a user's availability
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = data.users.find((u) => u.id === parseInt(userId));
  if (!user) {
    return res.status(404).send("User not found");
  }

  // Update the user's availability
  user.availability = req.body.availability;

  // Save the updated data to the file
  fs.writeFile("./src/users.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error updating user");
    }
    res.send("User updated successfully");
  });
});

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});


