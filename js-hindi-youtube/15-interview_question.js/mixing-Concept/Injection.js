/*
What is Injections in js :- In JavaScript, "injections" typically refer to 
two main concepts depending on the context: dependency injection and 
code injection.

1). Dependency Injection (DI):- Dependency injection is a design pattern 
used to implement inversion of control (IoC) in software architecture. 
In JavaScript, this pattern is commonly used in frameworks like AngularJS, 
Angular, and Vue.js, among others.

2). Code Injection:- Code injection refers to a security vulnerability 
where an attacker can insert and execute malicious code within a running 
application. It's not a practice encouraged in legitimate development 
but is a known attack vector in insecure applications.
*/

//Ex:-
// Example of dependency injection in a Node.js application
class UserService {
  getUsers() {
    return ["User1", "User2", "User3"];
  }
}

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  listUsers() {
    return this.userService.getUsers();
  }
}

const userService = new UserService();
const userController = new UserController(userService);

console.log(userController.listUsers()); // Outputs: ['User1', 'User2', 'User3']
