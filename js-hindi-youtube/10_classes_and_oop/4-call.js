//isaka same concept/working inheritance kar raha hai
function SetUsername(username) {
  //complex DB calls
  this.username = username; //har function ka khud ka this hota hai
  console.log("called");
} //is method jo property ko set kiya tha // yah kam US me ho raha hai

function createUser(username, email, password) {
  //yah function user create karata hai
  SetUsername.call(this, username); //yaha se is-pisitali call kara rahe hai// call() method reference hold kar ke rakhata hai //(or)Yaha ka this alag hai this kya hai corrent context
  /*yeha pe  SetUsername method call ho raha hai or isake andar hi ho raha hai technically to yehi dekha tha ki isake andar call to access hona chahiye  */
  this.email = email; //Direct set kar diya email,password ko but username ko directely mat karo // yek kam karo ye "SetUsername" method call karo or yah method set kar ke dega username ko to yaha pe username ka access hona chahiye yaha pe
  this.password = password;
}

const Resu = new createUser("rama", "ram@fb.com", "123");
console.log(Resu);
