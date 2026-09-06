import Intro from "./modules/Intro";
import Skills from "./modules/Skills";
import Experiences from "./modules/Experiences";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-4 pt-14 sm:px-6">
        <Intro />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
