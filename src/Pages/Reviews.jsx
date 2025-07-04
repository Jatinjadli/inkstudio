import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rohit Verma",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Absolutely amazing work! The artists are friendly and super talented. My sleeve turned out perfect.",
  },
  {
    name: "Simran Kaur",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 4,
    text: "Loved the detailing and hygiene. The studio vibe was chill. Will come back for my next piece!",
  },
  {
    name: "Aman Singh",
    image: "/images/client1.jpg", // ✅ Corrected image path
    rating: 5,
    text: "Professionalism at its best. They made sure I was comfortable and the art exceeded expectations.",
  },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="relative min-h-screen py-24 px-4 md:px-8 overflow-hidden text-white bg-gray-950"
    >
      {/* 🌆 Blurred Background Image */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[75%] z-0 opacity-40 rounded-3xl overflow-hidden">
        <img
          src="/images/a.jpg"
          alt="Tattoo Studio Background"
          className="w-full h-full object-cover blur-sm brightness-50"
        />
      </div>

      {/* 🌀 Animated Background Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-400/20 rounded-full blur-2xl animate-pulse z-0" />

      {/* 📝 Heading */}
      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-center text-pink-500 mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our Clients Say
      </motion.h2>

      {/* 🗣️ Testimonials */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            className="relative group rounded-2xl bg-white/5 backdrop-blur-lg border border-white/20 p-6 pt-16 text-center shadow-2xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* 👤 Avatar */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full border-4 border-pink-500 object-cover shadow-lg"
              />
            </div>

            <h4 className="text-xl font-bold mt-3 mb-1">{review.name}</h4>

            <div className="flex justify-center gap-1 text-yellow-400 mb-3">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <Star
                  key={idx}
                  size={18}
                  fill="currentColor"
                  className="drop-shadow-[0_0_2px_#FFD700]"
                />
              ))}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {review.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
