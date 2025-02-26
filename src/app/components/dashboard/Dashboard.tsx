import React, { useState } from "react";
import { BarChart2, Book, Trophy, Rocket, BookOpenText } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";  


import Courses from "../courses/Courses";
import InteractiveQuizzes from "./interactiveQuizzes";
import LearningResources from "./learningResources";
import LearningStats from "./learningStats";
import RecentActivities from "./recentActivities";
import Settings from "./Settings";
import VirtualCodingCoach from "./virtualCodingCoach";
import YourAchievements from "./yourAchievements";


const Dashboard: React.FC = () => {
  const [user] = useState<any>({ childName: "Test User" });
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const [stats] = useState([
    { name: "Courses Started", value: 0, icon: Book },
    { name: "Coding Challenges Attempted", value: 0, icon: Trophy },
    { name: "Minutes Practiced", value: 0, icon: BarChart2 },
  ]);

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-full">
        <Topbar onSelect={setSelectedSection} />
        <div className="flex flex-1">
          
      
      <Sidebar onSelect={setSelectedSection} />

      <div className="ml-64 mt-16 h-[calc(100vh-4rem)] w-[calc(100vw-16rem)] bg-white overflow-hidden">
        <div className="h-full w-full p-6 flex flex-col">
          
            {selectedSection === "dashboard" && (
            <>
              <h1 className="text-3xl font-bold text-blue-600 mb-2">
                Welcome to BitBots, {user.childName || "Young Coder!"}!
              </h1>
              <p className="text-blue-500 mb-6">
                We're excited to have you on board. Let's continue your coding journey!
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
                  Continue Your Learning Journey
                </h2>
                <p className="text-blue-600 mb-4">
                  Pick up where you left off or start a new course!
                </p>
                <button
                  onClick={() => setSelectedSection("courses")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                >
                  Explore Courses
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
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
                    Read Stories
                    <BookOpenText className="ml-2 h-4 w-4" />
                  </button>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-blue-700 mb-2">
                    Update Your Goals
                  </h2>
                  <p className="text-blue-600 mb-4">
                    Review and adjust your learning objectives to stay on track.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
                    Update Goals
                    <Rocket className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          )}

          {selectedSection === "courses" && <Courses />}

          {selectedSection === "virtualCodingCoach" && <VirtualCodingCoach />}

          {selectedSection === "interactiveQuizzes" && <InteractiveQuizzes />}

          {selectedSection === "learningResources" && <LearningResources />}

          {selectedSection === "recentActivities" && <RecentActivities />}

          {selectedSection === "learningStats" && <LearningStats />}

          {selectedSection === "yourAchievements" && <YourAchievements />}

          {selectedSection === "settings" && <Settings />}

        </div>
      </div>
      
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
