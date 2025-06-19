const fs = require("fs");
const path = require("path");
const env = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const placesRoutes = require("../routes/places-routes");
const usersRoutes = require("../routes/users-routes");
const HttpError = require("../util/http-error");

env.config();

const app = express();

mongoose.set("strictQuery", false);

app.use(bodyParser.json());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use(cors());

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

// global catches
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlinkSync(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.21iry.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
