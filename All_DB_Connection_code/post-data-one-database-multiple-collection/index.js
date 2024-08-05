//How to Store Countries, States, and Cities using Bulk Operation in Node JS MongoDB
//Bulk Operation used thousand of data one time save in database
//Error  Bulk data to aa raha hia par db me save nahi ho raha hai
const Country = require("country-state-city").Country;
const State = require("country-state-city").State;
const City = require("country-state-city").City;

//console.log(Country.getAllCountries());
//console.log(State.getAllStates());
//console.log(City.getAllCities());

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://127.0.0.1:27017/", function (err, db) {
  if (err) throw err;
  var dbo = db.db("countrystatecity");

  //Country data save funcnlity
  var countriesBulk = dbo.collection("countries").initializeUnorderedBulkOp();
  var countries = Country.getAllCountries();
  countries.forEach((country) => {
    countriesBulk.insert({ name: country.name, short_name: country.isoCode });
  });

  countriesBulk.execute();
  console.log("Country inserted");

  //States data save funcnlity
  var statesBulk = dbo.collection("states").initializeUnorderedBulkOp();
  var states = State.getAllStates();
  states.forEach((state) => {
    statesBulk.insert({
      name: state.name,
      country_short_name: state.countryCode,
    });
  });
  statesBulk.execute();
  console.log("States inserted");

  //City data save funcnlity
  var citiesBulk = dbo.collection("cities").initializeUnorderedBulkOp();
  var cities = City.getAllCities();
  cities.forEach((city) => {
    citiesBulk.insert({ name: city.name, state_name: city.stateCode });
  });
  citiesBulk.execute();
  console.log("Citys inserted");
});

//Another question :- How to Use Lookup in Node JS MongoDB? - How to Fixed Lookup not Working Issue in Node JS MongoDB?
