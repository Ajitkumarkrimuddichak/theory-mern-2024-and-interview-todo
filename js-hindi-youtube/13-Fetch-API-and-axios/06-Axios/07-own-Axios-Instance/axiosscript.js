document.getElementById("btn").addEventListener("click", makerequest);

//my own Axios Instance create kiya hai
const ai = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // isana ke jagah pe 'ai' likh sakate hai
}); //object create kiya

// Get Request
function makerequest() {
  console.log("Button Clicked");
  ai("/posts/1")
    .then((res) => {
      console.log("Data:", res.data);
      console.log("ID:", res.data.id);
      console.log("Title:", res.data.title);
      console.log("Body:", res.data.body);
    })
    .catch((error) => {
      console.log(error);
    });
}

// function makerequest() {
//   console.log("Button Clicked")
//   ai('/posts/')
//     .then((res) => {
//       console.log("Data:", res.data)
//     }).catch((error) => { console.log(error) })
// }
