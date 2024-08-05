import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MuiProjectuseState from "./usestatehook/mui-small-useState-project/Navbar";
import FomeValidation from "./reactfomevalidation/ReactFomeValidation";
import UseState from "./usestatehook/Conceptone";
import LikebuttonUseState from "./usestatehook/LikeButtonuseState";
import LikeDeslikeUseState from "./usestatehook/LikeDislike";
import CalculaterUseState from "./usestatehook/CalculaterUseState";
import RandomNumberUseStste from "./usestatehook/RandumNumberUseState";
import CountIncDecUseStste from "./usestatehook/CountIncreDecrem";
import CarPropertyUseState from "./usestatehook/CarPropertyChange";
import UseStateiflese from "./usestatehook/Concepttwoifelse";
import Array from "./usestatehook/ConceptArraythree";
import Object from "./usestatehook/ConceptObject";
import TodoArray from "./usestatehook/ConcepTodoArray";
import Memohook from "./usememohook/Usememo";
import Memo from "./usememohook/Memo";
import UseMemoHook from "./usememohook/UseMemoHook";
import Effecthook from "./useEffecthook/EffectHook";
import LayoutEffecthook from "./useLayoutEffect/UseLayoutEffect";
import MainEffecthook from "./useEffecthook/MainEffectHook";
import IfConditionEffect from "./useEffecthook/IfConditonEffecthook";
import DependencyListArray from "./useEffecthook/DependencyListArray";
import CleanupEffect from "./useEffecthook/CleanupUseEffect";
import FetchApiEffect from "./useEffecthook/FetchApiGithubuseEffectProject";
import FetchAPIComplet from "./useEffecthook/FetchAPIcompletProject/Useffect";
import UesRef from "./useRefhook/UesRefHook";
import Uncontrolled from "./useRefhook/UncontrolleduseRef";
import UseReducerExam1 from "./useReducerhook/UesReducerEx1";
import UseReducerEx2 from "./useReducerhook/useReducerEx2";
import No1propDrilling from "./useContextHook/no1propDrilling/ComA";
//Context API:- import React, { createContext } from "react";
// import No2ContextAPI from "./useContextHook/no1propDrilling/ComA";
// const FirstName = createContext();
import No3useContext from "./useContextHook/no3useContext/ComA";
import CustomHooks from "./OwnCustomHooks/CustomHooks";
import Ex2CustomHooks from "./OwnCustomHooks/ex2Customhok/Counter1";
import Ex2Custom from "./OwnCustomHooks/ex2Customhok/Counter2";
import UseCallBack from "./useCallback/UseCallback";
import ParentUseCallBack from "./useCallback/Parent";
import PropDrilling from "./components/prop_drilling/Parent";
import HigherOrder from "./components/higher_order_component/Main";
import RanderProps from "./components/RanderProps/Main";
import ParentComponent from "./passDataParentToChild/ChildToParent/ParentComponent";
import EXTwoParent from "./passDataParentToChild/Ex2ChildToParent/Parent";
import ParentCo from "./passDataParentToChild/ParentToChild.js/ParentCo";
import FetchUser from "./vvi-sameWork-butNotUsed-useEffect/FetchUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseState />} />
        <Route path="/MuiProjectuseState" element={<MuiProjectuseState />} />
        <Route path="/CountIncDecUseStste" element={<CountIncDecUseStste />} />
        <Route path="/FomeValidation" element={<FomeValidation />} />
        <Route path="/UseStateiflese" element={<UseStateiflese />} />
        <Route path="/CalculaterUseState" element={<CalculaterUseState />} />
        <Route path="/LikebuttonUseState" element={<LikebuttonUseState />} />
        <Route path="/LikeDeslikeUseState" element={<LikeDeslikeUseState />} />
        <Route
          path="/RandomNumberUseStste"
          element={<RandomNumberUseStste />}
        />
        <Route path="/CarPropertyUseState" element={<CarPropertyUseState />} />
        <Route path="/Array" element={<Array />} />
        <Route path="/Object" element={<Object />} />
        <Route path="/TodoArray" element={<TodoArray />} />
        <Route path="/Memohook" element={<Memohook />} />
        <Route path="/Memo" element={<Memo />} />
        <Route path="/UseMemoHook" element={<UseMemoHook />} />
        <Route path="/Effecthook" element={<Effecthook />} />
        <Route path="/LayoutEffecthook" element={<LayoutEffecthook />} />
        <Route path="/MainEffecthook" element={<MainEffecthook />} />
        <Route path="/IfConditionEffect" element={<IfConditionEffect />} />
        <Route path="/DependencyListArray" element={<DependencyListArray />} />
        <Route path="/CleanupEffect" element={<CleanupEffect />} />
        <Route path="/FetchApiEffect" element={<FetchApiEffect />} />
        <Route path="/FetchAPIComplet" element={<FetchAPIComplet />} />
        <Route path="/UesRef" element={<UesRef />} />
        <Route path="/Uncontrolled" element={<Uncontrolled />} />
        <Route path="/UseReducerExam1" element={<UseReducerExam1 />} />
        <Route path="/UseReducerEx2" element={<UseReducerEx2 />} />
        <Route path="/No1propDrilling" element={<No1propDrilling />} />

        {/*Context API:- <Route path="/No2ContextAPI">
          <FirstName.Provider value={"Ajit kumar"}>
            <No2ContextAPI />
          </FirstName.Provider>
        </Route> */}
        <Route path="/No3useContext" element={<No3useContext />} />
        <Route path="/CustomHooks" element={<CustomHooks />} />
        <Route path="/Ex2CustomHooks" element={<Ex2CustomHooks />} />
        <Route path="/Ex2Custom" element={<Ex2Custom />} />
        <Route path="/UseCallBack" element={<UseCallBack />} />
        <Route path="/ParentUseCallBack" element={<ParentUseCallBack />} />
        <Route path="/PropDrilling" element={<PropDrilling />} />
        <Route path="/HigherOrder" element={<HigherOrder />} />
        <Route path="/RanderProps" element={<RanderProps />} />
        <Route path="/ParentComponent" element={<ParentComponent />} />
        <Route path="/EXTwoParent" element={<EXTwoParent />} />
        <Route path="/ParentCo" element={<ParentCo />} />
        <Route path="/FetchUser" element={<FetchUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// export { FirstName };//Context API
