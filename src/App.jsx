import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import GitHubSection from "./components/GitHubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Stats from "./components/Stats";
import ScrollToTop from "./components/ScrollToTop";
import FloatingDock from "./components/FloatingDock";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import DesktopRecommendation from "./components/DesktopRecommendation";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* Background Glow */}
      <div className="bg-glow" aria-hidden="true">
        <div className="glow1"></div>
        <div className="glow2"></div>
        <div className="glow3"></div>
      </div>

      <ScrollProgress />

      {/* Loader */}
      <Loader />
      <CursorGlow />

      {/* Navbar */}
      <DesktopRecommendation />
      <Navbar />
      

      {/* Main Content */}
      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="stats">
          <Stats />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

         <section id="experience">
          <Experience />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="github">
          <GitHubSection />
        </section>

        <section id="contact">
          <Contact />
        </section>

        

      </main>
      <FloatingDock />

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Toast */}
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
}

export default App;