import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 22, suffix: "+", label: "Years of Experience" },
  { value: 150, suffix: "+", label: "Experienced Doctors" },
  { value: 20, suffix: "+", label: "Specialities Served" },
  { value: 100000, suffix: "+", label: "Satisfied Patients" },
];

const Counter = ({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      ref={ref} 
      className="bg-gray-100 rounded-2xl shadow-md px-6 py-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sal-navy font-semibold text-[15px]">{label}</div>
    </motion.div>
  );
};

const WhySAL = () => (
  <section className="bg-white py-16 md:py-24 relative -mt-8 z-20">
    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((s, idx) => (
          <Counter key={s.label} target={s.value} suffix={s.suffix} label={s.label} delay={idx * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default WhySAL;
