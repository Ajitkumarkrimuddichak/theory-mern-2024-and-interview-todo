/* What ia JWT :- JSON Web Tokens (JWT) are a standard for securely 
 transmitting information between parties as a JSON object. Using 
 JWT with Node.js involves creating, signing, and verifying tokens 
 to manage authentication and secure communication. 
*/

//Ex:-
// Import the Express framework
const express = require("express");

// Import the JSON Web Token (JWT) library
const jwt = require("jsonwebtoken");

// Create an instance of an Express application
const app = express();

// Define the port number the server will listen on
const port = 3000;

// Define a secret key for signing JWTs
const secretKey = "your-256-bit-secret";

// Define a route for GET requests to the root URL
app.get("/", (req, res) => {
  // Respond with a JSON message
  res.json({ message: "This is a protected route" });
});

// Define a route for POST requests to the /login URL
app.post("/login", (req, res) => {
  // Create a user object with some sample data
  const user = {
    id: 1,
    username: "Ajit",
    email: "ajitkumar@gmail.com",
  };
  // Sign a JWT with the user object, secret key, and set it to expire in 1 hour
  jwt.sign({ user }, secretKey, { expiresIn: "1h" }, (err, token) => {
    // Respond with the generated token
    res.json(token);
  });
});

// Define a route for POST requests to the /profile URL
// Use the verifyToken middleware to check for a valid token
app.post("/profile", verifyToken, (req, res) => {
  // Verify the token using the secret key
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      // If there's an error (invalid token), respond with an error message
      res.send({ result: "invalid token" });
    } else {
      // If the token is valid, respond with a success message and the auth data
      res.json({
        message: "profile accessed",
        authData,
      });
    }
  });
});

// Middleware function to verify the token
function verifyToken(req, res, next) {
  // Get the authorization header value
  const bearerHeader = req.headers["authorization"];
  // Check if the bearerHeader is defined
  if (typeof bearerHeader !== "undefined") {
    // Split the header value by space to get the token
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    // Set the token on the request object
    req.token = token;
    // Call the next middleware function
    next();
  } else {
    // If the header is not defined, respond with an error message
    res.send({
      result: "Token is not valid",
    });
  }
}

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message indicating the server is running
  console.log(`Server running on port ${port}`);
});
