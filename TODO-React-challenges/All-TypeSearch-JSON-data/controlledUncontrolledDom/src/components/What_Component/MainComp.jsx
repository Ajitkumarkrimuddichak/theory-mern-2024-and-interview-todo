/*What is Component in React.js :- Components can  reusable, self-contained pieces of code 
that define how a certain part of the UI should look and behave. 
*/
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";

const MainComp = () => {
  return (
    <>
      <Header />
      <Cards />
      <Footer />
    </>
  );
};

export default MainComp;
