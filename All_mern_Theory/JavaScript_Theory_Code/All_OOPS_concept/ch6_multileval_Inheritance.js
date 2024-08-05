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
class grandson extends son {
  showGMoney() {
    return "Grendson money";
  }
}
var g = new grandson();
console.log(g.showFMoney());
console.log(g.showSMoney());
console.log(g.showGMoney());
