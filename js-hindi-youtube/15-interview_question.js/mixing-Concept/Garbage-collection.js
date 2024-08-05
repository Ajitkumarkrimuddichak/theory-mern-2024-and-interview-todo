/*What is Garbage collection :-An automatic memory management that relieves you
from doing memory management. it destroys those objects which are of 
no use now
*/
//Ex:-
function createObjects() {
  // Creating an object and assigning it to variable obj1
  let obj1 = {
    name: "Object 1",
  };

  // Creating another object and assigning it to variable obj2
  let obj2 = {
    name: "Object 2",
  };

  // Assigning obj1 to obj2, making obj1 and obj2 reference the same object
  obj2 = obj1;

  // Now the object initially assigned to obj2 is no longer referenced
  // It becomes eligible for garbage collection

  // Function scope ends here, obj1 and obj2 go out of scope
  // The object referenced by obj1 and obj2 becomes eligible for garbage collection
}

createObjects();

// At this point, the objects created inside createObjects are no longer reachable
// They are eligible for garbage collection
