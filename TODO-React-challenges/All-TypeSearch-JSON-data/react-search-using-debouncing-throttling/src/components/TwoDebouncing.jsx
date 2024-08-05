//Second aproach using debouncing search data name base
import { useState, useEffect } from "react";
const TwoDebouncing = () => {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 300); // Delay in milliseconds

    return () => clearTimeout(delayDebounceFn);
  }, [searchName]);

  const handleSearch = () => {
    const foundUser = users.find(
      (u) => u.name.toLowerCase() === searchName.toLowerCase()
    );
    setUser(foundUser || null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter user name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 mr-2"
        />
        {/* No need for onClick event handler on button */}
        <button className="bg-blue-500 text-white p-2">Search</button>
      </div>
      {user ? (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
          <h2 className="text-xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-700">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Street: {user.address.street}</li>
            <li>Suite: {user.address.suite}</li>
            <li>City: {user.address.city}</li>
            <li>Zipcode: {user.address.zipcode}</li>
          </ul>
        </div>
      ) : (
        <p>No user found with name {searchName}</p>
      )}
    </div>
  );
};

export default TwoDebouncing;
