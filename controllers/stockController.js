const handleAllErrors = require("../helpers");
const axios = require("axios");

const fetchStockData = async (req, res) => {
    try {
      const response = await axios.get(process.env.STOCK_API);
      
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      return handleAllErrors(error, res);
    }
  }

module.exports = { fetchStockData }