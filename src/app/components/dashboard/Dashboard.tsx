import React, { useState } from "react";
import { ArrowRight, BarChart2, Book, Trophy, Rocket } from "lucide-react";

const Dashboard: React.FC = () => {
  const [username, setUsername] = useState("User");

  const stats = [
    { name: "Courses Started", value: 0, icon: Book },
    { name: "Coding Challenges Attempted", value: 0, icon: Trophy },
    { name: "Minutes Practiced", value: 0, icon: BarChart2 },
  ];

  return (
    <div className="ml-64 mt-16 h-[calc(100vh-4rem)] w-[calc(100vw-16rem)] bg-white overflow-hidden">
      <div className="h-full w-full p-6 flex flex-col">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">
          Welcome to BitBots, {username}!
        </h1>
        <p className="text-blue-500 mb-6">
          We&apos;re excited to have you on board. Let&apos;s start your coding journey!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((item) => (
            <div key={item.name} className="bg-blue-50 rounded-lg p-4 flex items-center">
              <item.icon className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <p className="text-sm font-medium text-blue-600">{item.name}</p>
                <p className="text-2xl font-semibold text-blue-700">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-100 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Start Your Learning Journey
          </h2>
          <p className="text-blue-600 mb-4">
            Choose your first course and begin your adventure in coding!
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
            Explore Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Get Inspired by Success Stories
            </h2>
            <p className="text-blue-600 mb-4">
              Read about individuals who have achieved great things through coding and get motivated.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Read Stories
            </button>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Set Your Goals
            </h2>
            <p className="text-blue-600 mb-4">
              Define your learning objectives to personalize your experience.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
              Set Goals
              <Rocket className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
