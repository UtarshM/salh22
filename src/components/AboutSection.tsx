import { Video, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import doctorsTeam from "@/assets/doctors-team.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sal-red font-bold uppercase text-sm tracking-widest">SAL Hospital</span>
        <h2 className="section-heading mt-2 mb-6">Healthcare With Human Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          SAL Hospital is one of Ahmedabad's oldest and best multispeciality hospitals offering
          tertiary healthcare, clinical research, and medical education with 24/7 infrastructure.
          With over 150 doctors across 20+ specialities, we serve patients from 50+ countries with
          compassionate, world-class care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#" className="btn-secondary">
            <Video size={18} />
            Online Consultation
          </a>
          <a href="#" className="btn-primary">
            <Calendar size={18} />
            Book Appointment
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <img
          src={doctorsTeam}
          alt="SAL Hospital Doctors Team"
          className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
        />
        <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
          <Award className="text-sal-red" size={20} />
          <span className="font-bold text-sm text-sal-navy">NABH Accredited</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
