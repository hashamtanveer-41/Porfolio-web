import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Testimonials from "./sections/Testimonials.jsx";


function App() {

  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
          <About />
        <Projects />
        <Experience />
        <Testimonials />
          <section className="min-h-screen" />
          <section className="min-h-screen" />

      </div>
    </>
  )
}

export default App;
