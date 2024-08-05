import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Index from "./Index";

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Nav />
        <Route path="/Index">
          <Index />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
