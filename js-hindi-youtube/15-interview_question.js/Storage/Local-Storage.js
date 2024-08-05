/* What is Local Storage in js :- The localstorage is a read only Property of window Object. 
It Stores data in a  Web browser specifically to the domain and Protocol.It doesn't get 
send to the server as it is stored locally in the web browser with no expiration date. 
The data will not be deleted when the browser is closed and re-opened. 
*/

// [Syntax:- Window.localStorage]

// Methods :-
// SetItem (key, Value) :- It allows to add a key/value Pair to the Storage Object. If the key already exists, the name. Value, will overwrite the old value.
// getItem(key) :- It returns the Value of the item that is set with the given key.
// key(n) :- It returns the key of the item in the Storage Obrect at the nth indesx. which can be useful for looping.
// removeItem (key) :- It removes the item in the storage Object with the given key.

// Ex:-
window.localStorage.setItem("user", "Ajit Kumar");
window.localStorage.setItem("email", "ajitkumar@gmail.com");
console.log(localStorage);
console.log(localStorage.getItem("email"));
console.log(localStorage.key(0));
localStorage.removeItem("email");
localStorage.clear();
