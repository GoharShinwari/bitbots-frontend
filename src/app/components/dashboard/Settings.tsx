import React, { useState } from 'react';
import { User, Mail, Lock, Bell, Globe, Moon, Save } from 'lucide-react';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="ml-64 mt-16 h-[calc(100vh-4rem)] w-[calc(100vw-16rem)] bg-white overflow-auto">
      <div className="h-full w-full p-8 flex flex-col">
        <h1 className="text-3xl font-bold text-blue-600 mb-2 flex items-center">
          <User className="mr-2 h-8 w-8" />
          Account Settings
        </h1>
        <p className="text-blue-500 mb-6">
          Manage your account preferences and settings
        </p>

        <div className="space-y-6 max-w-2xl">
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <Mail className="mr-2 h-6 w-6" />
              Email Address
            </h2>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <Lock className="mr-2 h-6 w-6" />
              Change Password
            </h2>
            <input
              type="password"
              placeholder="Old password"
              className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <input
              type="password"
              placeholder="New password"
              className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <Bell className="mr-2 h-6 w-6" />
              Notifications
            </h2>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-blue-700">Receive email notifications</span>
            </label>
          </div>


          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <Moon className="mr-2 h-6 w-6" />
              Dark Mode
            </h2>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-blue-700">Enable dark mode</span>
            </label>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;