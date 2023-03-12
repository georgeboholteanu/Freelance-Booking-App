// jshint esversion: 6
// import data from "./users.json";
const data = require("./src/users.json");
const fs = require("fs");

// console.log(data);

// write that to the

const express = require("express");
// // import { Express } from "express";

const app = express();

app.get("/api", (req, res) => {
  res.json({
    // users: ["user1", "user2", "user3", "user4", "aaabbb"],
    users: data.users,
  });
});

app.put("/api/:id", (req, res) => {
  // extract the id from the parms
  const id = req.params.id;

  // extract the new value from the body
  // {
  //   availability: false
  // }
  const availability = req.body.availability;

  // use array .find to get the object you want

  // update there avail prop

  // respond to the client
  res.end();
});

app.listen(5000, () => {
  console.log("Server Started on port 5000");
});
