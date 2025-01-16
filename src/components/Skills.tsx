import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "Jenkins", "GitHub Actions", "Terraform", "CloudFormation"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Ansible", "Prometheus", "Grafana"],
  },
  {
    title: "Programming & Scripting",
    skills: ["Python", "Bash Scripting", "JavaScript", "React", "Node.js"],
  },
  {
    title: "Databases & Version Control",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Git", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy/50 p-6 rounded-lg border border-slate/20 hover:border-lightblue/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-lightblue mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-lightblue/10 text-lightblue px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;