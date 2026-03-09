import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-montserrat font-bold text-3xl md:text-5xl neon-text-cyan text-center mb-16"
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-foreground/50 text-sm">123 College Campus, Tech City, State 500001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-foreground/50 text-sm">amelioration@college.edu</p>
                </div>
              </div>
              <div className="glowing-separator my-6" />
              <div className="flex gap-4">
                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-10 h-10 glass flex items-center justify-center rounded-lg text-foreground/50 hover:text-primary transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-8 space-y-5"
          >
            {["Name", "Email"].map((field) => (
              <div key={field}>
                <label className="text-foreground/50 text-sm mb-2 block">{field}</label>
                <input
                  type={field === "Email" ? "email" : "text"}
                  required
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder={`Your ${field.toLowerCase()}`}
                />
              </div>
            ))}
            <div>
              <label className="text-foreground/50 text-sm mb-2 block">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glow-button w-full text-primary-foreground text-sm font-semibold tracking-wider uppercase"
            >
              {submitted ? "✓ Sent!" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
