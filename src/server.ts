/* eslint-disable no-console */
import express from "express";
import path from "path";
import payload from "payload";

const expressApp = express();
require("dotenv").config();

expressApp.use(
  "/static",
  express.static(path.resolve(__dirname, "client/static"))
);

payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: expressApp,
  // email: {
  //   logMockCredentials: true,
  //   fromName: "Payload",
  //   fromAddress: "hello@payloadcms.com",
  // },
  onInit: (app) => {
    app.logger.info("Payload Demo Initialized");
  },
});

const externalRouter = express.Router();

externalRouter.use(payload.authenticate);

externalRouter.get("/", (req: any, res: any) => {
  if (req.user) {
    return res.send(`Authenticated successfully as ${req.user.email}.`);
  }

  return res.send("Not authenticated");
});

expressApp.use("/external-route", externalRouter);

expressApp.listen(process.env.PORT || 3000, async () => {
  payload.logger.info(`Admin URL on ${payload.getAdminURL()}`);
  payload.logger.info(`API URL on ${payload.getAPIURL()}`);
});
