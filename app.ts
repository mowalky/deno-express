import express from "npm:express";
const app = express();

app.get("/", function (req, res) {
  res.send("Hello Universe!");
});

app.listen(3000);
console.log("listening on http://localhost:3000/");
