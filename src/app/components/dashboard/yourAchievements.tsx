import React from 'react';
import { Trophy, Lock } from 'lucide-react';

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
}

const YourAchievements: React.FC = () => {
  const achievements: Achievement[] = [
    { id: 1, name: "Hello, World!", description: "Write your first line of Python code", icon: "👋" },
    { id: 2, name: "Math Magician", description: "Play with numbers and make Python do math", icon: "🔢" },
    { id: 3, name: "Decision Maker", description: "Use if statements to help Python make choices", icon: "🤔" },
    { id: 4, name: "Loop Lover", description: "Create loops to make Python repeat tasks", icon: "🔁" },
    { id: 5, name: "Bug Buster", description: "Learn to fix coding mistakes and become a bug hunter", icon: "🐞" },
    { id: 6, name: "Quiz Creator", description: "Build a fun quiz game to challenge your friends", icon: "🎮" },
    { id: 7, name: "List Juggler", description: "Juggle multiple items with Python lists", icon: "📋" },
    { id: 8, name: "Dictionary Diva", description: "Organize information using Python dictionaries", icon: "📚" },
    { id: 9, name: "File Saver", description: "Learn to save and load work in files", icon: "💾" },
    { id: 10, name: "Function Fanatic", description: "Make your own Python tools called functions", icon: "🧰" },
    { id: 11, name: "Module Master", description: "Discover and use Python modules", icon: "📦" },
    { id: 12, name: "Library Explorer", description: "Explore awesome Python libraries and their features", icon: "🔎" },
    { id: 13, name: "Class Creator", description: "Create your own digital objects with classes", icon: "🏗️" },
    { id: 14, name: "Method Magician", description: "Give your objects cool abilities with methods", icon: "🔧" },
    { id: 15, name: "Inheritance Expert", description: "Learn about inheritance in object-oriented programming", icon: "🌳" },
    { id: 16, name: "Adventure Architect", description: "Design a text adventure game with your new skills", icon: "📜" },
    { id: 17, name: "Function Wizard", description: "Create and use complex functions", icon: "✨" },
    { id: 18, name: "Loop Legend", description: "Master loops to automate repetitive tasks", icon: "🔄" },
    { id: 19, name: "Conditional Connoisseur", description: "Implement advanced decision-making with if statements", icon: "🧠" },
    { id: 20, name: "List Legend", description: "Utilize lists to their full potential", icon: "📑" },
    { id: 21, name: "Dictionary Dynamo", description: "Use dictionaries to manage complex data", icon: "🔑" },
    { id: 22, name: "Text Tactician", description: "Manipulate text and work with Python strings", icon: "✍️" },
    { id: 23, name: "File Handler", description: "Create, read, and write to files in Python", icon: "📂" },
    { id: 24, name: "Module Maven", description: "Understand and apply Python modules effectively", icon: "📚" },
    { id: 25, name: "Library Leader", description: "Leverage powerful Python libraries", icon: "🚀" },
    { id: 26, name: "Object Oriented Oracle", description: "Apply object-oriented programming principles", icon: "🧩" },
    { id: 27, name: "Class Crafter", description: "Build and use classes in creative ways", icon: "🏆" },
    { id: 28, name: "Method Maestro", description: "Design methods to enhance object functionality", icon: "🎯" },
    { id: 29, name: "Inheritance Innovator", description: "Use inheritance to build scalable code", icon: "🔗" },
    { id: 30, name: "Game Developer", description: "Create interactive and engaging text-based games", icon: "🎮" },
    { id: 31, name: "Sidebar Explorer", description: "Navigate through all sections in the sidebar", icon: "🧭" },
    { id: 32, name: "Stats Savvy", description: "View and analyze your learning stats", icon: "📊" },
    { id: 33, name: "Coach Connector", description: "Engage with the Virtual Coding Coach", icon: "🤖" },
    { id: 34, name: "Recent Activities Ranger", description: "Review your recent activities", icon: "🗂️" },
    { id: 35, name: "Quiz Master", description: "Complete all interactive quizzes", icon: "🏆" },
    { id: 36, name: "Resource Reader", description: "Browse and utilize learning resources", icon: "📚" },
    { id: 37, name: "Settings Specialist", description: "Customize your settings", icon: "⚙️" },
    { id: 38, name: "Achievement Hunter", description: "Unlock all achievements available", icon: "🏅" }
  ];

  return (
    <div className="ml-0 mt-0 h-[calc(100vh-4rem)] w-[calc(100vw-16rem)] bg-white overflow-auto">
      <div className="h-full w-full p-8 flex flex-col">
        <h1 className="text-3xl font-bold text-blue-600 mb-2 flex items-center">
          <Trophy className="mr-2 h-8 w-8 text-blue-600" />
          Your Achievements
        </h1>
        <p className="text-blue-500 mb-6">
          Unlock these achievements as you progress through your coding journey!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-blue-50 rounded-lg p-4 shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="relative mb-2">
                <div className="text-4xl opacity-50">{achievement.icon}</div>
                <Lock className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-700 mb-1">{achievement.name}</h3>
              <p className="text-xs text-blue-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourAchievements;
