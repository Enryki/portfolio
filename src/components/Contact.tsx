import styles from "../styles/components.module.css";

export default function Contact(){
  return (
    <section id="contact" style={{padding:"18px 0"}}>
      <h2 style={{fontSize:22, marginBottom:8}}>Contato</h2>
      <p style={{marginBottom:8}}>Email: <a href="mailto:seu@email.com" className={styles.link}>henriquewatanabe22@gmail.com</a></p>
      <div style={{display:"flex", gap:8}}>
        <a href="https://github.com/Enryki" target="_blank" rel="noreferrer" className={styles.btn}>GitHub</a>
        <a href="https://www.linkedin.com/in/alexander-henrique-watanabe-de-souza/" target="_blank" rel="noreferrer" className={styles.btn}>LinkedIn</a>
      </div>
    </section>
  );
}
