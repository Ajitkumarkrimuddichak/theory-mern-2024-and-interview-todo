import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Ajitkumarkrimuddichak")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 p-4 text-3xl bg-black text-white">
      Github Followers:{data.following}
      <div className="bg-green-100 flex flex-row">
        {[...Array(6)].map((_, index) => (
          <img
            key={index}
            className="rounded-3xl"
            src={data.avatar_url}
            alt="Git Picture"
            width={218}
          />
        ))}
      </div>
    </div>
  );
};

export default Github;
