import { Building2, Shield, FileCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Building2, title: "Corporate Empanelment", text: "Comprehensive healthcare partnerships with leading corporations." },
  { icon: Shield, title: "Insurance Tie-Ups", text: "Cashless treatment through major insurance providers." },
  { icon: FileCheck, title: "TPA Tie-Ups", text: "Seamless claims processing with all major TPAs." },
  { icon: Heart, title: "PM-JAY Scheme", text: "Empanelled under Ayushman Bharat Pradhan Mantri Jan Arogya Yojana." },
];

const InsuranceTieUps = () => (
  <section id="tieups" className="py-20 bg-sal-gray">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="section-heading-center">Corporate & Insurance Tie-Ups</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="sal-card p-6 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-sal-red/10 flex items-center justify-center mx-auto mb-4 text-sal-red">
              <item.icon size={26} />
            </div>
            <h3 className="font-bold text-sal-navy mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.text}</p>
            <a href="#" className="text-sal-red font-semibold text-sm mt-3 inline-block hover:underline">Know More →</a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InsuranceTieUps;
