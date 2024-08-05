const homeController = (req, res) => {
  // res.render("index", { name: "Ajit kuamar" });
  const data = {
    name: "mukul kumar",
    id: 21,
    marks: [40, 60, 80, 70, 20],
  };
  res.render("index", data);
};

export { homeController };
