import { Home, BarChart, Settings } from "lucide-react"; 
import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-blue-600">BitBots</h2>
      </div>
      <nav className="mt-6 flex flex-col space-y-4">
        <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50">
          <Home className="mr-3" /> Dashboard
        </a>
        <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50">
          <BarChart className="mr-3" /> Learning Stats
        </a>
        <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50">
          <Settings className="mr-3" /> Settings
        </a>
      </nav>
    </div>
  );
};
