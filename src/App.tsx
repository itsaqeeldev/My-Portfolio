
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-deep-void min-h-screen text-white selection:bg-neon-cyan selection:text-black">
      <Navbar />
      <Hero />
      <Journey />
      <Skills />

      <Projects />

      <Contact />
    </main>
  );
}

export default App;
