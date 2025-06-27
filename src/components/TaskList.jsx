import React, { useState } from "react";
import { FaCheckSquare, FaEdit, FaTrash } from "react-icons/fa";
import EditTaskModal from "./EditTaskModal";

const TaskList = ({ tasks, setTasks }) => {
  const [editTask, setEditTask] = useState(null);

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleSave = (updatedTask) => {
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
    setEditTask(null);
  };

  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex justify-between items-start p-4 mb-2 rounded ${task.completed ? "bg-gray-100" : "bg-white border"}`}
        >
          <div className="flex gap-2 items-start">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              className="mt-1"
            />
            <div>
              <p className={`font-medium ${task.completed ? "line-through text-gray-500" : ""}`}>{task.title}</p>
              <p className="text-sm text-gray-500">{task.description}</p>
            </div>
          </div>
          <div className="flex gap-6">
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
            <button onClick={() => setEditTask(task)} className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
          </div>
        </div>
      ))}

      {editTask && (
        <EditTaskModal
          task={editTask}
          onSave={handleSave}
          onClose={() => setEditTask(null)}
        />
      )}
    </div>
  );
};

export default TaskList;
