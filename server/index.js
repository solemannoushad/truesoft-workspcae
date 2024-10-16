import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectToMongo } from "./config/db.js";

connectToMongo();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`TrueSofts workspace listening on: http://localhost:${port}`);
});


process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});