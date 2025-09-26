import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

// Import mock data
import { 
  personalInfo, 
  skills, 
  experience, 
  education, 
  courses, 
  languages, 
  projects, 
  additionalInfo 
} from './data/mock';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header personalInfo={personalInfo} />
      <Hero personalInfo={personalInfo} />
      <Skills skills={skills} />
      
      {/* Placeholder sections for development */}
      <div id="about" className="py-20 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">About Section</h2>
        <p className="text-slate-600">Coming soon - Detailed about section</p>
      </div>
      
      <div id="experience" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Experience Section</h2>
        <p className="text-slate-600">Coming soon - Professional experience timeline</p>
      </div>
      
      <div id="education" className="py-20 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Education Section</h2>
        <p className="text-slate-600">Coming soon - Educational background</p>
      </div>
      
      <div id="projects" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Projects Section</h2>
        <p className="text-slate-600">Coming soon - Portfolio projects showcase</p>
      </div>
      
      <div id="contact" className="py-20 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Contact Section</h2>
        <p className="text-slate-600">Coming soon - Contact form and information</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;