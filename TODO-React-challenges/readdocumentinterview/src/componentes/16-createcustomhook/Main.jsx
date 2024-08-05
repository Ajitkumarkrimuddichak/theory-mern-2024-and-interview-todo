import useFetch from "./useFetch";

function Main() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const { response, error, loading } = useFetch(API_URL);

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {response && response.map((user) => <p>{user.name}</p>)}
      {error && <div>{error.message}</div>}
    </div>
  );
}

export default Main;
