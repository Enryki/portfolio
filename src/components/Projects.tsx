import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section style={styles.section}>
      <h2>Projetos pessoais e estudos</h2>
      <p>A maior parte do meu código não é meu, por isso estou disponibilizando alguns estudos pessoais</p>
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
