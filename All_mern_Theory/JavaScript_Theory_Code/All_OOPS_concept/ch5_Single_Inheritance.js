class father {
  showFMoney() {
    return "father Money";
  }
}
class son extends father {
  showSMoney() {
    return "son Money";
  }
}
var s = new son();
console.log(s.showFMoney());
console.log(s.showSMoney());
