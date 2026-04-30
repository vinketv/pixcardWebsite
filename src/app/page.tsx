import Image from "next/image";
import Script from "next/script";

const APP_STORE_URL = "https://apps.apple.com/fr/app/pixcard/id6764064668";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PixCard",
    applicationCategory: "PhotoApplication",
    operatingSystem: "iOS, iPadOS",
    description:
      "PixCard crée une photo recto + verso en une seule image pour cartes TCG, idéale pour publier rapidement sur Cardmarket.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    url: "https://pixcard.app",
    downloadUrl: APP_STORE_URL,
    publisher: {
      "@type": "Person",
      name: "Kevin Sanches",
    },
  };

  return (
    <>
      <Script
        id="pixcard-jsonld"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            <a className="ctaLink" href={APP_STORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">CGU</a>
            <a href="/legal">Mentions légales</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" aria-label="Présentation">
          <div className="heroGrid">
            <div className="heroCopy">
              <h1 className="title">Montre l’état recto/verso en 1 seule photo.</h1>
              <p className="subtitle">
                PixCard est pensé pour les cartes <strong>TCG</strong>. Prends une photo du recto, puis du verso :
                l’app génère une <strong>image unique</strong> claire et standardisée, parfaite pour poster sur{" "}
                <strong>Cardmarket</strong> et montrer l’état sans discussion.
              </p>
              <div className="heroCtas">
                <a className="primaryCta" href={APP_STORE_URL} target="_blank" rel="noreferrer">
                  Télécharger sur l’App Store
                </a>
                <a className="secondaryCta" href="#how">
                  Voir comment ça marche
                </a>
              </div>
              <div className="trustLine">
                <span>Gratuit</span>
                <span className="dot" aria-hidden="true" />
                <span>iPhone & iPad</span>
                <span className="dot" aria-hidden="true" />
                <span>Optimisé pour annonces Cardmarket</span>
              </div>
            </div>
            <div className="heroVisual" aria-hidden="true">
              <div className="mockCard">
                <div className="mockHeader">
                  <div className="mockPill">Recto</div>
                  <div className="mockPill">Verso</div>
                </div>
                <div className="mockBody">
                  <div className="mockImage" />
                  <div className="mockDivider" />
                  <div className="mockImage alt" />
                </div>
                <div className="mockFooter">
                  <div className="mockBtn">Exporter</div>
                  <div className="mockBtn ghost">Partager</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Bénéfices">
          <div className="sectionHead">
            <h2 className="sectionTitle">Pensé pour vendre sur Cardmarket</h2>
            <p className="sectionSubtitle">
              Un rendu lisible, standardisé et prêt à poster, sans retouches. Recto + verso dans la même image.
            </p>
          </div>
          <div className="grid">
            <article className="card half">
              <h3>Une image unique</h3>
              <p>Recto + verso réunis en 1 seul fichier, idéal pour une annonce Cardmarket.</p>
            </article>
            <article className="card half">
              <h3>Rapide</h3>
              <p>Flux caméra optimisé pour enchaîner les cartes TCG sans friction.</p>
            </article>
            <article className="card half">
              <h3>Lisible</h3>
              <p>Cadre de centrage + rendu clair : l’état de la carte se voit au premier coup d’œil.</p>
            </article>
            <article className="card half">
              <h3>Prêt à publier</h3>
              <p>Export direct dans la photothèque, puis upload sur Cardmarket en quelques secondes.</p>
            </article>
          </div>
        </section>

        <section id="how" className="section" aria-label="Comment ça marche">
          <div className="sectionHead">
            <h2 className="sectionTitle">Comment ça marche</h2>
            <p className="sectionSubtitle">Le flow le plus simple pour une annonce TCG.</p>
          </div>
          <ol className="steps">
            <li className="step">
              <div className="stepNum">1</div>
              <div className="stepBody">
                <h3>Recto</h3>
                <p>Aligne la carte dans le cadre. Objectif : une photo nette où l’état est visible.</p>
              </div>
            </li>
            <li className="step">
              <div className="stepNum">2</div>
              <div className="stepBody">
                <h3>Verso</h3>
                <p>PixCard garde le cadrage pour un rendu cohérent (parfait pour comparer l’état).</p>
              </div>
            </li>
            <li className="step">
              <div className="stepNum">3</div>
              <div className="stepBody">
                <h3>Publie sur Cardmarket</h3>
                <p>Export en 1 tap : une seule image à joindre à ton annonce.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="section" aria-label="Cas d’usage">
          <div className="sectionHead">
            <h2 className="sectionTitle">Pour qui ?</h2>
            <p className="sectionSubtitle">TCG sellers, collectionneurs, échanges : même besoin, même solution.</p>
          </div>
          <div className="grid">
            <article className="card">
              <h3>Annonce Cardmarket</h3>
              <p>Ajoute une seule image à ton annonce : recto + verso, propre et lisible.</p>
            </article>
            <article className="card">
              <h3>État & archivage</h3>
              <p>Garde une trace standardisée de l’état de tes cartes (utile pour ton inventory).</p>
            </article>
            <article className="card">
              <h3>Échanges rapides</h3>
              <p>Envoie une image unique (recto/verso) à un acheteur ou à un ami.</p>
            </article>
          </div>
        </section>

        <section className="section" aria-label="Conseils photo">
          <div className="sectionHead">
            <h2 className="sectionTitle">Conseils pour montrer l’état (TCG)</h2>
            <p className="sectionSubtitle">
              Pour éviter les litiges : une photo nette vaut mieux qu’un long message.
            </p>
          </div>
          <div className="grid">
            <article className="card half">
              <h3>Lumière</h3>
              <p>Évite les reflets : lumière diffuse, pas de flash agressif.</p>
            </article>
            <article className="card half">
              <h3>Netteté</h3>
              <p>Cadre bien la carte et garde le même plan pour le recto et le verso.</p>
            </article>
            <article className="card half">
              <h3>Fond neutre</h3>
              <p>Fond uni (noir/gris) pour faire ressortir les bords et les éventuels défauts.</p>
            </article>
            <article className="card half">
              <h3>Une image = une preuve</h3>
              <p>Recto/verso dans la même image : plus simple pour l’acheteur et pour toi.</p>
            </article>
          </div>
        </section>

        <section className="section" aria-label="FAQ">
          <div className="sectionHead">
            <h2 className="sectionTitle">FAQ</h2>
            <p className="sectionSubtitle">Les questions qu’on nous pose le plus.</p>
          </div>
          <div className="faq">
            <details className="faqItem">
              <summary>PixCard est gratuit ?</summary>
              <p>Oui. L’app est financée par des publicités (bannières).</p>
            </details>
            <details className="faqItem">
              <summary>Est-ce compatible avec Cardmarket ?</summary>
              <p>
                Oui : PixCard génère une image unique (recto + verso) que tu peux joindre à ton annonce
                Cardmarket.
              </p>
            </details>
            <details className="faqItem">
              <summary>Où sont enregistrées mes photos ?</summary>
              <p>Le collage est exporté dans ta photothèque. PixCard n’exige pas de compte.</p>
            </details>
            <details className="faqItem">
              <summary>Quels appareils sont supportés ?</summary>
              <p>iPhone et iPad (iOS/iPadOS compatibles App Store).</p>
            </details>
            <details className="faqItem">
              <summary>PixCard est affilié à Cardmarket ?</summary>
              <p>Non. PixCard est un outil indépendant conçu pour faciliter la création de photos pour tes annonces.</p>
            </details>
          </div>
        </section>

        <section className="section ctaSection" aria-label="Téléchargement">
          <div className="ctaCard">
            <h2>Prêt à gagner du temps ?</h2>
            <p>Installe PixCard et crée ta première image recto/verso prête à poster sur Cardmarket.</p>
            <div className="heroCtas">
              <a className="primaryCta" href={APP_STORE_URL} target="_blank" rel="noreferrer">
                Ouvrir sur l’App Store
              </a>
              <a className="secondaryCta" href="/privacy">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Liens utiles">
          <div className="sectionHead">
            <h2 className="sectionTitle">Liens utiles</h2>
            <p className="sectionSubtitle">Documents légaux et fichier requis pour AdMob.</p>
          </div>
          <div className="cardLinks">
            <a className="pill" href={APP_STORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
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
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} PixCard</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">CGU</a>
            <a href="/legal">Mentions légales</a>
          </div>
        </footer>
      </main>
    </>
  );
}
