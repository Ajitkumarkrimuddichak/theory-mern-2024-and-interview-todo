document.getElementById("btn").addEventListener("click", makerequest);

// function makerequest() {
//   console.log("Button Clicked");
//   const fetchReturnPromise = fetch("data.txt"); //fetch ka first parameter source hota hai ki data kaha se lana hai //Syntex:- fetch(url, [options]).then(response => {// handle the response }).catch(error => {// handle the error });
//   console.log(fetchReturnPromise); //Yaha pe promise initial stage par hai to panding stage kahalata hai. nahi fulfill hua hai or nahi reject hua hai

//   /*jaise hi isame  "fetchReturnPromise"  promise me "then" lagayenge or jo response hoga vah dega "then" me.
//   or fir response me se data nikalenge // "then" me two callback function hota hai. first callback resolve hone pe execuite hota hai
//   or jo dusara callback reject hone pe call hota hai
//   */
//   fetchReturnPromise
//     .then((res) => {
//       //first resopnse me readiable string milata hai or fir second "then" laga ke Data ko nikala jata hai
//       console.log(res); //request body me jo bhi hai usame se text representation hame chahiye.
//       return res.text(); //text me value lena hai to text() method ko used karana hoga.
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

/*function makerequest() {
  console.log("Button Clicked");
  fetch("data.txt")
    .then((res) => {
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log(data);
    });
}*/

// Promise Then | Error handling
/*function makerequest() {
  console.log("Button Clicked");
  fetch("data.txt")
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

// Promise Then | Showing Data in Browser
/*function makerequest() {
  console.log("Button Clicked");
  fetch("data.txt")
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("divdata").innerText = data;
    })
    .catch((error) => {
      console.log(error);
    });
}*/

// Async and Await
// async function makerequest() {
//  console.log("Button Clicked")
//  const res = await fetch('data.txt')
//  console.log(res)
//  const data = await res.text()
//  console.log(data)
// }

// Async and Await | Error handling
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await fetch('data1.txt')
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   console.log(res)
//   const data = await res.text()
//   console.log(data)
//  } catch (error) {
//   console.log(error)
//  }
// }

// Async and Await | Showing Data in Browser
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await fetch('data.txt')
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   console.log(res)
//   const data = await res.text()
//   console.log(data)
//   document.getElementById("divdata").innerText = data
//  } catch (error) {
//   console.log(error)
//  }
// }
