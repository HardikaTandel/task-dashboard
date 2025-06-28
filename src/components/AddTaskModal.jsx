import React, { useState } from "react";

const AddTaskModal = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title.trim() === "") return;
    onAdd({ title, description, completed: false });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-md">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Task Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border p-2 mb-3 rounded"
          placeholder="Description"
          rows="3"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-white px-4 py-2 bg-red-500 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-7 py-2 rounded">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
