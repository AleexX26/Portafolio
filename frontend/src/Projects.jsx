import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { 
  Code, 
  ExternalLink, 
  Github, 
  Clock, 
  CheckCircle,
  Eye,
  Lightbulb,
  Rocket,
  Database,
  Globe
} from 'lucide-react';

const Projects = ({ projects }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'en desarrollo':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'completado':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'planificado':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'concepto':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'en desarrollo':
        return <Clock className="w-4 h-4" />;
      case 'completado':
        return <CheckCircle className="w-4 h-4" />;
      case 'planificado':
        return <Eye className="w-4 h-4" />;
      case 'concepto':
        return <Lightbulb className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'desarrollo web':
        return <Globe className="w-5 h-5" />;
      case 'sistemas de bases de datos':
        return <Database className="w-5 h-5" />;
      case 'automatización':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const handleProjectAction = (project) => {
    // Mock functionality for project interaction
    alert(`Funcionalidad para ${project.title} se implementará próximamente. Estado actual: ${project.status}`);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Portafolio de Proyectos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Una muestra de los proyectos en los que he trabajado y los que tengo planificados para continuar desarrollando mis habilidades
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-600 bg-blue-100 p-2 rounded-full">
                      {getCategoryIcon(project.category)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-slate-800 leading-tight">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-slate-500 mt-1">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  
                  <Badge className={getStatusColor(project.status)}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(project.status)}
                      <span className="text-xs">{project.status}</span>
                    </div>
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-2">Tecnologías:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-slate-50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 space-y-2">
                  <Button 
                    onClick={() => handleProjectAction(project)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    disabled={project.status === 'Concepto'}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {project.status === 'Concepto' ? 'En Planificación' : 'Ver Detalles'}
                  </Button>
                  
                  {project.status !== 'Concepto' && (
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 text-xs"
                        onClick={() => handleProjectAction(project)}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Código
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 text-xs"
                        onClick={() => handleProjectAction(project)}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Categories Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-800">Desarrollo Web</h4>
                <p className="text-slate-600 text-sm">
                  Aplicaciones web modernas con tecnologías actuales
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-800">Bases de Datos</h4>
                <p className="text-slate-600 text-sm">
                  Sistemas de gestión y análisis de datos eficientes
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-800">Automatización</h4>
                <p className="text-slate-600 text-sm">
                  Herramientas para optimizar procesos y workflows
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Statistics */}
        <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-600 to-slate-600 text-white">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Estadísticas del Portafolio</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold">{projects.length}</div>
                <div className="text-blue-100">Proyectos Total</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  {projects.filter(p => p.status === 'En desarrollo').length}
                </div>
                <div className="text-blue-100">En Desarrollo</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  {new Set(projects.flatMap(p => p.technologies)).size}
                </div>
                <div className="text-blue-100">Tecnologías</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  {new Set(projects.map(p => p.category)).size}
                </div>
                <div className="text-blue-100">Categorías</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;