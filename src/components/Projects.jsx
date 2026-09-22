import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="projects-section section-border border-b pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="projects-list">
        {PROJECTS.map((project, index) => (
          <article key={project.title} className="project-item">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="project-media"
            >
              <img
                src={project.image}
                width={640}
                height={420}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="project-image"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="project-content"
            >
              <p className="project-index">0{index + 1}</p>
              <h2 className="project-title">{project.title}</h2>
              <p className="muted-text project-description">{project.description}</p>
              <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span
                  key={`${project.title}-${tech}-${index}`}
                  className="tech-chip project-tech"
                >
                  {tech}
                </span>
              ))}
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link accent-text"
              >
                View Live Project &rarr;
              </a>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
