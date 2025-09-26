import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  User, 
  MapPin, 
  Calendar, 
  Award, 
  Target,
  Heart,
  BookOpen,
  Code,
  Users,
  Lightbulb
} from 'lucide-react';

const About = ({ personalInfo, additionalInfo, languages }) => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Capacidad de Análisis",
      description: "Habilidad para descomponer problemas complejos y encontrar soluciones eficientes."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trabajo en Equipo",
      description: "Experiencia colaborando en equipos multidisciplinarios y proyectos diversos."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Toma de Decisiones",
      description: "Capacidad para tomar decisiones rápidas y efectivas bajo presión."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pasión por la Tecnología",
      description: "Motivación constante por aprender nuevas tecnologías y mejorar habilidades."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conoce más sobre mi trayectoria, motivaciones y lo que me impulsa como desarrollador
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bio */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-slate-800">
                  <User className="w-8 h-8 mr-3 text-blue-600" />
                  Mi Historia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {personalInfo.bio}
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    Mi Enfoque
                  </h4>
                  <p className="text-slate-600">
                    Me caracterizo por mi enfoque metódico y mi capacidad para mantener la calma bajo presión. 
                    Creo firmemente en el poder del aprendizaje continuo y la colaboración efectiva para 
                    crear soluciones tecnológicas que realmente marquen la diferencia.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-blue-600" />
                    Mi Visión
                  </h4>
                  <p className="text-slate-600">
                    Aspiro a desarrollar aplicaciones que no solo cumplan con los requisitos técnicos, 
                    sino que también proporcionen experiencias excepcionales a los usuarios. Mi objetivo 
                    es crecer como desarrollador full-stack y contribuir a proyectos innovadores.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="shadow-md border-0 bg-white hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-600 bg-blue-100 p-3 rounded-full">
                        {highlight.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-slate-600 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Personal Details */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-800">
                  Datos Personales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-slate-500" />
                  <span className="text-slate-700">{personalInfo.location}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-slate-500" />
                  <span className="text-slate-700">{additionalInfo.drivingLicense}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-slate-500" />
                  <span className="text-slate-700">Disponible</span>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-800">
                  Idiomas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium text-slate-700">{language.name}</span>
                    <Badge 
                      variant={language.level === 'Nativo' ? 'default' : 'secondary'}
                      className={language.level === 'Nativo' ? 'bg-blue-600' : 'bg-slate-200 text-slate-700'}
                    >
                      {language.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-slate-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg">Disponibilidad</h4>
                  <p className="text-blue-100 text-sm">
                    {additionalInfo.availability}
                  </p>
                  <p className="text-blue-100 text-sm">
                    {additionalInfo.relocate}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;