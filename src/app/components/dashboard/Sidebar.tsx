import { Home, BarChart, Settings, User, List, School, Book, Trophy } from "lucide-react";
import React from "react";

interface SidebarProps {
  onSelect: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  return (
  <div className="fixed top-0 left-0 w-64 bg-white shadow-lg h-full flex flex-col z-20">
      <div className="px-6 py-4">
        <h2 className="text-4xl font-bold text-blue-600">BitBots</h2>
      </div>
      <nav className="mt-6 flex flex-col space-y-4">
        <a
          onClick={() => onSelect("dashboard")}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
        >
          <Home className="mr-3" /> Dashboard
        </a>
        <a
          onClick={() => onSelect("virtualCodingCoach")}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
        >
          <User className="mr-3" /> Virtual Coding Coach
        </a>
        <a
          onClick={() => onSelect("interactiveQuizzes")}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
        >
          <School className="mr-3" /> Interactive Quizzes
        </a>
        <a
          onClick={() => onSelect("learningResources")}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
        >
          <Book className="mr-3" /> Learning Resources
        </a>
        <a
          onClick={() => onSelect("recentActivities")}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
        >
          <List className="mr-3" /> Recent Activities
        </a>
        <a
          onClick={() => onSelect("learningStats")}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
        >
          <BarChart className="mr-3" /> Learning Stats
        </a>
        <a
          onClick={() => onSelect("yourAchievements")}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
        >
          <Trophy className="mr-3" /> Your Achievements
        </a>
        <a
          onClick={() => onSelect("settings")}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
        >
          <Settings className="mr-3" /> Settings
        </a>
      </nav>
    </div>
  );
};
