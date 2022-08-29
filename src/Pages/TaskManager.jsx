import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import TaskItem from "../components/TaskItem";
import { useTaskContext } from "../Context/TaskContext";

// const getTasksFromLocalStorage = () => {
//     // get tasks from local storage
//     const tasks = localStorage.getItem("tasks")
//     if (!tasks) return []
//     return JSON.parse(tasks)
// }

function TaskManager() {
  const { tasks, setValue } = useTaskContext();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTask = {
      id: uuid(),
      text: input,
      completed: false,
    };

    setValue(newTask);
    setInput("");
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setValue(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);

  //Map run through the items in the arrays, map returns array but loop
  return (
    <div className="h-screen bg-blue-600 flex justify-center items-center">
      <div className="max-w-xl bg-white rounded-xl px-5 py-10 max-h-96">
        <form
          onSubmit={handleSubmit}
          className="space-x-4 w-[30rem] mb-10 flex"
        >
          <input
            type="text"
            className="border-2 w-10/12 border-blue-400 p-2 rounded-md outline-none"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <button
            type="submit"
            className=" bg-blue-600 hover:bg-green text-lg py-2 px-5 rounded-md"
            disabled={""}
          >
            Add
          </button>
        </form>
        <div className="space-y-2 overflow-y-auto h-56">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
