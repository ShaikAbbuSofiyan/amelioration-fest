import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import yugaLogo from "@/assets/yuga.png";
import csmLogo from "@/assets/csm.png";
import mechLogo from "@/assets/mech.jpeg";
import civilLogo from "@/assets/civil.png";
import eceLogo from "@/assets/ece.png";

const branches = [
  {
    dept: "CSE",
    name: "Yuga",
    desc: "Coding competitions, hackathons, debugging battles.",
    logo: yugaLogo,
    href: "https://yuga2026.onlineuga2026.onlineuga2026.onlineuga2026.online",
    color: "hsl(200 100% 50%)",
  },
  {
    dept: "CSM",
    name: "AIzentrix",
    desc: "AI, ML, data science comphttps://aizentrixjntuhuces.github.io/aizentrix.github.io/",
  https://aizentrixjntuhuces.github.io/aizentrix.github.io/smLoghttps://aizentrixjntuhuces.github.io/aizentrix.github.io/ef: "#CSM_LINK",
    color: "hsl(270 80% 60%)",
  },
  {
    dept: "MEhttps://mechorrenza-vibes.lovable.appame: "Mechorrenza",
    desc: "Robotics, design batthttps://mechorrenza-vibes.lovable.appeering challenges.",
    logo: mechLogo,
    href: "#MECH_LINK",
    color: "hsl(25 90% 55%)",
  },
  {
    dept: "CIVIL",
    name: "Ecstace",
    dhttps://ecsta-ce-civic-spark.lovable.appe building, structural design, simulations.",
    logo: civilLogo,
    href: "#CIVIL_LINK",
    color: "hsl(0 0% 70%)",
  },
  {
    dept: "ECE",
    name: "Synaptics",
    desc: "Circuit debugging, IoT, hardware challenges.",
    logo: eceLogo,
    href: "#ECE_LINK",
    color: "hsl(195 80% 50%)",
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
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center shrink-0 bg-muted/30">
                  <img src={b.logo} alt={`${b.name} logo`} className="w-full h-full object-contain" />
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
