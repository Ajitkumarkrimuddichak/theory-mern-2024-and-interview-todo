// import { useFetch } from "../useFetch";

// const url = "https://jsonplaceholder.typicode.com/posts";

// const ThirdDebounc = () => {
//   const { posts, loading } = useFetch(url);

//   return (
//     <div>
//       <h4>Use Case of useCallback</h4>
//       {loading ? (
//         <h4>Loading...</h4>
//       ) : (
//         posts.map((item) => <h5 key={item.id}>{item.title}</h5>)
//       )}
//     </div>
//   );
// };
// export default ThirdDebounc;

//Second concept search
import { useState } from "react";
import { useFetch } from "../useFetch";
const url = "https://jsonplaceholder.typicode.com/posts";
const ThirdDebounc = () => {
  const { posts, loading } = useFetch(url);
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPosts = posts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h4>Use Case of useCallback</h4>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search posts"
        className="border p-2 rounded mb-4"
      />
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        filteredPosts.map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}
    </div>
  );
};

export default ThirdDebounc;
