import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  // Mini model Designe kiya only for isi me used karana hai
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
}); //is schema ka khali itana kam hai ki order ka  structure defined karane me help karega

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema], // ye bhi aproach se kar sakate hai nahi to Todo me jo aproach hai oh bhi kar sakate hai
    },
    address: {
      //isaka bhi  alag schema bana sakate hai or field bana sakate hai
      type: String,
      required: true,
    },
    status: {
      //user ka yesa control nahi dena chahate ki DELIVERED ka speling kuchh bhi likhe
      type: String, //String kaha se chuj karana hai yah mai bataunga//Pura restriction field banaya hai
      enum: ["PENDING", "CANCELLED", "DELIVERED"], //order ka state hai //enum ke matalab hai choices
      default: "PENDING", //ise mikasing required field hai ki jo choice karana hai isi me se karana hai
    }, //jab bhi order create hoga to isi three me se hoga.
  },
  { timeseries: true }
);

export const Order = mongoose.model("Order", orderSchema);
