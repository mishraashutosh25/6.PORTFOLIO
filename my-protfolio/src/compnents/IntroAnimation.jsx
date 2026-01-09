import React, { useEffect, useMemo } from "react"
import {motion, AnimatePresence } from "framer-motion"




export default function IntroAnimation({ onFinish }) {
  const greetings = useMemo(() => [
    "Hello", "नमस्ते", "こんにちは", "안녕하세요", "Bonjour", "Hola", "مرحبا", "Привет", "Ciao", "Olá","Hallo"],[])

    const [index, setIndex] = React.useState(0);
    const [visible, setVisible] = React.useState(true);

    useEffect(() => {
      if (index < greetings.length-1){
        const id = setTimeout(() => setIndex((i)=>i+1),190);
        return () => clearTimeout(id);
      }else{
        const t=setTimeout(()=>setVisible(false),300);
        return () => clearTimeout(t);
      }
    }, [index, greetings.length]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
         className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
         initial={{y:2}}
         exit={{y:"-190%",
          transition:{
            duration:0.005,
            ease:[0.23, 1, 0.37, 0.92]
          },
         }}
         >
          <motion.h1
           key ={index}
           className="text-6xl md:text-8xl lg:text-9xl font-bold "
           initial={{opacity:0, y:22}}
           animate={{opacity:1, y:0}}
           exit={{opacity:0, y:-20}}
           transition={{duration:0.12}}
           >
            {greetings[index]}
           </motion.h1>
        </motion.div>
    

      )}    
      </AnimatePresence>
  );
}