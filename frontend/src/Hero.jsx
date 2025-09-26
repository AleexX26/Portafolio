import React from 'react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';

const Hero = ({ personalInfo }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Mock CV download functionality
    alert('CV download functionality would be implemented here');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                Available for Opportunities
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                {personalInfo.name}
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-600">
                  {personalInfo.role}
                </h2>
                <div className="flex items-center text-slate-500">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline"
                onClick={downloadCV}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>{personalInfo.email}</span>
              </a>
              
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>{personalInfo.phone}</span>
              </a>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-700">
                      {personalInfo.role}
                    </h3>
                    <p className="text-slate-500">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;