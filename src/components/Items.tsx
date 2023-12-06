import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { ITask } from "../interface";
import { useState } from "react";
import TodoItemsInput from "./TodoItemsInput";

type ItemsProps = {
  todo: ITask;
  deleteTask: (id: string) => void;
  updateTask: (id: string, newTask:string) => void;
  completeTask: (id: string) => void;
};

const Items = ({ todo, deleteTask,updateTask,completeTask }: ItemsProps) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const { id, task, isDone } = todo;
  if (isUpdate) {
    return (
      <TodoItemsInput
        todo={todo}
        updateTask={updateTask}
        setIsUpdate={setIsUpdate}
      />
    );
  }
  return (
    <li
    className={`${isDone? "bg-green-400": "bg-white"} w-2/3 p-2  border-2 rounded shadow-md flex justify-between `}
    >
      <div>{task}</div>
      <div className=" flex items-center gap-2 justify-center">
        <button onClick={() => setIsUpdate(!isUpdate)}>
          <HiOutlinePencilAlt />
        </button>
        <button onClick={() => deleteTask(id)}>
          <IoTrashOutline />
        </button>

        {!isDone && (
          <button onClick={() => completeTask(id)}>
            <MdDone />
          </button>
        )}
      </div>{" "}
    </li>
  );
};

export default Items;
