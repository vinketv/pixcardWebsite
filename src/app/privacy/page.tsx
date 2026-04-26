export const metadata = {
  title: "Politique de confidentialité — CardShot",
};

const UPDATED_AT = "2026-04-26";
const SUPPORT_EMAIL = "support@pixcard.app";

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "48px 20px", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, marginBottom: 10 }}>Politique de confidentialité — CardShot</h1>
      <p style={{ opacity: 0.75, marginTop: 0 }}>Dernière mise à jour : {UPDATED_AT}</p>

      <h2 style={{ marginTop: 28 }}>1) Données traitées</h2>
      <ul>
        <li>
          <strong>Photos / caméra</strong> : utilisées uniquement pour permettre à l’utilisateur de prendre des
          photos et générer un collage. Les photos restent sur l’appareil sauf si l’utilisateur choisit de les
          enregistrer dans sa photothèque.
        </li>
        <li>
          <strong>Publicités</strong> : l’application affiche des publicités via <strong>Google AdMob</strong>.
          Selon votre choix, des publicités peuvent être personnalisées ou non personnalisées.
        </li>
      </ul>

      <h2 style={{ marginTop: 28 }}>2) Publicités & partenaires</h2>
      <p>
        CardShot utilise Google AdMob. Google peut traiter des identifiants publicitaires et des informations
        techniques pour fournir et mesurer les annonces, conformément à sa documentation et aux choix de
        consentement applicables.
      </p>

      <h2 style={{ marginTop: 28 }}>3) Vos choix (consentement)</h2>
      <p>
        Lors du premier lancement, vous pouvez choisir d’activer ou non les publicités personnalisées. Si vous
        refusez, l’application demandera des annonces non personnalisées dans la mesure du possible.
      </p>

      <h2 style={{ marginTop: 28 }}>4) Conservation</h2>
      <p>
        CardShot ne stocke pas vos photos sur un serveur. Les éventuels identifiants publicitaires sont gérés par
        les SDK publicitaires selon leurs politiques.
      </p>

      <h2 style={{ marginTop: 28 }}>5) Contact</h2>
      <p>
        Email support : <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>

      <h2 style={{ marginTop: 28 }}>6) Modifications</h2>
      <p>
        Cette politique peut être mise à jour. La date “Dernière mise à jour” indique la version en vigueur.
      </p>
    </main>
  );
}

