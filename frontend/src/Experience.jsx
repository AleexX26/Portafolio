import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Building, 
  Calendar, 
  MapPin, 
  CheckCircle,
  Briefcase,
  GraduationCap,
  Users,
  Award
} from 'lucide-react';

const Experience = ({ experience }) => {
  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'prácticas':
        return <GraduationCap className="w-5 h-5" />;
      case 'investigación':
        return <Award className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'prácticas':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'investigación':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'tiempo parcial':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mi trayectoria profesional y las experiencias que han moldeado mis habilidades como desarrollador
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-blue-600 bg-blue-100 p-2 rounded-full">
                            <Building className="w-5 h-5" />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-bold text-slate-800">
                              {exp.position}
                            </CardTitle>
                            <h4 className="text-lg font-semibold text-blue-600 mt-1">
                              {exp.company}
                            </h4>
                          </div>
                        </div>
                        
                        <Badge className={getTypeColor(exp.type)}>
                          <div className="flex items-center space-x-1">
                            {getTypeIcon(exp.type)}
                            <span>{exp.type}</span>
                          </div>
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h5 className="font-semibold text-slate-800 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          Logros Principales
                        </h5>
                        <ul className="space-y-2 ml-6">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-600 to-slate-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Resumen de Experiencia</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">{experience.length}</div>
                  <div className="text-blue-100">Experiencias</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">6+</div>
                  <div className="text-blue-100">Meses Prácticas</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">2+</div>
                  <div className="text-blue-100">Años Activo</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-blue-100">Sectores</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;