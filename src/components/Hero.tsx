import minha_foto from '../assets/minha_foto.jpg';

export default function Hero(){
  return (
    <section style={{padding:"36px 0", display:"grid", gridTemplateColumns:"1fr 240px", gap:24, alignItems:"center"}}>
      <div>
        <h1 style={{fontSize:34, marginBottom:8}}>Bem-vindo(a), sou o Alexander</h1>
        <p style={{color:"#374151", marginBottom:16, fontSize:21}}>
          Apaixonado por jogos de tabuleiro, pai de cachorro, fã de bandas brasileiras e nos tempos livres entusiasta da cultura geek.
        
        </p>

      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{width:200, height:200, borderRadius:12, background:"#f3f4f6", display:"flex", alignItems:"center", justifyContent:"center", color:"#9ca3af"}}>
          <img src={minha_foto} alt="Minha fotinha" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
        </div>
      </div>
    </section>
  );
}
