// jshint esversion: 6
// import data from "./users.json";
const data = require("./src/users.json");
const fs = require("fs");
// const path = require("path");

const express = require("express");
const app = express();

// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.send("Helloooo"));
app.get("/api", (req, res) => {
  res.json({
    // users: ["user1", "user2", "user3", "user4", "aaabbb"],
    users: data.users,
  });
});

app.put("/api/test", (req, res) => {
  const data = req.body;
  res.status(200).send("success");
});

// app.put("/public/:id", (req, res) => {
//   // extract the id from the parms
//   const id = req.params.id;

//   // extract the new value from the body
//   // {
//   //   availability: false
//   // }
//   const availability = req.body.availability;

//   // use array .find to get the object you want

//   // update there avail prop

//   // respond to the client
//   res.end();
// });

app.listen(5000, () => {
  console.log("Server Started on port 5000");
});
