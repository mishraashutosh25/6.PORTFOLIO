import React from 'react'
import { motion } from 'framer-motion';


const testimonials = [
  {
    name: "Project Manager",
    role: "Full-Stack Developer",
    review:
      "Ashutosh was responsible for backend APIs and database design. He writes clean code and communicates clearly during development.",
  },
  {
    name: "Hackathon Partner",
    role: "Frontend Developer",
    review:
      "Very consistent and focused. Ashutosh always looks for scalable and practical solutions.",
  },
    {
    name: "Hackathon Teammate",
    role: "UI Developer",
    review:
      "He is disciplined and reliable. Ashutosh focuses on writing scalable solutions and always completes tasks on time.",
  },
  {
  name: "College Project Guide",
  role: "Backend Developer",
  review:
    "Ashutosh managed the backend APIs and database for our project. His structured approach made frontend integration straightforward.",
},

];


const Testimonials = () => {
  return (
    <section id='testimonials' className='relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20'>
      <motion.h2 className='text-5xl font-bold mb-16'
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                What People Say
              </span>
      </motion.h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-col-cols-2 gap-10 max-w-6xl w-full'>
        {testimonials.map((t,i)=>(
          <motion.div
          key={t.name +1}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{once:true}}
          className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1'>
            <div className="text-2xl italic mb-4">❝</div>
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