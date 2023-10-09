import Contact from 'components/Pages/Contact/Contact';
import About from 'components/Pages/About/About';
import Skills from 'components/Pages/Skills/Skills';
import Blogs from 'components/Pages/Blogs/Blogs';
import Experience from 'components/Pages/Experience/Experience';
import Projects from 'components/Pages/Projects/Projects';

export default function Home() {
  return (
    <>
      <h1 className="visually-hidden">유동연의 포트폴리오</h1>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Blogs />
      <Contact />
    </>
  );
}
