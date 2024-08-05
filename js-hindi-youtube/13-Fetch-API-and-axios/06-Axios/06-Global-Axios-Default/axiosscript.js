document.getElementById("btn").addEventListener("click", makerequest);

// Global Axios Default //auth token har bar jayega chahe Get/Post request ho.//server me jayega //auth token:- authenticate a user or service. It acts as a credential that provides access to a system
axios.defaults.headers.common["Authorizationajit"] =
  "sdfkjsdhfjk32423432jkhjshfd342387fdsf";

// Get Request
/*function makerequest() {
  console.log("Button Clicked");
  axios("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      console.log("Data:", res.data);
      console.log("ID:", res.data.id);
      console.log("Title:", res.data.title);
      console.log("Body:", res.data.body);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

// Post Request
function makerequest() {
  console.log("Button Clicked");
  const config = {
    method: "POST",
    url: "https://reqres.in/api/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: '{ "name": "Soni", "job": "Web Dev" }',
  };
  axios(config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));
}
