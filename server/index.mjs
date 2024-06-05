import express from "express";
import { ConnectDb } from "./db/connectDb.mjs";

import bodyParser from "body-parser";
const DB_URI = "mongodb+srv://smitt533:netflix@cluster0.bwuzp33.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const app = express();

const PORT = 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

import authRoute from "./router/authRoute.mjs"

app.use("/api/v1/auth",authRoute);

// Check if the URL matches mongodb://localhost:27017
  ConnectDb(DB_URI)
  .then((data)=>console.log(data))
  .catch((err)=>console.log(err))
    


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
