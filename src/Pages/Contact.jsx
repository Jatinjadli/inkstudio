import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 md:px-8 bg-gray-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/texture-dark.jpg"
          alt="Background Texture"
          className="w-full h-full object-cover filter blur-sm brightness-50"
        />
      </div>
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          className="space-y-6"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500">
            Get in Touch
          </h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Questions about booking, consultations, or tattoo ideas? Drop us a
            message — we're here to help and would love to hear from you!
          </p>

          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <Phone className="text-pink-500" size={18} />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-pink-500" size={18} />
              info@inklegacy.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-pink-500" size={18} />
              Sector 17, Chandigarh, India
            </li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl space-y-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/70 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/70 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-4 text-gray-400"
              size={18}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full pl-10 pr-4 pt-3 rounded-lg bg-black/70 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 transition"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
