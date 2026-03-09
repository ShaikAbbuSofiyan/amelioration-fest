import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import civil2 from "@/assets/gallery/civil2.jpeg";
import civil3 from "@/assets/gallery/civil3.jpeg";
import cse1 from "@/assets/gallery/cse1.jpeg";
import cse2 from "@/assets/gallery/cse2.jpeg";
import csm1 from "@/assets/gallery/csm1.jpeg";
import ece1 from "@/assets/gallery/ece1.jpg";
import mech1 from "@/assets/gallery/mech1.jpeg";
import mech2 from "@/assets/gallery/mech2.jpeg";

const photos = [
  { id: 0, src: cse1, label: "Yuga – Hands of Creativity" },
  { id: 1, src: cse2, label: "Yuga – Team Photo" },
  { id: 2, src: csm1, label: "AIzentrix – Group Session" },
  { id: 3, src: mech1, label: "Mechorrenza – Banner" },
  { id: 4, src: mech2, label: "Mechorrenza – Sports" },
  { id: 5, src: civil2, label: "Ecstace – Poster Launch" },
  { id: 6, src: civil3, label: "Ecstace – Banner" },
  { id: 7, src: ece1, label: "Synaptics – Banner Launch" },
];

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
          {photos.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelected(item.id)}
              className="aspect-square rounded-xl cursor-pointer overflow-hidden relative group"
            >
              <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 bg-gradient-to-t from-background/80 to-transparent">
                <span className="text-foreground text-xs font-semibold">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
              className="w-[85vw] max-w-3xl relative"
            >
              <img
                src={photos[selected].src}
                alt={photos[selected].label}
                className="w-full rounded-2xl object-contain max-h-[80vh]"
              />
              <p className="text-center text-foreground/60 mt-3 text-sm font-montserrat">{photos[selected].label}</p>
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
