import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, BookOpen, Gamepad2 } from "lucide-react";

const cards = [
  {
    icon: Trophy,
    title: "Technical Competitions",
    desc: "Push your limits with challenging coding battles, hackathons, and engineering contests.",
    color: "neon-blue",
  },
  {
    icon: BookOpen,
    title: "Workshops & Seminars",
    desc: "Learn from industry experts through hands-on sessions and insightful talks.",
    color: "neon-purple",
  },
  {
    icon: Gamepad2,
    title: "Fun Activities",
    desc: "Gaming tournaments, cultural shows, and creative events to unwind and celebrate.",
    color: "neon-cyan",
  },
];

const colorMap: Record<string, string> = {
  "neon-blue": "hsl(200 100% 50%)",
  "neon-purple": "hsl(270 80% 60%)",
  "neon-cyan": "hsl(180 100% 50%)",
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 section-gradient relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl neon-text-purple mb-6">
            About Amelioration
          </h2>
          <p className="text-foreground/60 max-w-3xl mx-auto text-lg leading-relaxed">
            Amelioration is the ultimate celebration of innovation, technology, and creativity. Bringing together
            brilliant minds from every department, this annual fest features intense competitions, enlightening
            workshops, and unforgettable experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
              className="glass p-8 card-glow transition-all duration-300 group cursor-default"
              style={{ perspective: "1000px" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 animate-float"
                style={{
                  background: `${colorMap[card.color]}22`,
                  boxShadow: `0 0 20px ${colorMap[card.color]}33`,
                }}
              >
                <card.icon size={28} style={{ color: colorMap[card.color] }} />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-foreground">{card.title}</h3>
              <p className="text-foreground/50 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
