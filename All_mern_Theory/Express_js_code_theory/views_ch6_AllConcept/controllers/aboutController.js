//Application Logic kahate hai this page
import { join } from "path";
const aboutController = (req, res) => {
  // res.send('<h1>About Page</h1>')
  // res.sendFile('C:\Users\HP\Desktop\NODE_API_CRUD\Full_Cource_Expressjs_Theroy\Express_js_code_theory\views_ch6_AllConcept\views\about.html')
  console.log(join(process.cwd(), "views", "about.html")); //join page
  res.sendFile(join(process.cwd(), "views", "about.html"));
};

export { aboutController };
