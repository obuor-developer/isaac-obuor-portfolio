import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Jomacs IT Solution",
    location: "Canada",
    period: "2021 - 2023",
    description: [
      "Managed end-to-end lifecycle of infrastructure and services",
      "Designed and implemented CI/CD pipelines using Jenkins and Docker",
      "Worked with Kubernetes for container orchestration",
      "Automated resource provisioning using Terraform and Ansible",
      "Optimized monitoring tools (Prometheus and Grafana)",
    ],
  },
  {
    title: "Web Developer",
    company: "Parbtech Solution",
    location: "Ghana",
    period: "2023",
    description: [
      "Created responsive and user-friendly websites",
      "Developed with HTML, CSS, JavaScript, React, and Node.js",
      "Built real-time web applications with MongoDB integration",
      "Focused on clean interfaces and robust API development",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-navy/50 p-6 rounded-lg border border-slate/20 hover:border-lightblue/50 transition-all"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {exp.title} at {exp.company}
              </h3>
              
              <div className="flex items-center gap-4 text-slate mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} className="text-lightblue" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-lightblue" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-slate flex items-start gap-2">
                    <span className="text-lightblue mt-1.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;