import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import salLogo from "../assets/sal-logo-new.png";

const Footer = () => (
  <footer id="contact" className="gradient-navy pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Col 1 */}
        <div>
          <div className="flex items-center gap-2 mb-3 bg-white p-2 rounded-xl inline-block">
            <img 
              src={salLogo} 
              alt="SAL Hospital" 
              className="h-10 object-contain"
            />
          </div>
          <p className="text-primary-foreground/60 text-sm mb-4">Healthcare With Human Touch</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-sal-red flex items-center justify-center text-accent-foreground hover:opacity-80 transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-primary-foreground font-bold mb-4">Quick Links</h4>
          {["Home", "About", "Medical Specialties", "Health Check Up", "Contact"].map((l) => (
            <a key={l} href="#" className="block text-primary-foreground/60 text-sm mb-2 hover:text-primary-foreground transition">
              {l}
            </a>
          ))}
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-primary-foreground font-bold mb-4">Patient Services</h4>
          {["Book Appointment", "Online Consultation", "Patient FAQs", "Feedback", "Career"].map((l) => (
            <a key={l} href="#" className="block text-primary-foreground/60 text-sm mb-2 hover:text-primary-foreground transition">
              {l}
            </a>
          ))}
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-primary-foreground font-bold mb-4">Contact Us</h4>
          <div className="space-y-3 text-primary-foreground/60 text-sm">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-sal-red" />
              Drive-in Road, Thaltej, Ahmedabad 380054, Gujarat, India
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-sal-red" />
              +91-79-66115699
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-sal-red" />
              info@salhospital.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/40 text-xs">
        <p>© 2025 SAL Hospital, Ahmedabad. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary-foreground transition">Terms & Conditions</a>
          <a href="#" className="hover:text-primary-foreground transition">Privacy Policy</a>
          <a href="#" className="hover:text-primary-foreground transition">Cancellation & Refund</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
