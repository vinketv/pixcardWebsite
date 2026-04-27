import Image from "next/image";

export const metadata = {
  title: "Mentions légales — PixCard",
};

export default function LegalPage() {
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
            <div className="brandName">PixCard</div>
          </div>
          <nav className="nav">
            <a href="/">Accueil</a>
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">CGU</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" style={{ paddingTop: 28 }}>
          <h1 className="title" style={{ fontSize: 40 }}>Mentions légales</h1>
          <p className="subtitle">Dernière mise à jour : 2026-04-26</p>
        </section>

        <section className="grid">
          <article className="card">
            <h2>Éditeur</h2>
            <p>
              Nom / société : <em>à renseigner</em>
              <br />
              Adresse : <em>à renseigner</em>
              <br />
              Email : <a href="mailto:support@pixcard.app">support@pixcard.app</a>
            </p>
          </article>

          <article className="card">
            <h2>Hébergement</h2>
            <p>
              Site web hébergé par Vercel.
              <br />
              Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>
          </article>

          <article className="card">
            <h2>Propriété intellectuelle</h2>
            <p>
              Les éléments de PixCard (marque, visuels, textes) sont protégés. Toute reproduction non autorisée
              est interdite.
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

