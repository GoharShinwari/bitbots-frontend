import React from "react";
import { Bell, User } from "lucide-react"; 

export const Topbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-white border-b shadow-md flex justify-between items-center px-6 py-4">
      <div className="text-xl font-semibold text-blue-600">BitBots Dashboard</div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-blue-600">
          <Bell size={24} />
        </button>
        <button className="p-2 text-gray-600 hover:text-blue-600">
          <User size={24} />
        </button>
      </div>
    </div>
  );
};
