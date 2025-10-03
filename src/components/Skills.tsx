import React from "react";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
  return (
    <section style={styles.section}>
      <h2 style={{marginBottom:10}}>Habilidades</h2>
      {skills.map((group, index) => (
        <div key={index} style={styles.group}>
          <h3 style={styles.category}>{group.category}</h3>
          <div style={styles.container}>
            {group.items.map((skill, i) => (
              <span key={i} style={styles.badge}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;

const styles = {
  section: {
    padding: "20px",
  },
  group: {
    marginBottom: "16px",
  },
  category: {
    marginBottom: "8px",
    fontSize: "1.1rem",
  },
  container: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "10px",
  },
  badge: {
    background: "#f0f0f0",
    borderRadius: "6px",
    padding: "6px 12px",
    fontSize: "0.9rem",
  },
};
