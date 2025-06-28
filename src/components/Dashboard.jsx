import React, { useState } from "react";
import StatsCards from "./StatsCards";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = {
    total: tasks.length,
    pending: tasks.filter(t => !t.completed).length,
    approved: tasks.filter(t => t.completed).length,
    
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
    setIsModalOpen(false);
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <StatsCards stats={stats} />

      <div className="mt-8">
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Task
        </button>
      </div>

      <TaskList tasks={tasks} setTasks={setTasks} />

      {isModalOpen && (
        <AddTaskModal
          onAdd={handleAddTask}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
};

export default Dashboard;
