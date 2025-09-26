import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Mail, Phone, Linkedin } from 'lucide-react';

const Header = ({ personalInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-slate-800">
              Alejandro Sobrino
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
              className="flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-800 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-slate-600 hover:text-blue-600 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t flex flex-col space-y-3">
                <Button
                  variant="outline"
                  onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
                  className="flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(`tel:${personalInfo.phone}`, '_blank')}
                  className="flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(personalInfo.linkedin, '_blank')}
                  className="flex items-center justify-center space-x-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;