// Not using debouncing | useCallback
/*import { useState } from "react";
const OneDebounc = () => {
  const [search, setSearch] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSearch(json.data.items));
  };

  return (
    <div>
      <input
        type={"text"}
        name={"search"}
        placeholder={"Enter Something..."}
        className={"search"}
        onChange={handleChange}
      />
      {search.length > 0 && (
        <div className={"autocomplete"}>
          {search?.map((el, i) => {
            <div key={i} className={"autocompleteItems"}>
              <span>{el.name}</span>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default OneDebounc;*/

//using debouncing | useCallback
import { useCallback, useState } from "react";
const OneDebounc = () => {
  const [search, setSearch] = useState([]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (event) => {
    const { value } = event.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSearch(json.data.items));
  };

  const optimisedVersion = useCallback(debounce(handleChange), []);

  return (
    <div>
      <input
        type={"text"}
        name={"search"}
        placeholder={"Enter Something..."}
        className={"search"}
        onChange={optimisedVersion}
      />
      {search.length > 0 && (
        <div className={"autocomplete"}>
          {search?.map((el, i) => {
            <div key={i} className={"autocompleteItems"}>
              <span>{el.name}</span>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default OneDebounc;
