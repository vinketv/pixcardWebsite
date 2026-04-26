export const metadata = {
  title: "Conditions Générales d’Utilisation — CardShot",
};

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "48px 20px", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, marginBottom: 10 }}>Conditions Générales d’Utilisation — CardShot</h1>
      <p style={{ opacity: 0.75, marginTop: 0 }}>Dernière mise à jour : 2026-04-26</p>

      <h2 style={{ marginTop: 28 }}>1) Objet</h2>
      <p>
        CardShot est une application mobile permettant de prendre des photos d’une carte (recto/verso) et de
        générer un collage prêt à être partagé ou publié.
      </p>

      <h2 style={{ marginTop: 28 }}>2) Fonctionnement</h2>
      <ul>
        <li>L’utilisateur prend deux photos (recto et verso).</li>
        <li>L’application génère un collage et permet l’enregistrement dans la photothèque.</li>
        <li>Les collages exportés peuvent inclure une signature/filigrane de l’application.</li>
      </ul>

      <h2 style={{ marginTop: 28 }}>3) Publicités</h2>
      <p>
        L’application est gratuite et peut afficher des publicités via Google AdMob. Selon votre choix, certaines
        publicités peuvent être personnalisées ou non personnalisées.
      </p>

      <h2 style={{ marginTop: 28 }}>4) Responsabilités</h2>
      <p>
        CardShot est fourni “en l’état”. L’éditeur ne garantit pas l’absence d’erreurs ni la disponibilité
        continue. L’utilisateur reste responsable des contenus qu’il photographie, partage ou publie.
      </p>

      <h2 style={{ marginTop: 28 }}>5) Contact</h2>
      <p>
        Pour toute question : <a href="mailto:support@pixcard.app">support@pixcard.app</a>
      </p>
    </main>
  );
}

