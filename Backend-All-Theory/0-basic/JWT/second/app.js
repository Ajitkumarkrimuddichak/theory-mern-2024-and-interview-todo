/*What is express-session stateless or stateful in nodejs :- 
Stateful: This means that the server maintains the state of a session. 
When a user makes a request, the server keeps track of the user's session 
data between requests. This is achieved through a session ID that is 
stored in a cookie on the client's browser. The server uses this 
session ID to retrieve the corresponding session data stored on the 
server side (e.g., in memory, a database, or another storage mechanism).


How express-session Works:-
1) Session Creation:- When a user first makes a request, a new session is 
created. The server generates a unique session ID and sends it to the 
client as a cookie.

2) Session Storage:- The session data is stored on the server side. 
By default, express-session stores sessions in memory, but for production 
use, it's recommended to use a more robust storage option like 
a database (e.g., Redis, MongoDB).

3) Subsequent Requests:- For subsequent requests, the client sends the 
session ID cookie with the request. The server uses this session ID to 
look up the session data and restore the session state for that user.

Summary :-
express-session is stateful because it maintains session data on the server
side, allowing the server to track user sessions across multiple requests.
*/

//Ex:-
const express = require("express");
const session = require("express-session");
const app = express();
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

app.get("/", (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  res.send(`Number of views: ${req.session.views}`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
