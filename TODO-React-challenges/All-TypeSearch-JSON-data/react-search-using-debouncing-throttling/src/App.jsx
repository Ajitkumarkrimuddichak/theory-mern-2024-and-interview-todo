/*Note:- Using useCallback with Debounce and Throttle :-
1) To implement debouncing and throttling in a React component, we can use the useCallback 
hook to memoize the debounced or throttled function. 

Note :- How to achive Debounce and Throttle in React.js :- setTimeout(),clearTimeout(), useEffect() hook to direct achive /
useCallback(),useMemo(). Actual me Debounce and Throttle kab used me laya jata hai.
Ex:- Search Box me koi bhi users kuchh search kar raha hai to ber-ber oh type kar raha 
latter to ber-ber unnecessary functoion call hota jara raha hai isase website ka performance
degrade hota hai.Ham chahate hai ki user koi bhi items search kare to pura types karane 
ke 1ms bad call ho function to is functionality ko achive  Debounce and Throttle se karate hai

2) useCallback/useMemo Both are same work, Debounce and Throttle to achive.

i) Debounce :- Debouncing ensures that a function is executed only after a specified amount
of time has passed since it was last called. This is useful to limit the rate at which a 
function can fire.

ii) Throttle:- Throttling ensures that a function is executed at most once in a specified 
period of time. This is useful to ensure a function is called at regular intervals.

iii) Different useCallback/useMemo :- useCallback hook memoized function return.
useMemo hook memoized value return


*/

import "./index.css";
// import OneDebounc from "./components/OneDebounc";
// import TwoDebouncing from "./components/TwoDebouncing";
import ThirdDebounc from "./components/ThirdDebounc";
const App = () => {
  return (
    <>
      <h1 className="ajit">Ajit</h1>
      {/* <OneDebounc /> */}
      {/* <TwoDebouncing /> */}
      <ThirdDebounc />
    </>
  );
};

export default App;
