import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CI/CD Deployment with Jenkins",
    description: "Successfully deployed a Reddit clone application using Jenkins, SonarQube, Trivy, Prometheus Grafana, Docker, and Kubernetes.",
    tech: ["Jenkins", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "E-commerce Web Application",
    description: "Full-stack e-commerce platform built with React, Node.js, and MongoDB. Integrated Stripe for payments and deployed on AWS with scalability in mind.",
    tech: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
    links: {
      github: "#",
      live: "#",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-navy/50 p-6 rounded-lg border border-slate/20 hover:border-lightblue/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-lightblue transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-lightblue transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-slate mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-lightblue text-sm px-2 py-1 rounded-full bg-lightblue/10"
                  >
                    {tech}
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

export default Projects;