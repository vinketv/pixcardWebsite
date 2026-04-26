export default function Home() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "48px 20px", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, marginBottom: 10 }}>CardShot</h1>
      <p style={{ opacity: 0.8, marginTop: 0 }}>
        Outil simple pour photographier une carte (recto/verso) et générer un collage prêt à publier.
      </p>

      <ul style={{ marginTop: 24 }}>
        <li>
          <a href="/privacy">Politique de confidentialité</a>
        </li>
        <li>
          <a href="/terms">Conditions générales (CGU)</a>
        </li>
        <li>
          <a href="/legal">Mentions légales</a>
        </li>
        <li>
          <a href="/app-ads.txt">app-ads.txt</a>
        </li>
      </ul>
    </main>
  );
}
