import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
  return (
      <>
        <div className="container mx-auto max-w-7xl">
          <Navbar />

          <main>
            <header id="home" >
              <Hero />
            </header>

            <section id="about" >
              <About />
            </section>

            <section id="work" >
              <Projects />
            </section>
            <Experience />
            <section id="contact" >
              <Contact />
            </section>
          </main>

          <Footer />
        </div>
      </>
  );
}

export default App;