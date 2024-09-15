import React from "react";
import { ArrowRight, FileText, Activity, History, Brain, Award, Code } from "lucide-react";

interface QuizCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  action: string;
}

interface StatItem {
  name: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
}

const InteractiveQuizzes: React.FC = () => {
  const quizCards: QuizCard[] = [
    { title: "Start a Quiz", description: "Dive into a range of quizzes tailored to different topics and skill levels. Test your knowledge and learn as you go.", icon: Brain, action: "Start Quizzes" },
    { title: "Practice Exercises", description: "Engage with additional practice exercises to reinforce what you&apos;ve learned and build your coding skills.", icon: Code, action: "Practice Now" },
    { title: "Review History", description: "Review past quizzes to see how you&apos;ve performed and revisit questions to better understand the material.", icon: History, action: "View History" },
  ];

  const stats: StatItem[] = [
    { name: "Quizzes Completed", value: 0, icon: Award },
    { name: "Correct Answers", value: 0, icon: FileText },
    { name: "Minutes Practiced", value: 0, icon: Activity },
  ];

  return (
    <div className="ml-64 mt-16 h-[calc(100vh-4rem)] w-[calc(100vw-16rem)] bg-white overflow-auto">
      <div className="h-full w-full p-6 flex flex-col">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">
          Interactive Quizzes
        </h1>
        <p className="text-blue-500 mb-6">
          Challenge yourself with interactive quizzes designed to test and improve your coding skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((item) => (
            <div key={item.name} className="bg-blue-50 rounded-lg p-4 flex items-center shadow-md">
              <item.icon className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <p className="text-sm font-medium text-blue-600">{item.name/*Make this the real stat later*/}</p> 
                <p className="text-2xl font-semibold text-blue-700">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quizCards.map((card, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div>
                <card.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-semibold text-blue-700 mb-3">
                  {card.title}
                </h2>
                <p className="text-blue-600 mb-6">
                  {card.description}
                </p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
                {card.action}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveQuizzes;
