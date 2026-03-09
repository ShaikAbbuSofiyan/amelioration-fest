import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// 14 days and 18 hours from now (fixed target)
const targetDate = new Date(Date.now() + (14 * 24 + 18) * 60 * 60 * 1000);

const Countdown = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, targetDate.getTime() - now.getTime());
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4 text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-montserrat font-bold text-3xl md:text-5xl neon-text-blue mb-12"
        >
          Amelioration Begins In
        </motion.h2>

        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass p-6 md:p-8 min-w-[80px] md:min-w-[120px]"
            >
              <div className="font-montserrat font-black text-4xl md:text-6xl animate-count-glow text-primary">
                {String(block.value).padStart(2, "0")}
              </div>
              <div className="text-foreground/40 text-xs md:text-sm uppercase tracking-wider mt-2 font-medium">
                {block.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
