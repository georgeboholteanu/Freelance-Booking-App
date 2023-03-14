const data = require("./src/users.json");
const fs = require("fs");

const technologies = [
  "HTML",
  "CSS",
  "React",
  "Javascript",
  "NodeJS",
  "ExpressJS",
  "Tailwind",
  "Bootstrap",
  "Typescript",
  "Python",
  "C++",
  "CSharp",
  "MongoDB",
  "Django",
  "Flask",
  "ASP.NET",
  "Laravel",
  "Ruby",
  "SQL",
];

// Returns a random value from the given array that is not already in the current array
const getRandomUniqueValue = (arr, amount) => {
  const groupArr = [];
  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    groupArr.push(arr[randomIndex]);
  }
  return groupArr;
};

const data1 = data.users.map((x, idx) => ({
  ...x,
  availability: Math.random() < 0.5,
  id: idx + 1,
  skills: getRandomUniqueValue(technologies, 3),
}));

console.log(data1);

fs.writeFile("./src/updatedUsers.json", JSON.stringify(data1), (err) => {
  if (err) throw err;
  console.log("Updated user data written to file.");
});
