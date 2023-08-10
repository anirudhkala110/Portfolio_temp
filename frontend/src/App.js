import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './Portfolio/Nav/Nav';
import Home from './Home/Home';
import About from './Portfolio/About/About';
import Services from './Portfolio/Services/Services';
import Project from './Portfolio/Projects/Project';
import Contact from './Portfolio/Contact/Contact';
import Footer from './Portfolio/Footer/Footer';
function App() {
  return (
   <>
   <Nav/>
   <Home/>
   <About/>
   <Services/>
   <Project/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
