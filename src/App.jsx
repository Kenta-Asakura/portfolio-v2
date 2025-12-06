import Layout from './components/layout/Layout';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/Sections/Experience';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;