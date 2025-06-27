import React, { useState } from "react";
import EditProfileModal from "./EditProfileModal";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [user, setUser] = useState({
    name: "Hardika Tandel",
    email: "abc@email.com",
    photo: "https://i.pravatar.cc/150?img=45"
  });

  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)} className=" bg-gray-100 flex items-center gap-4 cursor-pointer p-3 rounded-full">
        
        <img src={user.photo} className="w-8 h-8 rounded-full" alt="avatar" />
        <span>{user.name}</span>
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded-lg border z-10">
          <div className="p-4 text-center">
            <img src={user.photo} className="w-16 h-16 rounded-full mx-auto" />
            <h2 className="font-bold mt-2">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            <button
              className="mt-2 text-blue-500 underline"
              onClick={() => {
                setEditOpen(true);
                setOpen(false);
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}

      {editOpen && (
        <EditProfileModal
          user={user}
          onClose={() => setEditOpen(false)}
          onSave={(updatedUser) => {
            setUser(updatedUser);
            setEditOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ProfileDropdown;
