import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import { useEffect, useState } from "react";
import PageLoader from "./components/PageLoader";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <PageLoader />;
  }

  return (
    <main className="relative">
      <NavBar />
      <Hero />
      <Cocktails />
    </main>
  );
}

export default App;
