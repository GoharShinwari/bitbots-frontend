import { Sidebar } from "../components/dashboard/Sidebar";
import { Topbar } from "../components/dashboard/Topbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Topbar />
        <main className="flex-grow p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Welcome to BitBots Dashboard</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DashboardCard
                title="Your Learning Stats"
                description="Track your progress and see how far you've come in your coding journey."
                buttonText="View Stats"
                buttonLink="#"
              />
                <DashboardCard
                title="Virtual Coding Coach"
                description="Chat with your virtual coding coach for help, tips, and fun challenges!"
                buttonText="Talk to Coach"
                buttonLink="#"
              />
              <DashboardCard
                title="Recent Activities"
                description="Check what you've been working on lately and pick up where you left off."
                buttonText="View Activities"
                buttonLink="#"
              />
              <DashboardCard
                title="Interactive Quizzes"
                description="Test your coding knowledge with fun and interactive quizzes."
                buttonText="Take Quiz"
                buttonLink="#"
              />
              <DashboardCard
                title="Learning Resources"
                description="Access a wealth of tutorials, documentation, and learning materials."
                buttonText="Explore Resources"
                buttonLink="#"
              />

              <DashboardCard
                title="Your Achievements"
                description="See the badges and certificates you've earned on your coding journey."
                buttonText="View Achievements"
                buttonLink="#"
              />
            </div>
          </div>
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
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
      <Link href={buttonLink}>
        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default Dashboard;