
import React, { useEffect } from 'react';
// @ts-ignore - fixing missing exported members error in react-router-dom types
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Placements from './pages/Placements';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import CourseDetail from './pages/CourseDetail';
import ProjectDetail from './pages/ProjectDetail';

const ScrollToTop = () => {
  // @ts-ignore - fixing missing exported members error in react-router-dom types
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;