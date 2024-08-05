import { useState, useEffect } from "react";

function Searchdatajson() {
  const [userData, setUserData] = useState([]); // State for storing user data
  const [filterData, setFilterData] = useState([]); // State for storing filtered data
  const [query, setQuery] = useState(""); // State for search query

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserData(data); // Set original user data
        setFilterData(data); // Set filter data with original data initially
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchString = event.target.value.toLowerCase();
    setQuery(searchString); // Update query state

    if (searchString.length > 0) {
      const filteredData = filterData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchString) ||
          item.email.toLowerCase().includes(searchString) ||
          item.username.toLowerCase().includes(searchString)
      );
      setUserData(filteredData); // Update userData state with filtered data
    } else {
      setUserData(filterData); // Reset userData to original data when search query is empty
    }
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col-md-12 mt-3 mb-3">
          <h3 className="mb-3">Search User Data</h3>
          <div className="col-md-6">
            <input
              type="text"
              name="search"
              value={query}
              className="form-control"
              onChange={(e) => handleSearch(e)}
              placeholder="Search by name, email, or username..."
            />
          </div>
        </div>

        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Searchdatajson;
