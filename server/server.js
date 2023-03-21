const data = require("./src/users.json");
const express = require("express");
const fs = require("fs");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json()); // Add this line to parse JSON requests

// GET /users endpoint
app.get("/users", (req, res) => {
  // If 'skill' is provided, filter users by their skills
  let filteredUsers = data.users;

  // Get the value of the 'skill' query parameter, if any
  if (req.query.skill) {
    const { skill } = req.query;
    filteredUsers = data.users.filter((user) => user.skills.includes(skill));
    // Return the filtered users as JSON
    res.json({ users: filteredUsers });
  } else if (req.query.loc) {
    const { loc } = req.query;
    filteredUsers = data.users.filter((user) => user.location === loc);
    // Return the filtered users as JSON
    res.json({ users: filteredUsers });
  } else if (req.query.avb) {
    const { avb } = req.query;
    filteredUsers = data.users.filter(
      (user) => user.availability == avb
    );
    // Return the filtered users as JSON
    res.json({ users: filteredUsers });
  } else {
    res.json({ users: data.users });
  }  

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

// Define a route for adding a new user
app.post("/adduser", async (req, res) => {
  // Extract the user data from the request body
  const newUser = req.body;

  // Write the new user to the database
  await fs.writeFile("./src/users.json", JSON.stringify(newUser), (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error adding user");
    }
    res.send("User added successfully");
  });

  // Send a response indicating that the user was added successfully
  // res.status(201).json({ message: 'User added successfully' });
});

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
