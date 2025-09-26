import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  GraduationCap, 
  Calendar, 
  BookOpen, 
  Award,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

const Education = ({ education, courses }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'en curso':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'completado':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'en curso':
        return <Clock className="w-4 h-4" />;
      case 'completado':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Formación Académica
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mi trayectoria educativa y los conocimientos adquiridos a lo largo de mi formación
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formal Education */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
                Educación Formal
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={edu.id} className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-blue-600 bg-blue-100 p-3 rounded-full">
                            <GraduationCap className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-slate-800 leading-tight">
                              {edu.degree}
                            </CardTitle>
                            <h4 className="text-lg font-semibold text-blue-600 mt-2">
                              {edu.institution}
                            </h4>
                          </div>
                        </div>
                        
                        <Badge className={getStatusColor(edu.status)}>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(edu.status)}
                            <span>{edu.status}</span>
                          </div>
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <Badge variant="outline" className="text-slate-600">
                          {edu.type}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      {edu.status === 'En curso' && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center space-x-2 text-blue-700">
                            <Star className="w-4 h-4" />
                            <span className="font-medium">Actualmente cursando</span>
                          </div>
                          <p className="text-blue-600 text-sm mt-1">
                            Desarrollando competencias en tecnologías modernas de desarrollo
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Courses & Certifications */}
          <div className="space-y-8">
            {/* Courses */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-800 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                  Cursos Complementarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="text-blue-600 mt-1">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium leading-relaxed">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education Stats */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-slate-600 text-white">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-4 text-center">Resumen Académico</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Títulos</span>
                    <span className="font-bold text-xl">{education.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Cursos</span>
                    <span className="font-bold text-xl">{courses.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Años estudiando</span>
                    <span className="font-bold text-xl">4+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">En progreso</span>
                    <span className="font-bold text-xl">
                      {education.filter(edu => edu.status === 'En curso').length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Focus */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-slate-800">Enfoque Actual</h4>
                  <p className="text-slate-600 text-sm">
                    Desarrollando competencias avanzadas en desarrollo de aplicaciones web y multiplataforma
                  </p>
                  <div className="flex justify-center">
                    <Badge className="bg-green-600 text-white">
                      Doble Titulación en Curso
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;