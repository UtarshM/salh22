import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const topNavItems = [
  { label: "ABOUT", href: "#about" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
  { label: "INTERNATIONAL", href: "#international" },
];

type NavItem = {
  label: string;
  href: string;
  children?: string[];
};

const mainNavItems: NavItem[] = [
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-2' : 'pt-6'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Floating Rounded Container */}
        <div className="bg-white rounded-[2rem] shadow-xl flex flex-col lg:flex-row items-stretch border border-gray-100 relative">
          
          {/* Logo Section (Left Panel) */}
          <div className="flex items-center justify-between lg:border-r border-gray-200 px-6 py-4 lg:py-2 w-full lg:w-64 flex-shrink-0">
            <a href="/" className="block">
              <img 
                src="/src/assets/sal-logo-new.png" 
                alt="SAL Hospital" 
                className="h-12 lg:h-14 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-sal-navy font-black text-2xl tracking-tight">+ SAL</span>';
                }}
              />
            </a>
            <button
              className="lg:hidden p-2 text-sal-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Right Section (Nav & Search) */}
          <div className="hidden lg:flex flex-1 flex-col">
            
            {/* Top Row: Utility Links & Search */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 h-[60px]">
              <nav className="flex items-center gap-6">
                {topNavItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-xs font-bold text-sal-navy hover:text-orange-500 transition-colors tracking-widest">
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex bg-gray-50 rounded-full border border-gray-200 overflow-hidden h-9 w-[300px]">
                <input 
                  type="text" 
                  placeholder="Doctors, Specialities & more" 
                  className="bg-transparent px-4 w-full outline-none text-xs text-sal-navy placeholder:text-gray-400"
                />
                <button className="bg-[#FE9E15] hover:bg-[#E88A00] transition-colors text-white px-5 font-semibold text-xs flex items-center justify-center">
                  Search
                </button>
              </div>
            </div>

            {/* Bottom Row: Main Navigation */}
            <nav className="flex items-stretch h-[60px]">
              {mainNavItems.map((item, index) => (
                <div 
                  key={item.label} 
                  className={`flex-1 flex justify-center items-center relative group ${index !== mainNavItems.length - 1 ? 'border-r border-gray-200' : ''}`}
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a href={item.href} className="flex items-center gap-1 w-full justify-center h-full text-xs font-bold text-sal-navy hover:text-orange-500 transition-colors tracking-widest px-2">
                    {item.label}
                    {item.children && <ChevronDown size={14} className="ml-0.5 group-hover:rotate-180 transition-transform" />}
                  </a>
                  
                  {/* Dropdown for Specialities */}
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl p-4 min-w-[220px] grid gap-1 z-50 border border-gray-100 mt-2"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#specialities"
                          className="px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                        >
                          {child}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

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
            className="lg:hidden overflow-hidden bg-white shadow-xl border-t border-gray-100"
          >
            <div className="px-6 py-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
              {/* Search Mobile */}
              <div className="flex bg-gray-50 rounded-full border border-gray-200 overflow-hidden h-10 w-full mb-2">
                <input 
                  type="text" 
                  placeholder="Doctors, Specialities..." 
                  className="bg-transparent px-4 w-full outline-none text-sm text-sal-navy"
                />
                <button className="bg-[#FE9E15] text-white px-4">
                  <Search size={16} />
                </button>
              </div>

              {[...topNavItems, ...mainNavItems].map((item) => (
                <div key={item.label} className="border-b border-gray-50 pb-2">
                  <a
                    href={item.href}
                    className="block py-2 text-sm font-bold text-sal-navy tracking-wide"
                    onClick={() => !item.children && setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-4 pb-2 flex flex-col gap-2 mt-1">
                      {item.children.map(child => (
                        <a key={child} href="#specialities" className="text-sm text-gray-600 font-medium" onClick={() => setMobileOpen(false)}>{child}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
