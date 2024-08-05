/*Question :- console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value() A)
output:-143545000
*/
// Define a constructor function Amount to initialize a new Amount object
function Amount() {
  this.total = 0; // Initialize the total property to 0
}

// Add a method lacs to Amount's prototype
Amount.prototype.lacs = function (value) {
  this.total += value * 100000; // Add value in lacs to total (1 lac = 100,000)
  return this; // Return the current Amount object to allow method chaining
};

// Add a method crore to Amount's prototype
Amount.prototype.crore = function (value) {
  this.total += value * 10000000; // Add value in crores to total (1 crore = 10,000,000)
  return this; // Return the current Amount object to allow method chaining
};

// Add a method thousand to Amount's prototype
Amount.prototype.thousand = function (value) {
  this.total += value * 1000; // Add value in thousands to total (1 thousand = 1,000)
  return this; // Return the current Amount object to allow method chaining
};

// Add a method value to Amount's prototype to return the computed total
Amount.prototype.value = function () {
  return this.total; // Return the total value
};

// Define a function computeAmount to create and return a new Amount object
function computeAmount() {
  return new Amount(); // Create and return a new Amount object
}

// Compute the total amount using method chaining
console.log(
  computeAmount() // Create a new Amount object
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value() // Get the computed total value
);
