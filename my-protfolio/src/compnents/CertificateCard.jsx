import { motion } from "framer-motion";

export default function CertificateCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 140, damping: 12 }}
      className="relative w-[90%] max-w-[300px] h-[420px] md:w-[300px] md:h-[430px] flex flex-col items-center mx-auto"
    >
      <div className="w-[85%] h-[150px] md:w-[260px] md:h-[180px] bg-white rounded-t-xl shadow-[0_6px_20px_rgba(0,0,0,0.2)] relative z-20 flex items-center justify-center">
        <img
          src={item.image}
          alt="certificate"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <motion.div
        initial={{ y: -40 }}
        whileHover={{ y: -60 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className={`w-[85%] h-[240px] md:w-[260px] md:h-[260px] rounded-xl mt-[-20px] bg-gradient-to-b ${item.color} shadow-[0_12px_40px_rgba(0,0,0,0.4)] p-4 md:p-6 relative z-10 flex flex-col justify-between`}
      >
        <div>
          <h2 className="text-white font-bold text-[16px] md:text-[20px] leading-snug text-center">
            {item.title}
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3 text-white/80 text-xs md:text-sm">
            <span>{item.issuer}</span>
            <span>•</span>
            <span>{item.date}</span>
          </div>
        </div>

        <button
          onClick={() => window.open(item.pdf, "_blank")}
          className="mx-auto mt-4 px-4 md:px-5 py-2 rounded-lg border border-white/30 bg-white/10 text-white text-[13px] md:text-[15px] backdrop-blur-md hover:bg-white/20 hover:border-white/50 transition-all duration-300"
        >
          View ↗
        </button>
      </motion.div>
    </motion.div>
  );
}
