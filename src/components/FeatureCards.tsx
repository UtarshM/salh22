import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import cardiacLab from "@/assets/cardiac-lab.jpg";
import specialists from "@/assets/specialists.jpg";
import patientRoom from "@/assets/patient-room.jpg";

const features = [
  {
    image: cardiacLab,
    title: "Best Team of CVTS",
    text: "State-of-the-art cardiac infrastructure — angiography, angioplasty, stenting, electrophysiology, and comprehensive cardiac care.",
  },
  {
    image: specialists,
    title: "Expert Team of Specialists",
    text: "Super-specialist doctors and clinical excellence across 20+ medical disciplines ensuring the best outcomes.",
  },
  {
    image: patientRoom,
    title: "Expert Care With Affordability",
    text: "Ultra-modern care at affordable costs with international-standard private rooms and world-class amenities.",
  },
];

const FeatureCards = () => (
  <section className="py-20 bg-sal-gray">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="sal-card"
        >
          <img src={f.image} alt={f.title} className="w-full h-52 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-sal-navy mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{f.text}</p>
            <a href="#" className="text-sal-red font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              Learn more <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeatureCards;
