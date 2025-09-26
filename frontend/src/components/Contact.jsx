import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Clock
} from 'lucide-react';

const Contact = ({ personalInfo }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por tu mensaje. Te responderé lo antes posible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: personalInfo.email,
      action: () => window.open(`mailto:${personalInfo.email}`, '_blank'),
      description: "Envíame un email directamente"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      value: personalInfo.phone,
      action: () => window.open(`tel:${personalInfo.phone}`, '_blank'),
      description: "Llámame para una conversación"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Conecta conmigo",
      action: () => window.open(personalInfo.linkedin, '_blank'),
      description: "Sígueme en LinkedIn"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      value: personalInfo.location,
      action: null,
      description: "Mi ubicación actual"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Contacto
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto interesante o una oportunidad laboral? Me encantaría conocer más detalles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                  <MessageSquare className="w-8 h-8 mr-3 text-blue-600" />
                  Envíame un Mensaje
                </CardTitle>
                <p className="text-slate-600">
                  Completa el formulario y me pondré en contacto contigo lo antes posible
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">
                        Nombre *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        required
                        className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                        className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                      Asunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="¿De qué quieres hablar?"
                      required
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntame sobre tu proyecto o la oportunidad..."
                      rows={6}
                      required
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-800">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border transition-all duration-200 ${
                      method.action 
                        ? 'hover:bg-blue-50 hover:border-blue-200 cursor-pointer' 
                        : 'bg-slate-50'
                    }`}
                    onClick={method.action}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-600 bg-blue-100 p-2 rounded-full">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800">{method.title}</h4>
                        <p className="text-blue-600 font-medium">{method.value}</p>
                        <p className="text-slate-500 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-slate-800">Tiempo de Respuesta</h4>
                  <p className="text-slate-600 text-sm">
                    Suelo responder en menos de 24 horas
                  </p>
                  <div className="flex justify-center">
                    <div className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium">
                      Respuesta Rápida Garantizada
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-slate-600 text-white">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg">Disponibilidad</h4>
                  <p className="text-blue-100 text-sm">
                    Abierto a nuevas oportunidades y proyectos freelance
                  </p>
                  <div className="space-y-2">
                    <div className="text-blue-100 text-sm">
                      • Proyectos de desarrollo web
                    </div>
                    <div className="text-blue-100 text-sm">
                      • Prácticas profesionales
                    </div>
                    <div className="text-blue-100 text-sm">
                      • Colaboraciones en equipo
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-600 to-slate-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para colaborar?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
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
                  onClick={() => window.open(personalInfo.linkedin, '_blank')}
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-medium"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Conectar en LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;