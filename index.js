"use strict";
import "dotenv/config.js";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import fetch from "node-fetch";
import bottles from "./bottles.js";

const SERVICE_PORT = process.env.SERVICE_PORT || 4000;
const SERVICE_HOST = process.env.SERVICE_HOST || "0.0.0.0";

// App
const app = express();

app.use(helmet());
app.use(cors());

app.get("/send-bottle", function (req, res) {
  sendBottle();
  res.send("success");
});

function sendBottle() {
  let bottle = bottles[Math.floor(Math.random() * bottles.length)];
  // fetch(
  //   `https://platform.vestaboard.com/subscriptions/${process.env.VESTABOARD_DEFAULT_SUBSCRIPTION}/message`,
  //   {
  //     body: `{"text":"Today's bottle is ${bottle.bottle_id}: ${bottle.name} (${bottle.top} / ${bottle.bottom})"}`,
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "X-Vestaboard-Api-Key": `${process.env.VESTABOARD_API_KEY}`,
  //       "X-Vestaboard-Api-Secret": `${process.env.VESTABOARD_API_SECRET}`,
  //     },
  //     method: "POST",
  //   }
  // );
  console.log(bottle)
}

app.listen(SERVICE_PORT, SERVICE_HOST);

console.log(`Running on http://${SERVICE_HOST}:${SERVICE_PORT}`);
