class student {
  constructor(name, age, cls) {
    this.myname = name;
    this.myage = age;
    this.mycls = cls;
  }
  biodata() {
    return `Hi I am is ${this.myname}. I am ${this.myage}. your old ${this.mycls}`;
  }
}
class player extends student {
  constructor(name, age, cls, game) {
    super(name, age, cls);
    this.mygame = game;
  }
  play_biodata() {
    return `${super.biodata()}. I am player of ${this.mygame}`;
  }
}
let obj1 = new player("Ajit", 25, "cse", "footboll");
console.log(obj1.play_biodata());
