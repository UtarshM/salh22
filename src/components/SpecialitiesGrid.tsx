import { motion } from "framer-motion";
import {
  Heart, Brain, Bone, Stethoscope, Eye, Baby, Scissors, Syringe,
  Activity, Pill, Ear, Smile, Dumbbell, Flame, Shield, Microscope,
  Droplets, Zap, Waves, HeartPulse, Scan, CircleDot, Cross, Sparkles,
  BadgePlus, Bed, Timer, Wind,
} from "lucide-react";

const specialities = [
  { name: "Bariatric Surgery", icon: Scissors },
  { name: "Cardiology", icon: Heart },
  { name: "Cardiac Surgery", icon: HeartPulse },
  { name: "Dermatology", icon: Sparkles },
  { name: "ENT", icon: Ear },
  { name: "Gastroenterology", icon: Activity },
  { name: "General Surgery", icon: BadgePlus },
  { name: "Joint Replacement", icon: Bone },
  { name: "Laser Lung Surgery", icon: Zap },
  { name: "Nephrology & Urology", icon: Droplets },
  { name: "Neurology & Neurosurgery", icon: Brain },
  { name: "Oncology", icon: Microscope },
  { name: "Orthopedics", icon: Bone },
  { name: "Ob-Gyn", icon: Baby },
  { name: "Pain Management", icon: Pill },
  { name: "Physiotherapy", icon: Dumbbell },
  { name: "Plastic & Cosmetic Surgery", icon: Smile },
  { name: "Psychiatry", icon: CircleDot },
  { name: "Pulmonology & Sleep Study", icon: Wind },
  { name: "Renal Transplant", icon: Shield },
  { name: "Spine Surgery", icon: Scan },
  { name: "Thoracic Surgery", icon: Waves },
  { name: "Trauma Care", icon: Flame },
  { name: "Urology", icon: Syringe },
  { name: "Vascular Surgery", icon: Activity },
  { name: "Critical Care", icon: Bed },
  { name: "Internal Medicine", icon: Stethoscope },
  { name: "Dental", icon: Eye },
];

const SpecialitiesGrid = () => (
  <section id="specialities" className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="section-heading-center">Medical Specialities We Serve</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {specialities.map((s, i) => (
          <motion.a
            key={s.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="sal-card p-5 flex flex-col items-center text-center gap-3 group hover:border-sal-navy border border-transparent"
          >
            <div className="w-12 h-12 rounded-full bg-sal-gray flex items-center justify-center text-sal-red group-hover:bg-sal-red group-hover:text-accent-foreground transition-colors">
              <s.icon size={22} />
            </div>
            <span className="text-xs font-semibold text-foreground">{s.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialitiesGrid;
