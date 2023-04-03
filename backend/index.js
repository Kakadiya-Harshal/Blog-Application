import express from "express";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/databaseConnection.js";
import bodyParser from "body-parser";

dotenv.config();
connectDB();
const app = express();

//body-parse
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//To disable the security of Web
app.use(cors());

//Middleware
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
