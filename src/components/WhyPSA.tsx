import React from "react";

type Requirement = {
  title: string;
  grade: string;
  explanation?: string;
};

const requirements: Requirement[] = [
  { title: "Projetar, desenvolver e manter APIs RESTful robustas, escaláveis e seguras;", grade: "10", explanation: "Já implementei APIs em Java, Python e JavaScript." },
  { title: "Implementar e otimizar rotinas em banco de dados (SQL e NoSQL);", grade: "10", explanation: "Já trabalhei com PostgresSQL, MySQL, MongoDB e SQLite." },
  { title: "Realizar integrações entre sistemas internos e externos;", grade: "9", explanation: "Integrei APIs REST e também integrações simples com WebSockets." },
  { title: "Criar aplicar testes automatizados e realizar revisões de código;", grade: "8", explanation: "Utilizei JUnit e Pytest para entregas sólidas e consistentes." },
  { title: "Participar na definição de arquitetura e escolha de novas tecnologias;", grade: "7", explanation: "Consigo agregar com minha bagagem, apesar de não me sentir tão confiante em escolhas de arquitetura." },
  { title: "Garantir a segurança e a performance dos serviços desenvolvidos;", grade: "8", explanation: "Entendo bem conceitos de segurança, mas quero me aprimorar no monitoramento de performance." },
  { title: "Documentar tecnicamente os serviços, endpoints e processos;", grade: "10", explanation: "Escrevo documentação clara e objetiva usando a tecnologia solicitada." },
  { title: "Atuar na manutenção e sustentação de sistemas em produção;", grade: "10", explanation: "Já passei por situações com prazo apertado para correções em produção." },
  { title: "Participar ativamente das cerimônias ágeis (daily, planning, retrospectiva, etc.);", grade: "10", explanation: "Tenho costume com Scrum, seria uma adaptação tranquila." },
  { title: "Trabalhar em conjunto com as equipes internas para garantir eficiência na entrega.", grade: "10", explanation: "Sou comunicativo e sei expressar minhas ideias e dúvidas quando necessário." },
];

const WhyPSA: React.FC = () => {
  const avgGrade =
    requirements.reduce((acc, r) => acc + parseInt(r.grade), 0) / requirements.length;

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Por que sou perfeito para a PSA?</h2>
      <p style={{ marginBottom: 20 }}>
        Acredito que minha experiência abrangente em diversas tecnologias pode contribuir significativamente para a PSA, especialmente considerando a diversidade de produtos que vocês oferecem.
      </p>
      <ul style={styles.list}>
        {requirements.map((req, index) => (
          <li key={index} style={styles.item}>
            <div style={styles.reqHeader}>
              <p style={styles.reqTitle}>{req.title}</p>
              <span style={styles.grade}>{req.grade}/10</span>
            </div>
            <p style={styles.explanation}>{req.explanation}</p>
          </li>
        ))}
      </ul>
      <p style={styles.avg}>Média: {avgGrade.toFixed(1)}/10</p>
    </section>
  );
};

export default WhyPSA;

const styles = {
  section: {
    padding: "20px",
    background: "#f0f4f8",
    borderRadius: "10px",
    margin: "20px 0",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: "1.7rem",
    marginBottom: "16px",
    color: "#1f2937",
  },
  list: {
    listStyleType: "none" as const,
    padding: 0,
    margin: 0,
  },
  item: {
    marginBottom: "18px",
    padding: "16px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
  reqHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  reqTitle: {
    fontWeight: "bold" as const,
    color: "#111827",
    flex: 1,
    marginRight: "10px",
  },
  grade: {
    fontWeight: "bold" as const,
    color: "#3b82f6",
    background: "#dbeafe",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },
  explanation: {
    marginLeft: "0",
    color: "#374151",
  },
  avg: {
    marginTop: "12px",
    fontWeight: "bold" as const,
    fontSize: "1.1rem",
  },
};
