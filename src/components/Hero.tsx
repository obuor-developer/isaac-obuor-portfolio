import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy text-white px-4">
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-lightblue">Isaac Obuor</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold mb-6 text-slate"
        >
          DevOps Engineer & Web Developer
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-slate max-w-2xl mb-8"
        >
          I specialize in building and maintaining scalable infrastructures, automating processes,
          and developing responsive web applications. With over 5 years of experience,
          I bring efficiency and reliability to every project.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-lightblue/10 text-lightblue border-2 border-lightblue px-6 py-3 rounded-md transition-all"
          >
            Get in touch <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;