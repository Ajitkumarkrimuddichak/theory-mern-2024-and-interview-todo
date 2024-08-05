import React from "react";

const jsonData = [
  {
    name: "Menu 1",
    like: "http://google.com",
    subitems: [
      {
        name: "menu 2",
        like: "http://google.com",
      },
    ],
  },
  {
    name: "Menu 3",
    like: "http://google.com",
    subitems: [
      {
        name: "menu 4",
        like: "http://google.com",
        subitems: [
          {
            name: "menu 5",
            like: "http://google.com",
          },
          {
            name: "menu 6",
            like: "http://google.com",
          },
        ],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div>
      {jsonData.map((menuItem, index) => (
        <MenuItem key={index} menuItem={menuItem} />
      ))}
    </div>
  );
};

function MenuItem({ menuItem }) {
  const { name, like, subitems } = menuItem;

  return (
    <div>
      <p>{name}</p>
      <p>{like}</p>
      {subitems && subitems.length > 0 && (
        <ul>
          {subitems.map((subitem, index) => (
            <MenuItem key={index} menuItem={subitem} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;
