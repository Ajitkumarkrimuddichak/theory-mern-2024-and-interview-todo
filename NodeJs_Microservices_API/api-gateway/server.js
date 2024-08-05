const gateway = require("fast-gateway");
const port = 9001;

//middleware
const checkAuth = (req, res, next) => {
  //console.log(req.headers);
  if (req.headers.token && req.headers.token != "") {
    next();
  } else {
    res.setHeader("Content-type", "application/json");
    res.statusCode = 401;
    res.end(JSON.stringify({ status: 401, message: "Authentication fail" }));
  }
};

const server = gateway({
  middlewares: [checkAuth], //multiple pe authentation apply
  routes: [
    {
      prefix: "/order",
      target: "http://localhost:8081/",
      hooks: {},
    },
    {
      prefix: "/pmt",
      target: "http://localhost:8082/",
      //middlewares: [checkAuth],//only one pe authentation apply
      methods: ["GET", "POST"],
      hooks: {},
    },
  ],
});

server.get("/mytesting", (req, res) => res.send("yes called gateway"));

server.start(port).then((server) => {
  console.log(`API Gateway is running 9001 port`);
});
