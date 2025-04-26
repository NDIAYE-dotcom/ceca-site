import React from "react";
import aboutHero from "../../assets/aboutHero.jpg"; // à remplacer par ton image réelle
import DGphoto from "../../assets/logo-ceca.png"; // déjà utilisé dans ta page d’accueil
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import "./about.css"; // ton fichier CSS

const About = () => {
  return (
    <>
      {/* HERO FIXE */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="about-hero-overlay">
          <h1>À propos de nous</h1>
          <a href="#presentation" className="hero-about-btn">
            Qui sommes-nous ?
          </a>
        </div>
      </section>

      {/* MOT DU DIRECTEUR */}
      <section className="director-message">
        <div className="director-photo">
          <img src={DGphoto} alt="Directeur Général CECA" />
        </div>
        <div className="director-text">
          <h2>
            Mot du <span>Directeur Général</span>
          </h2>
          <p>
            Chez Cabinet Experts Consulting Afrique, nous croyons fermement que la performance et l’impact des institutions publiques comme privées reposent sur des fondations solides : une stratégie claire, des compétences renforcées et une gestion rigoureuse. C’est autour de ces axes que nous avons construit notre démarche.
          </p>

          <p>
            Depuis notre création, nous nous sommes donnés pour mission d’accompagner durablement nos partenaires à travers trois leviers essentiels :
          </p>

          <p>
            L’ingénierie de la commande publique, la formation professionnelle sur mesure, et l’audit organisationnel et financier.
          </p>

          <p>
            Nous intervenons aussi bien aux côtés des entités publiques, dans l’amélioration de la commande publique, la mise en œuvre des partenariats public-privé (PPP) et la gestion de projets territoriaux, qu’auprès des acteurs privés, que nous aidons à mieux naviguer dans l’univers complexe des marchés publics.
          </p>

          <p>
            Nos programmes de formation certifiante et de renforcement des capacités couvrent un large spectre de domaines stratégiques : gestion de projets, finances publiques, environnement, agriculture, foncier, ressources naturelles, RH, entrepreneuriat, etc. Chaque parcours est pensé pour répondre de façon précise aux besoins des organisations et des territoires.
          </p>

          <p>
            Enfin, grâce à une approche d’audit rigoureuse, réactive et orientée vers l’action, nous permettons à nos clients d’identifier leurs forces et faiblesses, d’anticiper les risques et d’engager des démarches d’amélioration continues.
          </p>

          <p>
            Notre ambition est claire : être un catalyseur de performance, en plaçant l’expertise, l’intégrité et l’innovation au cœur de notre engagement.
          </p>

          <p>
            Bienvenue chez Cabinet Experts Consulting Afrique.
          </p>

          <p className="signature">– Elhadji Serigne MBAYE</p>
        </div>
      </section>

      {/* À PROPOS DU CABINET */}
      <section className="about-presentation" id="presentation">
        <div className="container">
          <h2>Qui sommes-nous ?</h2>
          <p>
            Cabinet Experts Consulting Afrique est un cabinet de conseil
            panafricain spécialisé dans l’ingénierie de la commande publique, la
            formation professionnelle sur mesure et l’audit stratégique. Nous
            accompagnons les entités publiques dans la réforme de leurs
            systèmes de passation des marchés...
          </p>

          <p>
            Côté secteur privé, nous conseillons les entreprises dans le
            développement de stratégies de réponse aux appels d’offres, la
            gestion des recours et le pilotage des contrats publics.
          </p>

          <p>
            Notre pôle formation conçoit des programmes adaptés aux enjeux
            actuels : commande publique, finances publiques, gestion de
            projets, entrepreneuriat, environnement, ressources naturelles,
            foncier, etc.
          </p>

          <p>
            Enfin, notre approche audit repose sur des méthodologies rigoureuses,
            intégrant l’évaluation des risques, l’audit en temps réel et un
            suivi post-audit personnalisé.
          </p>

          <p className="mission">
            <strong>Notre ambition :</strong> Être un catalyseur de performance,
            en plaçant l’expertise, l’intégrité et l’innovation au cœur de notre
            engagement.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <div className="footer-wave"></div>
        <div className="footer-container">
          <div className="footer-left">
            <h3 className="contact h2">Contactez-nous</h3>
            <p><FaPhoneAlt /> +221 77 512 30 76</p>
            <p><FaEnvelope /> ceconsultingafrique@gmail.com</p>
            <p><FaMapMarkerAlt /> Dakar, SENEGAL</p>
          </div>
          <div className="footer-right">
            <h3>Suivez-nous</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="https://wa.me/225xxxxxxxx" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Liens rapides</h3>
            <ul>
              <li><a href="/services">À propos</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/formation">Activités</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 CECA. Tous droits réservés.
        </div>
        <a href="#" target="_blank" rel="noreferrer" className="signature">
          by Noreyni
        </a>
      </footer>
    </>
  );
};

export default About;
