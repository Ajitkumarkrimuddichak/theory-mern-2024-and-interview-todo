document.getElementById("btn").addEventListener("click", makerequest);

// Promise Then
/*function makerequest(e) {
  e.preventDefault();
  let name = document.getElementById("name").value; //value likhane ka matalab hai ki user jo bhi input karega vah data lena hai or axios ke thu server me save karana hai
  let job = document.getElementById("job").value;
  console.log("Button Clicked");
  const config = {
    method: "POST",
    url: "https://reqres.in/api/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ name: name, job: job }), //yaha pe jo filed hai oh same api url me jo field ka name or job hai
  };
  axios(config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

// Async and Await
async function makerequest(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  try {
    console.log("Button Clicked");
    const config = {
      method: "POST",
      url: "https:/posts/1",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ name: name, job: job }),
    };
    const res = await axios(config);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
