/* What is Session Storage in js :- The Session storage is a read only property of Window 
object. It stored data in a web browser Specifically to the domain and Protocol for a 
Particula Session. It doesn't get sent to the server. Data Strand in Sessions Storage gets
cleared when the page session ends. 

(or) Session Storage is a web storage API in JavaScript that allows you to store key-value 
pairs in the browser. Unlike cookies, the data is stored only for the duration of the page 
session. This means that data is available as long as the browser tab is open. Once the 
tab is closed, the data is lost.

*/

// [Syntax: window. SessionStorage]

// Methods :-
// SetItem (key, value) :- It allows to add a key/value. pair to the Storage obrect. If the key already exists, the name value will overwrite the old value.
// getItem(key) :- It returns the value of the item that is set with the given key.
// key (n) :- It returns the key of the item in the Storage Object at the nth index which con be useful for looping.
// removeItem (key) :- It removes the item in the storage Obaect with the given key.

// Ex:-
sessionStorage.setItem("user", "Ajitkumar");
console.log(sessionStorage);
console.log(sessionStorage.getItem("user"));
console.log(sessionStorage.key(0));
console.log(sessionStorage.removeItem("email"));
