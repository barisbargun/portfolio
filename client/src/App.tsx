import { useInView } from "react-intersection-observer";
import { Navbar, StarsCanvas } from "./components";
import { Toaster } from "./components/ui";
import MotionWrapper from "./lib/MotionWrapper";
import { About, Contact, Credit, Experience, Hero, Projects } from "./pages";

const App = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px 300px 0px",
  });
  
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <div className="pageContainer">
          {MotionWrapper(About, "about")}
          {MotionWrapper(Experience, "experience")}
          {MotionWrapper(Projects, "projects")}
        </div>
      </main>
      <footer className="pageContainer">
        <div className="flex-center relative w-full">
          {MotionWrapper(Contact, "contact")}

          <div
            className="pointer-events-none absolute bottom-0 left-0 z-50 h-full w-screen"
            ref={ref}
          >
            {inView && <StarsCanvas />}
          </div>
        </div>

        {MotionWrapper(Credit, "")}
      </footer>

      <Toaster />
    </>
  );
};

export default App;
