import { MdCheckCircle, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checklist" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheckCircle />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
