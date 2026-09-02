import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import dotenv from "dotenv";
import Connection from "./db/db_conn.js";
import productRouter from "./routes/productsRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
Connection();
const port = process.env.PORT || 8000;

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/product", productRouter); //middleware
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

// MVC PATTERN      -> MODEL VIEW CONTROLLER
//MVVM              -> MODEL VIEW VIEW MODEL

//http://localhost:8000/api/v1/product
