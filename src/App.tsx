import { useEffect, useState } from "react";

import { ITask } from "./interface";
import TodoForm from "./components/TopForm";
import Task from "./components/Task";
import axios from "axios";

const App = () => {
  const [tasks, setTask] = useState<ITask[]>([
    // {
    //   id: "1",
    //   task: " numberOne",
    // },
    // {
    //   id: "2",
    //   task: " numberTow",
    // },
    // {
    //   id: "3",
    //   task: " numberThree",
    // },
  ]);

  
  const fetchData = async()=>{
    try {
      const res = await axios.get('http://localhost:4008/api/task/display');
      if(res.data && res.data.length> 0) {
        setTask(res.data);
      }else {
        setTask([]);
      }
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  const deleteTask = async(id: string) => {
     await axios.delete(`http://localhost:4008/api/task/delete/${id}`).then(()=> fetchData())
     return id
  };

  const addNewTask = (newTask: ITask) => {
    axios.post('http://localhost:4008/api/task/create',{task: newTask.task}).then(()=> fetchData())
  };

  const completeTask = (id: string) => {
    axios.put('http://localhost:4008/api/task/update/'+id, {isDone: true}).then(()=> fetchData())
    // const task = tasks.find((t) => t.id === id);
    // if (task) {
    //   const completedTask = {
    //     ...task,
    //     isDone: true,
    //   };
    //   const filterTask = tasks.filter((t) => t.id !== id);
    //   const updateTodoTask = [...filterTask, completedTask];
    //   setTask(updateTodoTask);
    // }
  };

  const updateTask = (id: string, newTask: string) => {
    axios.put('http://localhost:4008/api/task/update/'+id, {task: newTask}).then(()=> fetchData())
    // const task = tasks.find((t) => t.id === id);
    // if (task) {
    //   const completedTask = {
    //     ...task,
    //     name:newTask
    //   };
    //   const filterTask = tasks.filter((t) => t.id !== id);
    //   const updateTodoTask = [...filterTask, completedTask];
    //   setTask(updateTodoTask);
    // }
  };

  return (
    <div>
      <TodoForm addNewTask={addNewTask} />
      <Task  tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} completeTask = {completeTask} />
    </div>
  );
};

export default App;
