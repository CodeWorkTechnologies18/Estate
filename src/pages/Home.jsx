import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import Projects from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Projects limit={3} />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}

export default Home;
