const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (acc, currval) {
//   //reduce method me hamesa two value aata hai//acc ko pata hi nahi hai ki start kaha se karu
//   //console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0); //acc ko batane ke liye ki kaha se start karana hai isi liye value 0 diya hai

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 1299,
  },
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
