import express from "express";
import mysql from "mysql";
const app = express();
const port = 5000;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

app.get("/", (req, res) => {
  res.send("hello world from here");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
