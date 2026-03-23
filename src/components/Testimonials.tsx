import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Keshav Kumar",
    role: "DIG CID, Gandhinagar",
    text: "The care I received at SAL Hospital was extraordinary. The doctors were attentive, the facilities were world-class, and the entire staff treated me with compassion and dignity.",
  },
  {
    name: "Shri Vajubhai Vala",
    role: "Finance Minister, Gujarat",
    text: "SAL Hospital is a beacon of healthcare excellence in Gujarat. Their commitment to patient care and medical innovation is truly commendable.",
  },
  {
    name: "Mrs. Habiba Imani",
    role: "International Patient, South Africa",
    text: "Traveling from South Africa for treatment, I was amazed by the quality of care at SAL Hospital. The international patient services made everything seamless.",
  },
  {
    name: "Rajesh Patel",
    role: "Patient, Ahmedabad",
    text: "My cardiac surgery at SAL Hospital was life-changing. The CVTS team's expertise and the post-operative care were outstanding. I'm grateful for a second chance at life.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading-center">What Our Patients Say</h2>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-sal-gray rounded-2xl p-8 md:p-12"
            >
              <Quote className="text-sal-red mb-4" size={36} />
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div>
                <p className="font-bold text-sal-navy">{testimonials[current].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-sal-gray transition">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-sal-gray transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
