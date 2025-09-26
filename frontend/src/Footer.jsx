import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Heart, Code } from 'lucide-react';

const Footer = ({ personalInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{personalInfo.name}</h3>
            <p className="text-slate-300 leading-relaxed">
              Desarrollador apasionado por crear soluciones tecnológicas innovadoras. 
              Siempre buscando nuevos desafíos y oportunidades de crecimiento.
            </p>
            <div className="flex items-center text-slate-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block text-slate-300 hover:text-white transition-colors duration-200"
              >
                Sobre Mí
              </a>
              <a 
                href="#skills" 
                className="block text-slate-300 hover:text-white transition-colors duration-200"
              >
                Habilidades
              </a>
              <a 
                href="#experience" 
                className="block text-slate-300 hover:text-white transition-colors duration-200"
              >
                Experiencia
              </a>
              <a 
                href="#education" 
                className="block text-slate-300 hover:text-white transition-colors duration-200"
              >
                Formación
              </a>
              <a 
                href="#projects" 
                className="block text-slate-300 hover:text-white transition-colors duration-200"
              >
                Proyectos
              </a>
              <a 
                href="#contact" 
                className="block text-slate-300 hover:text-white transition-colors duration-200"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-3" />
                <span>{personalInfo.email}</span>
              </a>
              
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-3" />
                <span>{personalInfo.phone}</span>
              </a>
              
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4 mr-3" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-slate-400">
              <span>© {currentYear} {personalInfo.name}. Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center text-slate-400">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 mx-2 text-red-500" />
              <span>y</span>
              <Code className="w-4 h-4 mx-2 text-blue-400" />
              <span>en Madrid</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;