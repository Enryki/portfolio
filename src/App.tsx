import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import WhyPSA from "./components/WhyPSA";
import styles from "./styles/layout.module.css";

export default function App() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.container}>
        <Hero />
        <About />
        <WhyPSA />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Alexander Henrique Watanabe de Souza — Disponível para contratação
      </footer>
    </div>
  );
}
