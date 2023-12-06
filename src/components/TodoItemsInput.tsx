import { FaSave } from "react-icons/fa";
import { ITask } from "../interface";
import { useState } from "react";

type TodoInputProps = {
  todo: ITask;
  updateTask: (id: string, newTask: string) => void;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};
const TodoItemsInput = ({ todo, updateTask, setIsUpdate }: TodoInputProps) => {
  const [newName, setNewName] = useState<string>(todo.task);

  const handleUpdate = () => {
    updateTask(todo.task, newName);
    setIsUpdate(false);
  };

  return (
    <li
      className={` w-2/3 p-2  border-2 rounded shadow-md flex justify-between `}
    >
      <input
        value={newName}
        className="border border-gray-300 outline outline-none bg-gray-100 text-black rounded py-1"
        type="text"
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleUpdate}>
        <FaSave />
      </button>
    </li>
  );
};

export default TodoItemsInput;
