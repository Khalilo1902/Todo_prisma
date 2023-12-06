import { useState } from "react";
import { ITask } from "../interface";
import ObjectID from "bson-objectid";

type TodoFormProps = {
  addNewTask: (newTask: ITask) => void;
};

const TodoForm = ({ addNewTask }: TodoFormProps) => {
  const [name, setName] = useState("");


  const handleAddTask = ()=>{
    const newTask:ITask = {
        id:ObjectID().toHexString(),
        task:name,
        isDone:false
    }
    addNewTask(newTask)
    setName("")
  }

  
  return (
    <div className=" flex items-center justify-center mt-10 gap-2">
      <div className="">
        <input
        onChange={(e)=>setName(e.target.value)}
          value={name}
          type="text"
          placeholder=" Add task"
          className=" border border-gray-300 outline outline-none bg-gray-100 text-black rounded py-1"
        />
      </div>
      <div>
        <button
          onClick={()=>handleAddTask()}
          className=" bg-green-500 px-4 py-1 text-white rounded shadow-md"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
