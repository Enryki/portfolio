import React from "react";
import type { Project } from "../data/projects"; // importa a interface

type ProjectProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{project.title}</h3>
      <p style={styles.description}>{project.description}</p>

      <div style={styles.techContainer}>
        {project.tech.map((t, index) => (
          <span key={index} style={styles.tech}>
            {t}
          </span>
        ))}
      </div>

      <div style={styles.links}>
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer" style={styles.link}>
            Repositório
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" style={styles.link}>
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

// estilos inline
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "12px 0",
  },
  title: {
    margin: "0 0 8px 0",
  },
  description: {
    margin: "0 0 12px 0",
  },
  techContainer: {
    marginBottom: "12px",
  },
  tech: {
    display: "inline-block",
    background: "#f0f0f0",
    borderRadius: "4px",
    padding: "4px 8px",
    marginRight: "6px",
    fontSize: "0.9rem",
  },
  links: {
    marginTop: "8px",
  },
  link: {
    marginRight: "12px",
    color: "#007bff",
    textDecoration: "none",
  },
};
