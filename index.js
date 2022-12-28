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

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`cover` ) VALUES (?)";
  const values = ["title from backend", "desc", "cover"];
  db.query(q, [values], (err, data) => {
    if (err) {
      res.json(err);
    }
    return res.json("book has been created successfully");
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
