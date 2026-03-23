import { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const topNavItems = [
  { label: "ABOUT", href: "#about" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
  { label: "INTERNATIONAL", href: "#international" },
];

const mainNavItems = [
  {
    label: "SPECIALITIES",
    href: "#specialities",
    children: [
      "Cardiology", "Cardiac Surgery", "Neurology", "Orthopedics",
      "Oncology", "Gastroenterology", "Nephrology", "Urology",
    ],
  },
  { label: "ACADEMICS", href: "#" },
  { label: "FACILITIES", href: "#" },
  { label: "ADMISSIONS", href: "#" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full pt-4 px-4 bg-transparent absolute">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
          
          {/* Logo Section (Left Panel) */}
          <div className="hidden md:flex flex-col justify-center items-center px-8 py-4 border-r border-gray-200">
            <img 
              src="/src/assets/new-sal-logo.png" 
              alt="SAL Hospital" 
              className="h-16 object-contain"
              onError={(e) => {
                // Fallback to text if image not found during dev
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-sal-navy font-bold text-2xl flex items-center gap-1"><span class="text-sal-red">+</span>SAL</div>';
              }}
            />
          </div>

          {/* Right Section (Top and Bottom Rows) */}
          <div className="flex-1 flex flex-col">
            
            {/* Top Row */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-3">
              <div className="hidden lg:flex items-center gap-6">
                {topNavItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-xs font-semibold text-gray-600 hover:text-sal-red transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
              
              <div className="flex-1 lg:flex-none flex justify-end items-center gap-2 w-full lg:w-auto">
                <div className="relative flex items-center w-full max-w-xs">
                  <input 
                    type="text" 
                    placeholder="Doctors, Specialities & more" 
                    className="w-full text-sm py-2 px-4 pr-12 rounded-l-full border border-gray-300 focus:outline-none focus:border-sal-navy"
                  />
                  <button className="absolute right-0 top-0 bottom-0 bg-orange-400 hover:bg-orange-500 text-white px-4 rounded-r-full text-sm font-medium transition-colors">
                    Search
                  </button>
                </div>
                <button
                  className="lg:hidden p-2 text-gray-700 hover:text-sal-red"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="hidden lg:flex items-center justify-start px-2 py-1">
              {mainNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-5 py-4 text-sm font-bold text-sal-navy hover:text-sal-red transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sal-red after:transition-all hover:after:w-full"
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className="ml-1" />}
                  </a>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 bg-white rounded-xl shadow-xl p-4 min-w-[220px] grid gap-1 z-50 border border-gray-100"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#specialities"
                          className="px-3 py-2 text-sm text-gray-700 hover:bg-sal-gray/50 hover:text-sal-red rounded-lg transition"
                        >
                          {child}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white mt-2 rounded-xl shadow-lg border border-gray-100 container mx-auto"
          >
            <div className="px-4 py-2 bg-gray-50 flex items-center justify-center border-b border-gray-200">
              <span className="text-sal-red font-bold text-xl">+</span>
              <span className="text-sal-navy font-bold text-xl ml-1">SAL</span>
            </div>
            <div className="flex flex-col py-2">
              {[...topNavItems, ...mainNavItems].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-6 py-3 text-sm font-semibold text-sal-navy hover:bg-gray-50 hover:text-sal-red transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
