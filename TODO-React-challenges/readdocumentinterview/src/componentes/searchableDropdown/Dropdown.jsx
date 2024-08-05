import { useState, useEffect } from "react";

const Dropdown = ({ data }) => {
  const [items, setItems] = useState(data);
  const [text, setText] = useState("");

  useEffect(() => {
    const filteredItem = items.filter((item) => {
      const lowerCaseText = text.toLowerCase();
      return (
        item.subjectName.toLowerCase().includes(lowerCaseText) ||
        item.id.toLowerCase().includes(lowerCaseText) ||
        item.desc.toLowerCase().includes(lowerCaseText)
      );
    });
    text ? setItems(filteredItem) : setItems(data);
  }, [text]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <ul>
        {items.map((item, id) => (
          <li key={id}>
            <span>{item.subjectName}</span>
            <br />
            <span>{item.id}</span>
            <br />
            <span>{item.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
