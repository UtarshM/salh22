import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] lg:h-screen overflow-hidden flex items-center pt-20">
      {/* Animated Background Image */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        {/* We use an Unsplash image as a high-quality fallback if hero-hospital.jpg isn't placed yet by user */}
        <img 
          src="/src/assets/hero-hospital.jpg"
          alt="Hospital Background"
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053" }} 
        />
      </motion.div>

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-sal-navy/90 via-sal-navy/60 to-transparent z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-white"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-sm font-semibold tracking-wider uppercase"
          >
            Welcome to SAL Hospital
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] mb-6 tracking-tight text-white">
            A healthcare journey <br className="hidden md:block" /> that begins with
          </h1>
          
          <p className="text-3xl md:text-4xl text-[#FE9E15] font-light italic mb-10">
            #HumanTouchInHealthcare
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-[#FE9E15] hover:bg-[#E88A00] text-white transition-all duration-300 rounded-full py-4 px-10 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Appointment
            </a>
            <a 
              href="#specialities" 
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 rounded-full py-4 px-10 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Our Specialities
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
