import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section style={styles.section}>
      <h2>Projetos pessoais e estudos</h2>
      <p>Como a maior parte do meu trabalho profissional é proprietária, estou compartilhando alguns projetos e estudos pessoais para demonstrar minhas habilidades.</p>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
};

export default Projects;

const styles = {
  section: {
    padding: "20px",
  },
};
