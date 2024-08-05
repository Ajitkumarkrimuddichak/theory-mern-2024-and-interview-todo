import express from "express";
import dotenv from "dotenv";

dotenv.config();
const App = express();

//kya hota hai ki localHost me man lo environment variable nahi ya kisi karan se nahi hai to 3000 port pe serve ho jayega lekin jab production me jati hai to 100% necessary hai ki Process.env se hi port milega agar vaha se port nahi mila to app run nahi hoga.
const port = process.env.PORT || 4000; //Environment variable se aata hai jab aap deploy karate hai. ya Environment file se aata ho. nahi to Hard coded Port lete hai

App.get("/", (req, res) => {
  res.send("Hello World Home Route");
});

//get a List of 5 jokes
App.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "B joke",
      content: "This is a Two",
    },
    {
      id: 3,
      title: "C joke",
      content: "This is a Third",
    },
    {
      id: 4,
      title: "D joke",
      content: "This is a Four",
    },
    {
      id: 5,
      title: "E joke",
      content: "This is a Five",
    },
  ];
  res.send(jokes);
});

App.listen(port, (req, res) => {
  console.log(`Surver is running at port ${port}`);
});
