const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./utils/Database");
const employeesRoutes = require("./routes/employeesRoutes");

const app = express();

app.use(bodyParser.json());
app.use(employeesRoutes);

sequelize;
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
