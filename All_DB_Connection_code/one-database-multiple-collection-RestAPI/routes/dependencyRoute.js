const express = require("express");
const dependency_route = express();

const bodyParser = require("body-parser");

dependency_route.use(bodyParser.json());
dependency_route.use(bodyParser.urlencoded({ extended: true }));

const dependecyController = require("../controllers/dependecyController");

dependency_route.get("/get-countries", dependecyController.getCountries);
dependency_route.get("/get-states", dependecyController.getStates);
dependency_route.get("/get-cities", dependecyController.getCities);

module.exports = dependency_route;
