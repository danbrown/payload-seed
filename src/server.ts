import express from "express";
import payload from "payload";
import path from "path";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

// add public folder to serve static files
app.use("/public", express.static(path.resolve(__dirname, "../public")));

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(process.env.PORT || 3000);
