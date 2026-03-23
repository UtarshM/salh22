import { useEffect, useRef, useState } from "react";
import { Video, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import consultation from "@/assets/consultation.jpg";

const stats = [
  { value: 22, suffix: "+", label: "Years of Experience" },
  { value: 150, suffix: "+", label: "Experienced Doctors" },
  { value: 20, suffix: "+", label: "Specialities Served" },
  { value: 100000, suffix: "+", label: "Satisfied Patients" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
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
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-primary-foreground/70 text-sm mt-1">{stats.find(s => s.value === target)?.label}</div>
    </div>
  );
};

const WhySAL = () => (
  <section className="gradient-navy py-20">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.img
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={consultation}
        alt="Doctor consultation"
        className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
      />
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          A Great Place For Medical Care
        </h2>
        <p className="text-primary-foreground/70 leading-relaxed mb-8">
          SAL Hospital combines modern medical facilities with human touch. Gujarat's oldest
          recognized healthcare destination, serving medical tourism from 50+ countries with
          cutting-edge technology and compassionate care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#" className="btn-white">
            <Video size={18} />
            Online Consultation
          </a>
          <a href="#" className="btn-primary">
            <Calendar size={18} />
            Book Appointment
          </a>
        </div>
      </motion.div>
    </div>
    <div className="container mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <Counter key={s.label} target={s.value} suffix={s.suffix} />
      ))}
    </div>
  </section>
);

export default WhySAL;
