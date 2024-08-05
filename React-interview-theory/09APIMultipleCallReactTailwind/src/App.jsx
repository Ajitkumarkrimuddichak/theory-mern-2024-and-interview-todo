// (1) Type Call //******Background Loading And All Card or API Call one Time *******/
// import { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [allApiData, setAllApiData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchData = () => {
//     const FirstApi = "https://jsonplaceholder.typicode.com/posts";
//     const SecondApi = "https://jsonplaceholder.typicode.com/comments";
//     const ThirdApi = "https://jsonplaceholder.typicode.com/photos";

//     const getFirstApi = axios.get(FirstApi);
//     const getSecondApi = axios.get(SecondApi);
//     const getThirdApi = axios.get(ThirdApi);

//     axios
//       .all([getFirstApi, getSecondApi, getThirdApi])
//       .then(
//         axios.spread((firstRes, secondRes, thirdRes) => {
//           const firstData = firstRes.data;
//           const secondData = secondRes.data;
//           const thirdData = thirdRes.data.slice(0, 12);
//           const combinedData = [...firstData, ...secondData, ...thirdData];
//           setAllApiData(combinedData);
//           setIsLoading(false);
//         })
//       )
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div style={{ height: "90vh", overflowY: "scroll", padding: "20px" }}>
//       <h1 className="bg-green-400 text-center">
//         All API Call One Time And BackeGround Loading{" "}
//       </h1>
//       <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
//         {allApiData.map((item) => {
//           return (
//             <div className="p-4" key={item.id}>
//               <div className="rounded overflow-hidden shadow-lg bg-blue-100/15 transition duration-300 ease-in-out transform hover:scale-105">
//                 <div className="px-6 py-4">
//                   <div className="font-bold text-xl mb-2 text-center">
//                     {item.id}
//                   </div>
//                   {item.title && (
//                     <p className="text-red-700 text-base capitalize truncate">
//                       {item.title}
//                     </p>
//                   )}
//                   {item.name && (
//                     <p className="text-black uppercase">{item.name}</p>
//                   )}
//                   {item.email && (
//                     <p className="text-red-700 text-base truncate">
//                       {item.email}
//                     </p>
//                   )}
//                   {item.body && (
//                     <p className="text-green-500 capitalize truncate">
//                       {item.body}
//                     </p>
//                   )}
//                   {item.url && (
//                     <p className="text-red-700 text-base">{item.url}</p>
//                   )}
//                   {item.thumbnailUrl && (
//                     <p className="text-green-500">{item.thumbnailUrl}</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       {isLoading && (
//         <div
//           aria-label="Loading..."
//           role="status"
//           className="flex items-center justify-center space-x-2 text-center"
//         >
//           <svg
//             className="h-20 w-20 animate-spin stroke-green-500"
//             viewBox="0 0 256 256"
//           >
//             <line
//               x1="128"
//               y1="32"
//               x2="128"
//               y2="64"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="24"
//             />
//             <line
//               x1="195.9"
//               y1="60.1"
//               x2="173.3"
//               y2="82.7"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="24"
//             />
//             <line
//               x1="224"
//               y1="128"
//               x2="192"
//               y2="128"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="24"
//             ></line>
//             <line
//               x1="195.9"
//               y1="195.9"
//               x2="173.3"
//               y2="173.3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="24"
//             ></line>
//             <line
//               x1="128"
//               y1="224"
//               x2="128"
//               y2="192"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="24"
//             ></line>
//             <line
//               x1="60.1"
//               y1="195.9"
//               x2="82.7"
//               y2="173.3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="24"
//             ></line>
//             <line
//               x1="32"
//               y1="128"
//               x2="64"
//               y2="128"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="24"
//             ></line>
//             <line
//               x1="60.1"
//               y1="60.1"
//               x2="82.7"
//               y2="82.7"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="24"
//             ></line>
//           </svg>
//           <span className="text-4xl font-medium text-green-400">
//             Loading...
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

//*********Second Types *******/
//*(or)*** Second type of Calling API Conditin Apply 12 Data Show In UI Page  *****/
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [firstApi, setFirstApi] = useState([]);
  const [secondApi, setSecondApi] = useState([]);
  const [thirdApi, setThirdApi] = useState([]);

  const fetchData = () => {
    const FirstApi = "https://jsonplaceholder.typicode.com/posts";
    const SecondApi = "https://jsonplaceholder.typicode.com/comments";
    const ThirdApi = "https://jsonplaceholder.typicode.com/photos";

    const getFirstApi = axios.get(FirstApi);
    const getSecondApi = axios.get(SecondApi);
    const getThirdApi = axios.get(ThirdApi);

    axios.all([getFirstApi, getSecondApi, getThirdApi]).then(
      axios.spread((...alldata) => {
        const allgetfirst = alldata[0].data;
        const allgetsecond = alldata[1].data;
        const allgetthired = alldata[2].data;

        setFirstApi(allgetfirst.slice(0, 4));
        setSecondApi(allgetsecond.slice(0, 4));
        setThirdApi(allgetthired.slice(0, 4));
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1 className="bg-red-500 text-center">
          All API Calling and the Background Loading and UI Page Show Loading...
          Spiner And Condition Apply 12 Cards Show in Page
        </h1>
        <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
          {firstApi.map((post1) => {
            const { id, title, body } = post1;

            return (
              <div className="p-4" key={id}>
                <div className="rounded overflow-hidden shadow-lg bg-blue-100/15 transition duration-300 ease-in-out transform hover:scale-105">
                  <div className="px-6 py-4">
                    <img
                      className="w-full h-30 object-cover rounded-xl"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"
                      alt="Static image not API image"
                    />
                    <div className="font-bold text-xl mb-2 text-center">
                      {id}
                    </div>
                    <p className="text-red-700 text-base capitalize truncate">
                      {title}
                    </p>
                    <p className="text-green-500 capitalize truncate">{body}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Render cards from secondApi */}
          {secondApi.map((post2) => {
            const { id, name, email, body } = post2;
            return (
              <div className="p-4" key={id}>
                <div className="rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 bg-yellow-100">
                  <div className="px-6 py-4">
                    <img
                      className="w-full h-30 object-cover rounded-xl"
                      src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
                      alt="Static image not API image"
                    />
                    <div className="font-bold text-xl mb-2 text-center">
                      {id}
                    </div>
                    <p className="text-black uppercase">{name}</p>
                    <p className="text-red-700 text-base  truncate">{email}</p>
                    <p className="text-green-500 capitalize truncate">{body}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Render cards from thirdApi */}
          {thirdApi.map((post3) => {
            const { id, title, url, thumbnailUrl } = post3;

            return (
              <div className="p-4" key={id}>
                <div className="rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 bg-green-100">
                  <div className="px-6 py-4">
                    <img
                      className="w-full h-30 object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                      alt="Static image not API image"
                    />
                    <div className="font-bold text-xl mb-2 text-center">
                      {id}
                    </div>
                    <p className="text-black capitalize truncate">{title}</p>
                    <p className="text-red-700 text-base">{url}</p>
                    <p className="text-green-500">{thumbnailUrl}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          aria-label="Loading..."
          role="status"
          className="flex items-center justify-center space-x-2 text-center"
        >
          <svg
            className="h-20 w-20 animate-spin stroke-green-500"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
          </svg>
          <span className="text-4xl font-medium text-green-400">
            Loading...
          </span>
        </div>
      </div>
    </>
  );
};

export default App;
