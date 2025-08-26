import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import 'dotenv/config'; 


import authPath from "../src/routes/auth.routes.js";
import categoryPath from "../src/routes/category.routes.js";
import itemPath from "../src/routes/item.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/auth", authPath);
app.use("/api/category", categoryPath);
app.use("/api/item", itemPath);

const PORT = 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
