import React from 'react';
import { Activity, Clock } from 'lucide-react';

const RecentActivities: React.FC = () => {
  // This array will be replaced with actual user data later
  const placeholderActivities = [
    "Activity 1",
    "Activity 2",
    "Activity 3",
    "Activity 4",
    "Activity 5"
  ];

  return (
    <div className="ml-64 mt-16 h-[calc(100vh-4rem)] w-[calc(100vw-16rem)] bg-white overflow-auto">
      <div className="h-full w-full p-8 flex flex-col">
        <h1 className="text-3xl font-bold text-blue-600 mb-2 flex items-center">
          <Activity className="mr-2 h-8 w-8" />
          Recent Activities
        </h1>
        <p className="text-blue-500 mb-6">
          Your latest learning journey milestones
        </p>

        <div className="space-y-4">
          {placeholderActivities.map((activity, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-4 flex items-center shadow-sm">
              <Clock className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-blue-700">{activity/*Make this the real stat later*/}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
