/* HOC Convert to same Hook "CustomeHook" used 
Note :-This Project HOC and custem Hook used
*/

import ListComp from "./ListComp";
import useCollapse from "./useCollapse";
import WithCollapse from "./WithCollapse";
const EnhancedList = WithCollapse(ListComp);

const JsonData = () => {
  const { showList, toggleList } = useCollapse();
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
      <div onClick={toggleList}>
        <span> Movies List </span>
      </div>
      {showList && <ListComp items={movies} Title="Movies List" />}
      <hr />

      <EnhancedList items={users} Title="Users List" />
    </>
  );
};

export default JsonData;
