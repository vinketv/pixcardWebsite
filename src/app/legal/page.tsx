export const metadata = {
  title: "Mentions légales — CardShot",
};

export default function LegalPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "48px 20px", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, marginBottom: 10 }}>Mentions légales — CardShot</h1>
      <p style={{ opacity: 0.75, marginTop: 0 }}>Dernière mise à jour : 2026-04-26</p>

      <h2 style={{ marginTop: 28 }}>Éditeur</h2>
      <p>
        Nom / société : <em>à renseigner</em>
        <br />
        Adresse : <em>à renseigner</em>
        <br />
        Email : <a href="mailto:support@pixcard.app">support@pixcard.app</a>
      </p>

      <h2 style={{ marginTop: 28 }}>Hébergement</h2>
      <p>
        Site web hébergé par Vercel.
        <br />
        Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
      </p>

      <h2 style={{ marginTop: 28 }}>Propriété intellectuelle</h2>
      <p>
        Les éléments de CardShot (marque, visuels, textes) sont protégés. Toute reproduction non autorisée est
        interdite.
      </p>
    </main>
  );
}

