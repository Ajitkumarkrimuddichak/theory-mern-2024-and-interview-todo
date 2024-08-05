//second step me createReducer() banate hai
// yaha pe redux-toolkit reducer banta hai oh thora alag hota hai kaise kyo ki yaha pe createSlice
import { createSlice, nanoid } from "@reduxjs/toolkit"; //siraf one method chahiye jo aapako  "createSlice"  bana dega / "nanoid" method unique id generate karata hai

const initialState = {
  //store ke andar initala state ki store stating me kaisa dikhega
  todos: [{ id: 1, text: "Hello world" }], //one state hai jisake andar one value rakha joki object hai
};

//one Slice banaya hai/slice kya hai all most yek Reducer ka yek bara version hai/Reducer kya hai yek functionality hai
export const todoSlice = createSlice({
  //createSlice is method ke andar jada tar object hi aayega
  name: "todo", //Property ka name hai joki redux-toolkit me hai
  initialState, //Har slice ka one initialState hota hai/multiple slice bhi bana sakate hai
  reducers: {
    //yehi reducers bana hai or isame aati hai property or function
    addTodo: (state, action) => {
      //two chijho ka access milata hai or in dono ka access hamesa rahega aap ke pass me (1)kam me kaise lete hai state :- state variable hamesa access dega ki abhi mera initialState/state ke anadar kya-kya value hai un sabhi ko access dega (2) action :-kai bar kuch value aaye jaise remove ID jab removeTodo method ko call karunga to us value hame action se milata hai
      //addTodo mera one property hai or isake anadar kya aata hai function or nahi to aap function ko upar bhi bana sakate hai to fir reference dena hoga niche / nahi to yahi likh do function ko
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    //Update Todo
  },
});

//Individually functionally ko export kiya or kam me lenge
export const { addTodo, removeTodo } = todoSlice.actions;

//is store ko bhi awareness/janakari chahiye  in sare reducer ke bare me agar isako awareness nahi hai to store ko menten nahi kar payega kyo ki yah yek rekas-tekativ store hai ki mai sabhi se value le ke store nahi kar sakata hu mere me jo-jo reducer register karoge uan se value ko leke update karunga
export default todoSlice.reducer;
