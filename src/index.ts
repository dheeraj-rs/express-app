import express from "express";
import dotenv from "dotenv";
import { Rv1 } from "./router/V1/Route1";
import { Rv2 } from "./router/V2/Route2";

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

app.use("/", Rv1);
app.use("/v2", Rv2);
