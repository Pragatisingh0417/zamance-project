import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
