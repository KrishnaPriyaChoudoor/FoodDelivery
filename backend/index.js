const express = require("express");
const app = express();
const cors = require("cors");
const { setUser } = require("./controllers/usercontroller");
const dishes = require("./routes/dishesRoute");
const user = require("./routes/usersRoute");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://kpu101212:85LMTkse3b51sVzF@cluster0.jic1cmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"));

const port = 8080;
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", dishes);
app.use("/api", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
