import { Hand, Cross, Star } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Hand,
    title: "The Hands of Hope",
    text: "Regional destination provider of Healthcare with Human Touch — recognized for excellence and compassion.",
  },
  {
    icon: Cross,
    title: "Advanced Medicine, Exceptional Care",
    text: "Providing quality healthcare that is integrated, accessible, affordable and appropriate to community needs.",
  },
  {
    icon: Star,
    title: "Clinical Excellence",
    text: "Setting the benchmark in healthcare with next-generation personalized facilities available 24x7 under one roof.",
  },
];

const VisionCards = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="sal-card p-8 text-center"
        >
          <div className="w-16 h-16 rounded-full gradient-navy flex items-center justify-center mx-auto mb-5 text-primary-foreground">
            <c.icon size={28} />
          </div>
          <h3 className="text-xl font-bold text-sal-navy mb-3">{c.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default VisionCards;
