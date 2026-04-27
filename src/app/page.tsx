import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbarInner">
          <div className="brand">
            <Image
              src="/logo.png"
              alt="PixCard"
              width={34}
              height={34}
              priority
              style={{ borderRadius: 12 }}
            />
          </div>
          <nav className="nav">
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">CGU</a>
            <a href="/legal">Mentions légales</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1 className="title">Photographie tes cartes. Publie plus vite.</h1>
          <p className="subtitle">
            PixCard te permet de prendre une photo du recto puis du verso et de générer un collage propre,
            prêt à poster sur les plateformes de vente.
          </p>
        </section>

        <section className="grid">
          <article className="card half">
            <h2>Simple</h2>
            <p>Deux photos (recto/verso) → un collage prêt à partager.</p>
          </article>
          <article className="card half">
            <h2>Rapide</h2>
            <p>Un flux caméra optimisé pour enchaîner les cartes sans friction.</p>
          </article>
          <article className="card">
            <h2>Liens utiles</h2>
            <p>Documents légaux et fichier app-ads.txt requis pour AdMob.</p>
            <div className="cardLinks">
              <a className="pill" href="/privacy">
                Politique de confidentialité
              </a>
              <a className="pill" href="/terms">
                Conditions générales
              </a>
              <a className="pill" href="/legal">
                Mentions légales
              </a>
              <a className="pill" href="/app-ads.txt">
                app-ads.txt
              </a>
            </div>
          </article>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} PixCard</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">CGU</a>
            <a href="/legal">Mentions légales</a>
          </div>
        </footer>
      </main>
    </>
  );
}
