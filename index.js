import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); 

import express from "express";
import dotenv from "dotenv";
import Connection from "./db/db_conn.js";

const app = express();

dotenv.config();
Connection();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

// MVC PATTERN      -> MODEL VIEW CONTROLLER
//MVVM              -> MODEL VIEW VIEW MODEL
