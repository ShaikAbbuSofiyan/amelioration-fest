import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Bot, Terminal, Presentation, Gamepad2 } from "lucide-react";

const events = [
  { title: "Hackathon", desc: "48-hour coding marathon to build innovative solutions.", icon: Code, color: "hsl(200 100% 50%)" },
  { title: "Robotics Challenge", desc: "Design and program robots to complete complex tasks.", icon: Bot, color: "hsl(270 80% 60%)" },
  { title: "Coding Contest", desc: "Competitive programming battles testing speed and logic.", icon: Terminal, color: "hsl(180 100% 50%)" },
  { title: "Project Expo", desc: "Showcase your innovative projects to industry experts.", icon: Presentation, color: "hsl(320 80% 55%)" },
  { title: "Gaming Tournament", desc: "Battle it out in popular esports titles.", icon: Gamepad2, color: "hsl(40 90% 55%)" },
];

const Events = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-24 section-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-montserrat font-bold text-3xl md:text-5xl neon-text-cyan text-center mb-16"
        >
          Events Highlight
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan opacity-30" />

          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div
                className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-5 z-10"
                style={{ background: event.color, boxShadow: `0 0 15px ${event.color}` }}
              />

              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div
                  className="glass p-6 transition-all duration-300 hover:scale-[1.02]"
                  style={{ boxShadow: `0 0 0 1px ${event.color}22` }}
                >
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <event.icon size={22} style={{ color: event.color }} />
                    <h3 className="font-montserrat font-bold text-lg text-foreground">{event.title}</h3>
                  </div>
                  <p className="text-foreground/50 text-sm">{event.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
