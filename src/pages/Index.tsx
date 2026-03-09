import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import BranchFests from "@/components/BranchFests";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Countdown from "@/components/Countdown";
import Contact from "@/components/Contact";
import FestFooter from "@/components/FestFooter";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const Loader = () => (
  <motion.div
    className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="font-montserrat font-black text-3xl md:text-5xl neon-text-blue tracking-widest"
    >
      AMELIORATION
    </motion.div>
  </motion.div>
);

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <CursorGlow />
          <Navbar />
          <main>
            <Hero3D />
            <About />
            <BranchFests />
            <Events />
            <Gallery />
            <Countdown />
            <Contact />
          </main>
          <FestFooter />
        </>
      )}
    </>
  );
};

export default Index;
