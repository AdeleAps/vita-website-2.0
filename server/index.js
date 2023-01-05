import express from "express";
import mailerRoute from "./routes/mailerRoute.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/", mailerRoute);

app.listen(port, () => {
  console.log("Listening!");
});


