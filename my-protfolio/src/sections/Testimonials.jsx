import React from 'react'
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from "../data/constants";


const Testimonials = () => {
  return (
    <section id='testimonials' className='relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20'>
      <motion.h2 className='text-5xl font-bold mb-16'
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          Testimonials
        </span>
      </motion.h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-col-cols-2 gap-10 max-w-6xl w-full'>
        {TESTIMONIALS_DATA.map((t,i)=>(
          <motion.div
          key={t.name +1}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{once:true}}
          className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1'>
           <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover" />
            <p className="text-gray-300 mb-4">{t.review}</p>
            <div className="flex items-center">
              <span className="font-bold text-white">{t.name}</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-400">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Testimonials