const homeController = (req, res) => {
  res.render("index", { name: "Sonam" }); //name:"sonam" local veriable hai jo index me pasa kiya hai
};

export { homeController };
