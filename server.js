require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/nodeapi/", (req, res) => {
  res.json({ message: "hello from node api" });
});

app.get('/nodeapi/health-check', (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  };
  
  try {
    res.status(200).json(healthCheck);
  } catch (e) {
    healthCheck.message = e.message;
    res.status(503).json(healthCheck);
  }
});

const stockRouter = require("./routes/stockRouter.js");
app.use("/nodeapi/v1/stock", stockRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
