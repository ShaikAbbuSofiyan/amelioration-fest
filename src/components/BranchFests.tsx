import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Cog, Building2, CircuitBoard } from "lucide-react";

const branches = [
  {
    dept: "CSM",
    name: "AIzentrix",
    desc: "AI, ML, data science competitions.",
    icon: Brain,
    href: "#CSM_LINK",
    color: "hsl(270 80% 60%)",
  },
  {
    dept: "ECE",
    name: "Synaptics",
    desc: "Circuit debugging, IoT, hardware challenges.",
    icon: CircuitBoard,
    href: "#ECE_LINK",
    color: "hsl(180 100% 50%)",
  },
  {
    dept: "CIVIL",
    name: "Ecstace",
    desc: "Bridge building, structural design, simulations.",
    icon: Building2,
    href: "#CIVIL_LINK",
    color: "hsl(40 90% 55%)",
  },
  {
    dept: "MECH",
    name: "Mechorrenza",
    desc: "Robotics, design battles, engineering challenges.",
    icon: Cog,
    href: "#MECH_LINK",
    color: "hsl(0 80% 55%)",
  },
  {
    dept: "CSE",
    name: "Yuga",
    desc: "Coding competitions, hackathons, debugging battles.",
    icon: Cpu,
    href: "#CSE_LINK",
    color: "hsl(200 100% 50%)",
  },
];

const BranchFests = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="branches" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-montserrat font-bold text-3xl md:text-5xl neon-text-blue text-center mb-16"
        >
          Branch Fests
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {branches.map((b, i) => (
            <motion.a
              key={b.name}
              href={b.href}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-6 group cursor-pointer transition-all duration-300 block"
              style={{
                boxShadow: `0 0 0 1px ${b.color}22`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${b.color}33, 0 0 0 1px ${b.color}55`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${b.color}22`;
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: `${b.color}18` }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <b.icon size={24} style={{ color: b.color }} />
                  </motion.div>
                </div>
                <div>
                  <span className="text-xs font-medium tracking-wider uppercase text-foreground/40">{b.dept}</span>
                  <h3 className="font-montserrat font-bold text-lg" style={{ color: b.color }}>{b.name}</h3>
                </div>
              </div>
              <p className="text-foreground/50 text-sm mb-4">{b.desc}</p>
              <span className="text-xs font-medium tracking-wider uppercase text-foreground/30 group-hover:text-foreground/60 transition-colors">
                Visit →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchFests;
