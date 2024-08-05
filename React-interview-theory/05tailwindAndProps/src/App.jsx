import Cards from "./components/Cards";
import "./App.css";
function App() {
  const myObj = {
    subject: "Javascript",
    object: "Variables",
    Age: 27,
  };
  const Arrays = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="bg-green-500 text-black rounded-xl">Tailwind css</h1>
      <Cards
        keyss="Mukul Kumar"
        btnText="Click me"
        objVariable={myObj}
        passArray={Arrays}
      />
      <Cards keyss="Ajit kumar" btnText="Submit Button" />
    </>
  );
}

export default App;
