// super simple express app
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, branch protection!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
