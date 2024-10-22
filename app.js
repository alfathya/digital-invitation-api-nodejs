require("dotenv/config");
// DEFINING STUFF
const express = require("express");
const app = express();
const port = process.env.APP_PORT;
// const error = require("./middlewares/errorHandler");
const Router = require("./routers");
const { sequelize } = require("./models");

// USE MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(cors());
app.use(Router);

// app.use(error);

app.listen(port, async () => {
  console.log(`Server running at port ${port}`);
  await sequelize.authenticate();
  console.log(`Successfully Connected to the Database !`);
});
