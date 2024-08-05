import Menu from "./Menu.js";
import "./App.css";
import StateManage from "./MangeState.js";
import Obj from "./ObjectValueChange.js";
import Propdrilling from "./Propdrilling_A.js";
import AccessDom from "./Access_to_DOM.js";
import API_GET from "./API_GET_data.js";
//import Multi from "./MultipleAPICall.js";
import ErrorBoundary from "./errorBoundary/Main.js";
import ConditionAge from "./ConditionAge.js";
//import AxiosUsedApi from "./APIGetDataUseAxios.js";
import FetchMethodAPIData from "./fetchUseDataGet/FetchMethodAPIData.js";
import Card from "./cards/Card.js";
import Calculater from "./calculater/Calculater.js";
import UseState from "./allHooks/useStatehook/UseState.js";
import ArrayUseState from "./allHooks/useStatehook/ArrayUseState.js";
import ToggeleValueuseState from "./allHooks/useStatehook/ToggeleValueuseState.js";
import ObjectUseState from "./allHooks/useStatehook/ObjectUseState.js";
import TodoUseStare from "./allHooks/useStatehook/TodoUseStare.js";
import ShortCircuitAllHook from "./allHooks/useStatehook/ShortCircuitAllHook.js";
import LoginFome from "./allHooks/useStatehook/LoginFome.js";
import UseEffect1 from "./allHooks/useEffecthook/UseEffect1.js";
import UseEffectCount from "./allHooks/useEffecthook/UseEffectCount.js";
import UseEffectcondition from "./allHooks/useEffecthook/UseEffectcondition.js";
import CounteryStateFind from "./counteryAndStateFind/CounteryStateFind.js";
import ApiDataFilter from "./dataFilterAPI/ApiDataFilter.js";

function App() {
  return (
    <>
      <Menu />
      <StateManage />
      <Obj />
      <Propdrilling />
      <AccessDom />
      <API_GET />
      {/* <Multi /> */}
      <ErrorBoundary />
      <ConditionAge />
      {/* <AxiosUsedApi /> */}
      <FetchMethodAPIData />
      <Card />
      <Calculater />
      <UseState />
      <ArrayUseState />
      <ToggeleValueuseState />
      <ObjectUseState />
      <TodoUseStare />
      <ShortCircuitAllHook />
      <LoginFome />
      <UseEffect1 />
      <UseEffectCount />
      <UseEffectcondition />
      <CounteryStateFind />
      <ApiDataFilter />
    </>
  );
}

export default App;
