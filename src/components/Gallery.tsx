import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const placeholders = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  color: [
    "hsl(200 100% 50%)",
    "hsl(270 80% 60%)",
    "hsl(180 100% 50%)",
    "hsl(320 80% 55%)",
    "hsl(40 90% 55%)",
    "hsl(0 80% 55%)",
    "hsl(150 80% 40%)",
    "hsl(220 70% 50%)",
  ][i],
  label: ["Hackathon Night", "Robotics Arena", "Coding Battle", "Workshop", "Gaming Zone", "Project Expo", "Stage Show", "Awards"][i],
}));

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-montserrat font-bold text-3xl md:text-5xl neon-text-purple text-center mb-16"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelected(item.id)}
              className="aspect-square rounded-xl cursor-pointer overflow-hidden relative group"
              style={{
                background: `linear-gradient(135deg, ${item.color}33, ${item.color}11)`,
                border: `1px solid ${item.color}22`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-foreground/30 text-sm font-medium text-center px-2">{item.label}</span>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                style={{ background: `linear-gradient(to top, ${item.color}88, transparent)` }}
              >
                <span className="text-foreground text-xs font-semibold">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-[80vw] max-w-2xl aspect-video rounded-2xl relative"
              style={{
                background: `linear-gradient(135deg, ${placeholders[selected].color}33, ${placeholders[selected].color}11)`,
                border: `1px solid ${placeholders[selected].color}44`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-foreground/50 text-xl font-montserrat">{placeholders[selected].label}</span>
              </div>
              <button className="absolute top-4 right-4 text-foreground/60 hover:text-foreground" onClick={() => setSelected(null)}>
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
