class Basic {
  sum1(a, b) {
    return a + b;
  }
  sum2(a, b, c) {
    return a + b + c;
  }
  sub(a, b) {
    return a - b;
  }
}
let obj1 = new Basic();
let Total_sum = obj1.sum1(10, 20);
console.log(Total_sum);
var Total_sum2 = obj1.sum2(10, 20, 30);
console.log(Total_sum2);
console.log(obj1.sub(30, 5));
