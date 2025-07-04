import {
  Calendar,
  Clock,
  Mail,
  MessageSquare,
  PenLine,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

const Booking = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form submitted! We'll contact you shortly.");
  };

  return (
    <section
      id="booking"
      className="min-h-screen px-4 md:px-8 py-20 bg-gray-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/ttbg2.jpg"
          alt="Tattoo studio"
          className="w-full h-full object-cover blur-sm brightness-50"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          className="space-y-6"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-pink-500">
            Book Your Tattoo
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Want something bold and unforgettable? Book a session with our
            experienced tattoo artists and turn your vision into body art.
          </p>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>✅ Custom designs tailored to you</li>
            <li>✅ Hygienic and safe environment</li>
            <li>✅ Professional, experienced artists</li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl space-y-6 w-full"
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
              placeholder="Your Full Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/70 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
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
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/70 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                name="date"
                type="date"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/70 border border-white/20 text-white focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="relative">
              <Clock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                name="time"
                type="time"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/70 border border-white/20 text-white focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          <div className="relative">
            <PenLine
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <select
              name="style"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/70 border border-white/20 text-white focus:ring-2 focus:ring-pink-500"
            >
              <option value="">Select Tattoo Style</option>
              <option value="blackwork">Blackwork</option>
              <option value="traditional">Traditional</option>
              <option value="realism">Realism</option>
              <option value="geometric">Geometric</option>
            </select>
          </div>

          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-4 text-gray-400"
              size={18}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your idea..."
              className="w-full pl-10 pt-3 pr-4 rounded-lg bg-black/70 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 transition text-white font-bold py-3 px-10 rounded-full shadow-lg hover:scale-105 duration-300"
            >
              Book Now
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Booking;
