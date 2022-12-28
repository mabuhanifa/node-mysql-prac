import cors from "cors";
import express from "express";
import mysql from "mysql";

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "test",
});

app.get("/", (req, res) => {
  res.send("hello world from here");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    }
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
