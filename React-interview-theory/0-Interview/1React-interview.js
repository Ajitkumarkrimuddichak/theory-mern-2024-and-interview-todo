/*(2) Those three Lifecycle in a functional based components in React.js
:-In React functional components, you can use hooks to handle lifecycle 
events similar to those in class components. The three primary lifecycle 
phases

1. Mounting: When the component is first added to the DOM.
2. Updating: When the component is re-rendered due to state or prop changes.
3. Unmounting: When the component is removed from the DOM.
*/

//(i) component did mount
// useEffect(() =>{
// },[]);

//(ii) component Updates
// useEffect(()=>{
// },[user]);

//(iii) Unmounting
// useEffect(()=>{
//   return(()=>{
//   })
// },[]);

// Ex:- Mounting
/*import React, { useEffect } from 'react';
const MountingExample = () => {
  useEffect(() => {
    console.log('Component mounted');

    // Cleanup function
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array ensures this runs only once

  return <div>Mounting Example</div>;
};
export default MountingExample;*/

//Ex:-Updating
/*import React, { useState, useEffect } from 'react';
const UpdatingExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component updated');

    // Optional cleanup function
    return () => {
      console.log('Component will update or unmount');
    };
  }, [count]); // This effect runs whenever `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default UpdatingExample;*/

//Ex:- Unmounting
/*import React, { useEffect } from 'react';
const UnmountingExample = () => {
  useEffect(() => {
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array ensures this runs only once

  return <div>Unmounting Example</div>;
};
export default UnmountingExample;*/

// Full Example :-
/*import React, { useState, useEffect } from 'react';
// This is the main component that demonstrates the lifecycle phases
const LifecycleExample = () => {
  const [count, setCount] = useState(0);

  // useEffect to handle component mounting
  useEffect(() => {
    console.log('Component mounted');

    // Cleanup function to handle component unmounting
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // useEffect to handle component updates
  useEffect(() => {
    console.log('Component updated');

    // Optional cleanup function to handle component updates and unmounting
    return () => {
      console.log('Component will update or unmount');
    };
  }, [count]); // This effect runs whenever `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default LifecycleExample;*/
