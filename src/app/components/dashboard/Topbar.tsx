import React from "react";
import { Bell, User, Settings } from "lucide-react";

export const Topbar: React.FC = () => {
  return (
<div className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-white shadow-lg flex justify-between items-center px-6 py-4 z-10">
    <div className="text-2xl font-bold text-blue-600"></div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center">
          <Bell size={20} />
        </button>
        <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center">
          <User size={20} />
        </button>
        <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};
