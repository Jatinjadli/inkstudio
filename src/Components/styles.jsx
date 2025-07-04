import { motion } from "framer-motion";
import { PenTool, Eye, Shapes } from "lucide-react";

const styles = [
  {
    title: "Blackwork",
    icon: <PenTool size={32} />,
    img: "/images/img1.jpg",
    desc: "Bold and graphic designs in pure black ink. Perfect for tribal, geometric, and intense statement pieces.",
  },
  {
    title: "Realism",
    icon: <Eye size={32} />,
    img: "/images/img2.jpg",
    desc: "Hyper-realistic portraits and lifelike art — ideal for capturing emotions, faces, and fine detail.",
  },
  {
    title: "Geometric",
    icon: <Shapes size={32} />,
    img: "/images/img3.jpg",
    desc: "Structured and modern. Mandalas, dotwork, and abstract patterns with deep symbolic meaning.",
  },
];

const TattooStyles = () => {
  return (
    <section
      id="styles"
      className="min-h-screen bg-gray-950 text-white py-20 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/images/texture-dark.jpg"
          alt="texture"
          className="w-full h-full object-cover filter blur-sm brightness-50"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-pink-500 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tattoo Styles
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {styles.map((style, i) => (
            <motion.div
              key={i}
              className="bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-xl backdrop-blur-md hover:scale-105 transition transform duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={style.img}
                  alt={style.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-pink-500">
                  {style.icon}
                  <h3 className="text-xl font-bold">{style.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{style.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TattooStyles;
