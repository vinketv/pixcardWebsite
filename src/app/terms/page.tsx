import Image from "next/image";

export const metadata = {
  title: "Conditions Générales d’Utilisation — PixCard",
};

export default function TermsPage() {
  return (
    <>
      <header className="topbar">
        <div className="topbarInner">
          <div className="brand">
            <div className="brandLogo" aria-label="PixCard">
              <Image src="/logo.png" alt="PixCard" width={64} height={64} priority />
            </div>
          </div>
          <nav className="nav">
            <a href="/">Accueil</a>
            <a href="/privacy">Confidentialité</a>
            <a href="/legal">Mentions légales</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" style={{ paddingTop: 28 }}>
          <h1 className="title" style={{ fontSize: 40 }}>Conditions générales (CGU)</h1>
          <p className="subtitle">Dernière mise à jour : 2026-04-26</p>
        </section>

        <section className="grid">
          <article className="card">
            <h2>1) Objet</h2>
            <p>
              PixCard est une application mobile permettant de prendre des photos d’une carte (recto/verso) et de
              générer un collage prêt à être partagé ou publié.
            </p>
          </article>

          <article className="card">
            <h2>2) Fonctionnement</h2>
            <ul style={{ marginLeft: 18, color: "var(--card-muted)", lineHeight: 1.75 }}>
              <li>L’utilisateur prend deux photos (recto et verso).</li>
              <li>L’application génère un collage et permet l’enregistrement dans la photothèque.</li>
              <li>Les collages exportés peuvent inclure une signature/filigrane de l’application.</li>
            </ul>
          </article>

          <article className="card">
            <h2>3) Publicités</h2>
            <p>
              L’application est gratuite et peut afficher des publicités via Google AdMob. Selon votre choix,
              certaines publicités peuvent être personnalisées ou non personnalisées.
            </p>
          </article>

          <article className="card">
            <h2>4) Responsabilités</h2>
            <p>
              PixCard est fourni “en l’état”. L’éditeur ne garantit pas l’absence d’erreurs ni la disponibilité
              continue. L’utilisateur reste responsable des contenus qu’il photographie, partage ou publie.
            </p>
          </article>

          <article className="card">
            <h2>5) Contact</h2>
            <p>
              Pour toute question : <a href="mailto:support@pixcard.app">support@pixcard.app</a>
            </p>
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

