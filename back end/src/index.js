import express from "express";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Server is running and MongoDB is connected");
});

const PORT = 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
