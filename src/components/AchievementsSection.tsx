import React from 'react';

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Recognition
          </h2>
          <div className="h-1 w-12 bg-gray-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 animate-floatIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3 tracking-tight">
                {achievement.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
