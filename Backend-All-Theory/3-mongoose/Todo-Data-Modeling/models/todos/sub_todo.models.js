// Sub todo
import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
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
      type: mongoose.Schema.Types.ObjectId, //itana likhane se koi na koi reference dene vale ho kisi or module ka
      ref: "User",
    },
  },
  { timeseries: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
