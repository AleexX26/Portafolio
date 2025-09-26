import React from 'react';
import { Progress } from './components/ui/progress';
import { Badge } from './components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { 
  Code, Palette, Code2, FileType, Globe, Server, Coffee, Bot, 
  Zap, Database, HardDrive, Clock, Users, Lightbulb, Target, 
  BarChart3, MessageSquare, Eye
} from 'lucide-react';

const iconMap = {
  Code, Palette, Code2, FileType, Globe, Server, Coffee, Bot,
  Zap, Database, HardDrive, Clock, Users, Lightbulb, Target,
  BarChart3, MessageSquare, Eye
};

const Skills = ({ skills }) => {
  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : <Code className="w-6 h-6" />;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical competencies and soft skills developed through education, projects, and professional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-slate-50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-slate-800">
                <Code className="w-8 h-8 mr-3 text-blue-600" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.technical.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-600">
                        {getIcon(skill.icon)}
                      </div>
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {skill.level}%
                    </Badge>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-slate-200"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-slate-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-slate-800">
                <Users className="w-8 h-8 mr-3 text-slate-600" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.soft.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="text-slate-600 bg-slate-100 p-2 rounded-full">
                      {getIcon(skill.icon)}
                    </div>
                    <span className="font-semibold text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-slate-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Technical Proficiency</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold">{skills.technical.length}</div>
                <div className="text-blue-100">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {Math.round(skills.technical.reduce((sum, skill) => sum + skill.level, 0) / skills.technical.length)}%
                </div>
                <div className="text-blue-100">Avg Proficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{skills.soft.length}</div>
                <div className="text-blue-100">Soft Skills</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2+</div>
                <div className="text-blue-100">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;