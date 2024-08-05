/* What is Factory Function :- Factory function returns an Object. It can produce Object 
instance without new keyword or Class.

Note :- Before Calling & After calling Possible.
*/

// Ex:-
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    student: function () {
      console.log(`Name ${this.name} Years  ${this.age}`);
    },
  };
}
const person1 = createPerson("Ajit", 26);
person1.student();
