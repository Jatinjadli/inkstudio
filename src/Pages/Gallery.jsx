import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const images = [
  { src: "/images/black.jpg", label: "Blackwork", tag: "🔥 Popular" },
  { src: "/images/geometric.jpg", label: "Geometric", tag: "" },
  { src: "/images/real.jpg", label: "Realism", tag: "✨ Featured" },
  { src: "/images/minimal.jpg", label: "Minimal", tag: "" },
  { src: "/images/traditional.jpg", label: "Traditional", tag: "🔥 Popular" },
  { src: "/images/script.jpeg", label: "Script", tag: "" },
  { src: "/images/porttrait.jpg", label: "Portrait", tag: "" },
  { src: "/images/abstract.jpg", label: "Abstract", tag: "" },
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <section
      id="gallery"
      className="relative min-h-screen py-20 px-4 md:px-8 text-white overflow-hidden bg-gray-950"
    >
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-[80%] z-0 rounded-3xl overflow-hidden opacity-50">
        <img
          src="/images/a.jpg"
          alt="Background Texture"
          className="w-full h-full object-cover blur-sm brightness-50"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-pink-500"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Gallery
        </motion.h2>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl bg-white/5 border border-white/10 backdrop-blur-md transform hover:scale-[1.02] transition-all duration-300"
              whileHover={{ rotateX: 2, rotateY: -2 }}
            >
              {image.tag && (
                <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-2 py-1 rounded shadow-md z-10">
                  {image.tag}
                </span>
              )}

              <img
                src={image.src}
                alt={image.label}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-end p-5">
                <p className="text-pink-400 font-medium text-sm mb-2 tracking-wide uppercase">
                  {image.label}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    navigate(`/booking?tattoo=${image.src.split("/").pop()}`)
                  }
                  className="bg-pink-600 hover:bg-pink-700 transition text-white font-semibold text-sm py-2 px-5 rounded-full shadow-lg mb-2"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔙 Back Button */}
        <div className="text-center mt-16">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-pink-500 hover:bg-pink-600 hover:text-white py-2 px-6 rounded-full transition-all duration-300"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
