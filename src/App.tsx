import { Navbar, StarsCanvas } from "./components"
import { Toaster } from "./components/ui/toaster"
import MotionWrapper from "./lib/MotionWrapper"
import { About, Contact, Credit, Experience, Hero, Projects } from "./pages"

const App = () => {

  return (
    <>
      <div className="h-screen w-full flex-justify-center relative">
        <div className="grayscale-[50%] brightness-[50%] absolute bg-hero-pattern bg-cover bg-no-repeat bg-left h-full w-full" />
        <Navbar />
        <Hero />
      </div>

      <div className="pageWidth">
        {MotionWrapper(About, "about")}
        {MotionWrapper(Experience, "experience")}
        {MotionWrapper(Projects, "")}
      </div>

      <div className="relative w-full flex-center">
        <div className="pageWidth">
          {MotionWrapper(Contact, "contact")}
        </div>

        <div className="absolute bottom-0 left-0 h-full w-screen pointer-events-none z-50">
          <StarsCanvas />
        </div>
      </div>

      <div className="pageWidth">
        {MotionWrapper(Credit, "")}
      </div>
      
      <Toaster />
    </>
  )
}

export default App