import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); 

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white"
    >
     
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
        style={{ backgroundImage: "url('/images/tattoobg.jpg')" }}
      ></div>

     
      <div
        className="relative z-10 text-center max-w-2xl px-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Unleash Your <span className="text-pink-500">Ink</span> Identity
        </motion.h1>

        <p
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-200"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Book your next tattoo session with top artists in town. Bold, safe, unforgettable.
        </p>

        <button
          onClick={() => navigate("/booking")} // ✅ Navigate to Booking page
          className="mt-8 inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-3 px-6 rounded-full shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Book Now <ArrowRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0" />
    </section>
  );
};

export default Hero;
