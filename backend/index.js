const express = require("express");
const app = express();
const cors = require("cors");
const { setUser } = require("./controllers/usercontroller");
const dishes = require("./routes/dishesRoute");
const user = require("./routes/usersRoute");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/FoodDeliveryDB")
  .then(() => console.log("Connected!"));

const port = 8080;
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log("TIme:", Date.now());
  next();
});

app.use("/api", dishes);
app.use("/api", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
