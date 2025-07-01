import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-6xl text-indigo-500 font-bold">Hello, GSAP!</h1>
    </div>
  );
}

export default App;
