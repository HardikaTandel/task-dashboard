import React, { useState } from "react";

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = () => {
    if (title.trim()) {
      onSave({ ...task, title, description });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          placeholder="Task Title"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Task Description"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-gray-500">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
