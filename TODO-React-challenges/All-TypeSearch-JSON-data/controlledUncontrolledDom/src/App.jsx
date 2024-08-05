import "./App.css";
import MainComp from "./components/What_Component/MainComp";
import ChildComponent from "./components/PropsPass";
import States from "./components/States";
import ControlledComponent from "./components/ControlledComponent";
import UncontrolledComponent from "./components/UncontrolledComponent";
import Parent_Prop from "./components/PropDrilling/Parent_Prop";
import HOCmain1 from "./components/HOC/Main";
import JsonData from "./components/HOCJson/JsonData";
import HocAndHookUsed from "./components/HOC_Convert_Hook/JsonData";

function App() {
  return (
    <>
      <MainComp />
      <ChildComponent name="Ram kumar" age={25} />
      <States />
      <ControlledComponent />
      <UncontrolledComponent />
      <Parent_Prop />
      <HOCmain1 />
      <JsonData />
      <HocAndHookUsed />
    </>
  );
}

export default App;
