export type Project = {
  id: number;
  title: string;
  description: string; // agora o campo é description
  tech: string[];
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Jogo - Astronauta",
    description: "Jogo criado em JavaScript usando conceitos de estados das variáveis e funções.",
    tech: ["JavaScript"],
    repo: "https://github.com/Enryki/astronauta-game/tree/master",
  },
  {
    id: 2,
    title: "Uso de Inteligência Artificial Tradicional",
    description: "Estudo e fixação de conceitos de redes neurais e de algoritmos genéticos",
    tech: ["Python"],
    repo: "https://github.com/Enryki/EstudoIA",
  },
  {
    id: 3,
    title: "Desenvolvimento de uma ferramenta para gestão financeira",
    description: "Serviço para anotação de deduções e proventos dos usuários (estou fazendo o front-end em Angular). Obs: Ainda não finalizado.",
    tech: ["Spring Boot", "JWT","Hivernate", "APIs REST", "JPA"],
    repo: "https://github.com/Enryki/backend-gestor-financas",
  },
    {
    id: 4,
    title: "Uso de Micro Serviços com Load Balance",
    description: "Microserviço de Livros que conversa com o Microserviço de Transformação Monetária para diferentes moedas.",
    tech: ["Microserviços", "API Gateway", "Eureka", "Load Balance"],
    repo: "https://github.com/Enryki/microservices-with-spring-cloud-and-java",
  }
];
