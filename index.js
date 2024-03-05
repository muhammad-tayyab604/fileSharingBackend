import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";
import DBConnection from "./database/db.js";
dotenv.config();

dotenv.config();

const app = express();
app.use(cors());

app.use("/", router);

const port = process.env.PORT;

DBConnection();

app.listen(port, () => console.log("server is running on potr", port));
