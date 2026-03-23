import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const categories = [
  "All Specialities",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Oncology",
  "Gastroenterology"
];

const specialitiesData = [
  {
    category: "Cardiology",
    title: "Advanced Cardiology Clinic",
    subtitle: "In collaboration with Top Surgeons",
    duration: "24/7 Care",
    image: "/src/assets/cardiac-lab.jpg"
  },
  {
    category: "Neurology",
    title: "Neuroscience Center",
    subtitle: "Comprehensive Brain & Spine Care",
    duration: "Expert Panel",
    image: "/src/assets/doctors-team.jpg"
  },
  {
    category: "Orthopedics",
    title: "Orthopedics & Joint Replacement",
    subtitle: "Advanced Robotic Surgeries",
    duration: "Rehab Center",
    image: "/src/assets/specialists.jpg"
  },
  {
    category: "Oncology",
    title: "Comprehensive Cancer Care",
    subtitle: "Targeted Therapy & Radiation",
    duration: "Day Care Available",
    image: "/src/assets/patient-room.jpg"
  }
];

const AnimatedSpecialities = () => {
  const [activeTab, setActiveTab] = useState("All Specialities");

  const filteredData = activeTab === "All Specialities" 
    ? specialitiesData 
    : specialitiesData.filter(d => d.category === activeTab);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sal-navy max-w-2xl leading-tight">
            Comprehensive Care With Industry-Leading Medical Specialities
          </h2>
          <div className="relative w-full lg:w-80">
            <input 
              type="text" 
              placeholder="Search specialities..." 
              className="w-full pl-4 pr-10 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-sal-navy shadow-sm"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] relative">
          {/* Optional arrows for scroll indication */}
          <button className="hidden md:flex absolute left-0 bg-white p-1 rounded-full shadow-md z-10">
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-3 md:px-8 w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                  activeTab === cat 
                    ? "bg-sal-navy text-white border-sal-navy shadow-md"
                    : "bg-white text-gray-600 border-gray-300 hover:border-sal-navy hover:text-sal-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button className="hidden md:flex absolute right-0 bg-white p-1 rounded-full shadow-md z-10">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Cards Grid / Carousel */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.title}
                className="bg-sal-navy rounded-2xl overflow-hidden flex flex-col group cursor-pointer shadow-lg hover:shadow-xl transition-shadow border border-sal-navy/10"
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden relative bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/src/assets/hero-hospital.jpg" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sal-navy/60 to-transparent" />
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {item.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold border-t border-white/10 pt-4 mt-auto">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {item.duration}
                  </div>
                </div>
                
                {/* Arrow hint matching Sigma's apply arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 p-2 rounded-lg">
                  <ChevronRight size={20} className="text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default AnimatedSpecialities;
