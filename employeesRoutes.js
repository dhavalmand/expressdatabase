const express = require("express");

const resgisterEmployee = require("../controllers/resgisterEmployee");
const getEmployeeById = require("../controllers/getEmployeeById");
const updateEmployee = require("../controllers/updateEmployee");
const deleteEmployee = require("../controllers/deleteEmployee");
const loginEmployee = require("../controllers/loginEmployee");
const getEmployees = require("../controllers/getEmployees");

const employeesRoutes = express.Router();

//To add a new user into databse
employeesRoutes.post("/register", resgisterEmployee);

//To login the user
employeesRoutes.post("/login", loginEmployee);

//To get all the users from database
employeesRoutes.get("/getEmployees", getEmployees);

//To get the user from database by id
employeesRoutes.post("/getEmployeeById", getEmployeeById);

//To Update the existing user form database
employeesRoutes.post("/updateEmployee", updateEmployee);

//To soft delete the user from database
employeesRoutes.post("/deleteEmployee", deleteEmployee);

module.exports = employeesRoutes;
