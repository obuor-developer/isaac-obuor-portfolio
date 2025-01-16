import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate mb-8 max-w-2xl mx-auto"
        >
          I'm currently open to new opportunities and would love to hear about your project.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <a
            href="mailto:iobuor88@gmail.com"
            className="flex items-center justify-center gap-2 text-slate hover:text-lightblue transition-colors"
          >
            <Mail size={20} />
            iobuor88@gmail.com
          </a>
          
          <a
            href="tel:+233553703341"
            className="flex items-center justify-center gap-2 text-slate hover:text-lightblue transition-colors"
          >
            <Phone size={20} />
            +233 553 703 341
          </a>
          
          <a
            href="https://www.linkedin.com/in/isaac-obuor/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-slate hover:text-lightblue transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;