import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-gradient-to-br from-[#051A3B] via-[#093268] to-[#0D65BE] pt-24 md:pt-32 pb-16 flex items-center">
      {/* Background Subtle Silhouette (Optional, based on Sigma's faint building bg) */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-center bg-cover"
        style={{ backgroundImage: "url('/src/assets/hero-hospital.jpg')" }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl xl:max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] mb-6 tracking-tight text-white/90">
              A healthcare journey <br className="hidden md:block" /> that begins with
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light italic mb-10">
              #HumanTouchInHealthcare
            </p>
            
            <a 
              href="#contact" 
              className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm transition-all duration-300 rounded-full py-3 px-8 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Appointment
            </a>
          </motion.div>

          {/* Right Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square max-w-[600px] mx-auto hidden md:block"
          >
            {/* Collage Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Element 1: Top Left Orange Petal */}
              <div className="absolute top-[5%] left-[10%] w-[35%] h-[40%] bg-orange-400 rounded-tr-[100px] rounded-bl-[100px] z-10" />

              {/* Element 2: Top Right Green Petal */}
              <div className="absolute top-[5%] right-[10%] w-[40%] h-[35%] bg-green-500 rounded-tl-[120px] rounded-br-[120px] overflow-hidden z-10 flex items-center justify-center">
                <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-80">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>

              {/* Element 3: Center Large Image Circle */}
              <div className="absolute top-[20%] left-[25%] w-[45%] h-[45%] rounded-full overflow-hidden border-4 border-white z-30 shadow-2xl">
                <img src="/src/assets/doctors-team.jpg" alt="Doctors Team" className="w-full h-full object-cover" />
              </div>

              {/* Element 4: Bottom Right Image Shield/Round */}
              <div className="absolute bottom-[10%] right-[10%] w-[45%] h-[50%] bg-blue-500 rounded-tl-[100px] rounded-bl-[100px] overflow-hidden z-20 shadow-xl border-4 border-white">
                <img src="/src/assets/specialists.jpg" alt="Specialists" className="w-full h-full object-cover" />
              </div>

              {/* Element 5: Bottom Left Small Image Circle */}
              <div className="absolute bottom-[5%] left-[15%] w-[35%] h-[35%] rounded-full overflow-hidden border-4 border-white z-20 shadow-xl">
                <img src="/src/assets/sal-building.jpg" alt="SAL Building" className="w-full h-full object-cover" 
                onError={(e) => { e.currentTarget.src = "/src/assets/hero-hospital.jpg" }} />
              </div>

              {/* Element 6: Center Red Starburst Snippet */}
              <div className="absolute top-[55%] left-[20%] w-[25%] h-[25%] bg-sal-red rounded-full z-20 flex items-center justify-center shadow-lg">
                <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 2v20m-10-10h20m-17-7 14 14m-14 0 14-14" />
                </svg>
              </div>

              {/* Element 7: Far Right Bottom Orange Circles */}
              <div className="absolute top-[40%] right-[0%] w-[25%] h-[25%] bg-orange-500 rounded-full z-10 flex items-center justify-center">
                <div className="w-[70%] h-[70%] border-4 border-white/50 rounded-full flex items-center justify-center">
                  <div className="w-[50%] h-[50%] border-4 border-white/70 rounded-full" />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
