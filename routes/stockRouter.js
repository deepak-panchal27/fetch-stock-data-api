const stockController = require("../controllers/stockController.js");
const stockRouter = require("express").Router();

stockRouter.get(
  "/fetch-data",
  stockController.fetchStockData
);

module.exports = stockRouter;
