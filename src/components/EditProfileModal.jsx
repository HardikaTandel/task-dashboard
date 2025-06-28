import React, { useState } from "react";

const EditProfileModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.email.trim()) return;
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4 ">Edit Profile</h2>

        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 p-6 border rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          name="photo"
          type="text"
          placeholder="Photo URL"
          value={formData.photo}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-white bg-red-500 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-6 py-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
