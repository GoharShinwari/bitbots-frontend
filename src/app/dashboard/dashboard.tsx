"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Topbar } from "../components/dashboard/Topbar";

const Dashboard: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>("dashboard");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={handleSectionChange} />
      <div className="flex flex-col flex-grow ml-64">
        <Topbar />
        <main className="flex-grow p-6 bg-gray-100">
        </main>
      </div>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  href: string;
  isLoaded: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, buttonText, buttonLink, href, isLoaded }) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col transition-transform duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
      <a
        href={href}
        className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Dashboard;
