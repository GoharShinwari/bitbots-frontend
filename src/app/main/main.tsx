"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Topbar } from "../components/dashboard/Topbar";
import Dashboard from "../components/dashboard/Dashboard";
import LearningStats from "../components/dashboard/learningStats";
import VirtualCodingCoach from '../components/dashboard/virtualCodingCoach';
import RecentActivities from '../components/dashboard/recentActivities';
import InteractiveQuizzes from '../components/dashboard/interactiveQuizzes';
import LearningResources from '../components/dashboard/learningResources';
import YourAchievements from '../components/dashboard/yourAchievements';
import Settings from '../components/dashboard/Settings';

const MainPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>("dashboard");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "dashboard":
        return <Dashboard />;
      case "learningStats":
        return <LearningStats />;
      case "virtualCodingCoach":
        return <VirtualCodingCoach />;
      case "recentActivities":
        return <RecentActivities />;
      case "interactiveQuizzes":
        return <InteractiveQuizzes />;
      case "learningResources":
        return <LearningResources />;
      case "yourAchievements":
        return <YourAchievements />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={handleSectionChange} />
        <Topbar onSelect={handleSectionChange} />
          {renderContent()}
    </div>
  );
};

export default MainPage;
