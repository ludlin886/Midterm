const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ludlin886:Ludlin196958@cluster0.29680fe.mongodb.net/DressStore?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const app = express();

const db = require("./app/models");

db.mongoose

  .connect(db.url, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Connected to the database!");
  })

  .catch((err) => {
    console.log("Cannot connect to the database!", err);

    process.exit();
  });

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));

// simple route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to SportStore application." });
});

require("./app/routes/product.routes")(app);
require("./app/routes/category.routes")(app);
// set port, listen for requests

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
