export const metadata = {
  title: "Politique de confidentialité — CardShot",
};

const UPDATED_AT = "2026-04-26";
const SUPPORT_EMAIL = "support@pixcard.app";

export default function PrivacyPage() {
  return (
    <>
      <header className="topbar">
        <div className="topbarInner">
          <div className="brand">
            <div className="brandMark" aria-hidden />
            <div className="brandName">CardShot</div>
          </div>
          <nav className="nav">
            <a href="/">Accueil</a>
            <a href="/terms">CGU</a>
            <a href="/legal">Mentions légales</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" style={{ paddingTop: 28 }}>
          <h1 className="title" style={{ fontSize: 40 }}>Politique de confidentialité</h1>
          <p className="subtitle">Dernière mise à jour : {UPDATED_AT}</p>
        </section>

        <section className="grid">
          <article className="card">
            <h2>1) Données traitées</h2>
            <ul style={{ marginLeft: 18, color: "var(--card-muted)", lineHeight: 1.75 }}>
              <li>
                <strong>Photos / caméra</strong> : utilisées uniquement pour permettre à l’utilisateur de prendre
                des photos et générer un collage. Les photos restent sur l’appareil sauf si l’utilisateur choisit
                de les enregistrer dans sa photothèque.
              </li>
              <li>
                <strong>Publicités</strong> : l’application affiche des publicités via <strong>Google AdMob</strong>.
                Selon votre choix, des publicités peuvent être personnalisées ou non personnalisées.
              </li>
            </ul>
          </article>

          <article className="card">
            <h2>2) Publicités & partenaires</h2>
            <p>
              CardShot utilise Google AdMob. Google peut traiter des identifiants publicitaires et des informations
              techniques pour fournir et mesurer les annonces, conformément à sa documentation et aux choix de
              consentement applicables.
            </p>
          </article>

          <article className="card">
            <h2>3) Vos choix (consentement)</h2>
            <p>
              Lors du premier lancement, vous pouvez choisir d’activer ou non les publicités personnalisées. Si
              vous refusez, l’application demandera des annonces non personnalisées dans la mesure du possible.
            </p>
          </article>

          <article className="card">
            <h2>4) Conservation</h2>
            <p>
              CardShot ne stocke pas vos photos sur un serveur. Les éventuels identifiants publicitaires sont gérés
              par les SDK publicitaires selon leurs politiques.
            </p>
          </article>

          <article className="card">
            <h2>5) Contact</h2>
            <p>
              Email support : <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </p>
          </article>

          <article className="card">
            <h2>6) Modifications</h2>
            <p>
              Cette politique peut être mise à jour. La date “Dernière mise à jour” indique la version en vigueur.
            </p>
          </article>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} CardShot</div>
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

