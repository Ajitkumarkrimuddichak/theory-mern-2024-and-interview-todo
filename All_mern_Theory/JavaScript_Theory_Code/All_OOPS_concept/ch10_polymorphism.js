class Animal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    console.log(this.name + " Eats Food");
  }
}
class Magarmachh extends Animal {
  eats() {
    super.eats();
    console.log(this.name + " Eats Fishes");
  }
}
let obj1 = new Magarmachh("cat");
obj1.eats();
