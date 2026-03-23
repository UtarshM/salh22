import { Globe, Plane, HelpCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { icon: Globe, label: "International Patient Service" },
  { icon: Plane, label: "Medical Tourism & Visa" },
  { icon: HelpCircle, label: "FAQs" },
  { icon: Calendar, label: "Book Appointment" },
];

const InternationalPatients = () => (
  <section id="international" className="gradient-navy py-20 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <svg viewBox="0 0 1200 600" className="w-full h-full">
        <ellipse cx="600" cy="300" rx="500" ry="250" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground" />
        <ellipse cx="600" cy="300" rx="400" ry="200" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" />
      </svg>
    </div>
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          International Patient Services
        </h2>
        <p className="text-primary-foreground/70 leading-relaxed mb-8">
          SAL Hospital serves patients from 50+ countries with dedicated international patient
          coordinators, visa assistance, airport transfers, and translation services.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href="#"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition text-sm"
            >
              <l.icon size={16} className="text-sal-red" />
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="w-64 h-64 rounded-full gradient-navy border-2 border-primary-foreground/20 flex items-center justify-center">
          <div className="text-center">
            <Globe size={64} className="mx-auto text-sal-red mb-3" />
            <p className="text-primary-foreground font-bold text-2xl">50+</p>
            <p className="text-primary-foreground/60 text-sm">Countries Served</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default InternationalPatients;
