const socket = io(); //Automatic request chala jayega backend pe.backend to same hi hai dono ke liye, Aapake mobile/laptop se backend pe request gai or hamare se bhi gai request

//(1)frontent se bhej rahe hai "emit" used kar ke. backend pe
socket.emit("World");

//(2)Backend se data aa raha hai to frontent pe sabhi ko recive hoga
socket.on("Sab ke Pass data lejao", function () {
  console.log("Sab ke Pass data lejao recived");
});

/* How to working process:-
1) first student and second student 
Like first student message kiya to first server recived karega or fir second student ko milega message 

2) multiples users hai to server one hi hota hai, server message forword kaise karata hai.
actually server pe control hamara hota hai, kise message forword karana hai or kisako nahi 
Like:- group chat , persnoal chat one way communication , konsa persion typing kar raha usako chhor ke sabhi ko bhej do 

3) hamesa frontend se hi data bhejate hai
*/
