import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin,
  MessageSquare
} from 'lucide-react';

const Contact = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Contacto
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto interesante o una oportunidad laboral? Ponte en contacto conmigo
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Email</h3>
                <p className="text-slate-600">Envíame un correo electrónico</p>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-blue-600 break-all">
                    {personalInfo.email}
                  </p>
                  <Button 
                    onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Teléfono</h3>
                <p className="text-slate-600">Llámame para una conversación</p>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-green-600">
                    {personalInfo.phone}
                  </p>
                  <Button 
                    onClick={() => window.open(`tel:${personalInfo.phone}`, '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LinkedIn */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-slate-800">LinkedIn</h4>
                  <p className="text-slate-600 mb-3">Conecta conmigo profesionalmente</p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open(personalInfo.linkedin, '_blank')}
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Ver Perfil
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-slate-50 to-slate-100">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-slate-800">Ubicación</h4>
                  <p className="text-slate-600 mb-3">Mi ubicación actual</p>
                  <p className="text-slate-700 font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-600 to-slate-600 text-white">
            <CardContent className="p-8">
              <div className="max-w-3xl mx-auto space-y-6">
                <MessageSquare className="w-16 h-16 mx-auto text-blue-100" />
                <h3 className="text-2xl font-bold">
                  ¿Listo para colaborar?
                </h3>
                <p className="text-blue-100 text-lg">
                  Si tienes un proyecto interesante, una oportunidad de prácticas, o simplemente quieres conectar, 
                  no dudes en contactarme. Estoy siempre abierto a nuevos desafíos y colaboraciones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-medium"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Email
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open(`tel:${personalInfo.phone}`, '_blank')}
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-medium"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;