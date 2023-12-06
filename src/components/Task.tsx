import { ITask } from "../interface";
import Items from "./Items";

type ITaskProps = {

  tasks: ITask[]; 
  deleteTask: (id: string) => void
  updateTask: (id: string, newTask:string) => void
  completeTask: (id: string) => void
};

const Task = ({ tasks,deleteTask,updateTask,completeTask}: ITaskProps) => {
  return (
    <ul className="flex flex-col items-center py-10 gap-2">
      {
        tasks.map((task)=>(
            <Items key={task.id} todo={task} deleteTask={deleteTask} updateTask={updateTask} completeTask={completeTask}/>
        ))
      }
    </ul>
  );
};

export default Task;
