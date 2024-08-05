/*What is HOC:- A Higher-Order Component (HOC) is a function that takes a component 
and returns a new component. 
*/

import ListComp from "./ListComp";
import WithCollapse from "./WithCollapse";
const EnhancedList = WithCollapse(ListComp);

const JsonData = () => {
  const movies = [
    { id: 1, name: "Ajit" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Sita" },
    { id: 4, name: "Sayam" },
  ];
  const users = [
    { id: 1, name: "Ajit kumar" },
    { id: 2, name: "Ram kumar" },
    { id: 3, name: "Sita kumari" },
    { id: 4, name: "Sayam kumar" },
  ];

  return (
    <>
      {/* This is Normal List Component */}
      <ListComp items={movies} Title="Movies List" />
      <hr />
      {/* This is HOC  Enhanced List*/}
      <EnhancedList items={users} Title="Users List" />
    </>
  );
};

export default JsonData;
