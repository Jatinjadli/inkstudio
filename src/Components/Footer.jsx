import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  

  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6 relative z-10">
      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Ink Legacy Studio</h2>
          <p className="text-sm leading-relaxed">
            Unleashing stories through ink. Step in to transform your vision into
            stunning, lasting art.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Sector 17, Chandigarh – Mohali, Punjab, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> <a href="mailto:hello@inklegacy.com" className="hover:underline">hello@inklegacy.com</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ink Legacy Studio. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-6 bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full shadow-md transition"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
