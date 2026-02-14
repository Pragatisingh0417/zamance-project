import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Blog from "./pages/Blog";

import DataAndIntelligence from "./pages/DataAndIntelligence";
import TechnologyConsulting from "./pages/TechnologyConsulting";
import AIAutomations from "./pages/AIAutomations";
import EngineeringConsulting from "./pages/EngineeringConsulting";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* Services Routes */}
        <Route path="/services/data-intelligence" element={<DataAndIntelligence />} />
        <Route path="/services/technology-consulting" element={<TechnologyConsulting />} />
        <Route path="/services/ai-automations" element={<AIAutomations />} />
        <Route path="/services/engineering-consulting" element={<EngineeringConsulting />} />
      </Routes>

      <ScrollToTopButton />
      <Footer />
    </>
  );
}
