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
} from './mock';

// Import components
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

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