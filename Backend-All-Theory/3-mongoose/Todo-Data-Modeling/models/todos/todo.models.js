//Todo ke andar sub todo
import mongoose from "mongoose"; // mongoose help karata hai schema banane me

const todoSchema = new mongoose.Schema(
  //Schema yek method hai jo ki one object leta hai
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      //Kisi bhi module/todo ka reference dena parata hai
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      //one box ke andar hi to subTodo rahenage to kaise rahenge Array me
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], // Array of Sub-Todos
  },
  { timeseries: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
// Not:- Jab tak export nahi hoga to schema nahi banayega or schema kaha banayega. mongodb ke anadar banayega
