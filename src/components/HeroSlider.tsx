import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroHospital from "@/assets/hero-hospital.jpg";
import heroSurgery from "@/assets/hero-surgery.jpg";
import heroCompassion from "@/assets/hero-compassion.jpg";

const slides = [
  {
    image: heroHospital,
    heading: "Welcome to SAL Hospital & Medical Institute",
    subtext: "Multi-speciality hospital delivering excellence in every field of medicine — 20+ years of experience.",
    btn: { label: "About Us", href: "#about", style: "btn-white" },
  },
  {
    image: heroSurgery,
    heading: "Procedures With Precision & Skill",
    subtext: "Every surgical procedure driven by expert doctors and clinical excellence.",
    btn: { label: "Medical Specialities", href: "#specialities", style: "btn-primary" },
  },
  {
    image: heroCompassion,
    heading: "Medical Team With Human Care & Compassion",
    subtext: "Excellence combined with the best of humanity.",
    btn: { label: "Contact Us", href: "#contact", style: "btn-white" },
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative w-full h-[500px] md:h-[650px] lg:h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].heading}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-2xl"
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
                  {slides[current].heading}
                </h1>
                <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-lg">
                  {slides[current].subtext}
                </p>
                <a href={slides[current].btn.href} className={slides[current].btn.style}>
                  {slides[current].btn.label}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-sal-red w-8" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
