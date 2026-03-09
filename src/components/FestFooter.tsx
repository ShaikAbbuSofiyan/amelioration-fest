import { motion } from "framer-motion";

const quickLinks = ["Home", "About", "Events", "Gallery", "Contact"];
const branchLinks = [
  { name: "Yuga", href: "https://yuga2026.online" },
  { name: "AIzentrix", href: "https://aizentrixjntuhuces.github.io/aizentrix.github.io/" },
  { name: "Mechorrenza", href: "https://mechorrenza-vibes.lovable.app" },
  { name: "Ecstace", href: "https://ecsta-ce-civic-spark.lovable.app" },
  { name: "Synaptics", href: "https://synaptics-26.vercel.app/" },
];

const FestFooter = () => {
  return (
    <footer className="py-16 relative">
      <div className="glowing-separator mb-12" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl neon-text-blue mb-4">AMELIORATION</h3>
            <p className="text-foreground/40 text-sm leading-relaxed">
              The annual college technical fest celebrating innovation, technology, and creativity across all departments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 4 }}
                  className="block text-foreground/40 hover:text-primary text-sm transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Branch Fests */}
          <div>
            <h4 className="font-montserrat font-semibold text-foreground mb-4">Branch Fests</h4>
            <div className="space-y-2">
              {branchLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="block text-foreground/40 hover:text-primary text-sm transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="glowing-separator mb-8" />
        <p className="text-center text-foreground/30 text-sm">
          © 2026 AMELIORATION – All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FestFooter;
