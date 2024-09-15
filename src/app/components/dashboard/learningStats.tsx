import { Book, Clock, Award, Star, Target, Zap, TrendingUp, Brain, Briefcase } from 'lucide-react';

interface StatItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const LearningStats: React.FC = () => {
  const stats: StatItem[] = [
    { name: 'Courses Completed', icon: Book },
    { name: 'Learning Time', icon: Clock },
    { name: 'Achievements', icon: Award },
    { name: 'Average Score', icon: Star },
    { name: 'Challenges Solved', icon: Zap },
    { name: 'Current Streak', icon: TrendingUp },
    { name: 'Goals Met', icon: Target },
    { name: 'Projects Made', icon: Briefcase },
  ];

  return (
    <div className="ml-64 mt-16 h-[calc(100vh-4rem)] w-[calc(100vw-16rem)] bg-white overflow-auto">
      <div className="h-full w-full p-8 flex flex-col">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">
          Learning Stats
        </h1>
        <p className="text-blue-500 mb-6">
          Track your progress and celebrate your achievements!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div key={item.name} className="bg-blue-50 rounded-lg p-6 flex flex-col items-center shadow-md">
              <item.icon className="h-10 w-10 text-blue-600 mb-3" />
              <p className="text-lg font-semibold text-blue-700 mb-1">
                -- {/*Make this the real stat later*/}
              </p>
              <p className="text-sm text-blue-600 text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningStats;
