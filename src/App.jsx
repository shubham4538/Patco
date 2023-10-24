import "./App.css";
import About from "./assets/components/About";
import Navbar from "./assets/components/Navbar";
import Process from "./assets/components/Process";
import Testimonials from "./assets/components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Process />
      <Testimonials />
    </div>
  );
}

export default App;
