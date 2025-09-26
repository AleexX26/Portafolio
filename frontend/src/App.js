import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

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
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header personalInfo={personalInfo} />
      <Hero personalInfo={personalInfo} />
      <About personalInfo={personalInfo} additionalInfo={additionalInfo} languages={languages} />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Education education={education} courses={courses} />
      <Projects projects={projects} />
      <Contact personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
      <Toaster />
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