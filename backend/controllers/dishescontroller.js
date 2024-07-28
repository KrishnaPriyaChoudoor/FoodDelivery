const DishesModel = require("../models/Dishes");

const getDishes = async (req, res) => {
  const dishes = await DishesModel.find({});
  res.send(dishes);
};
module.exports = { getDishes };
