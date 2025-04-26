import Img1 from "../../assets/cecaImg.png";
import Img2 from "../../assets/cecaImg4.jpg";
import Img3 from "../../assets/cecaImg4.jpg";
import Img4 from "../../assets/cecaImg4.jpg";



import partner1 from "../../assets/partners1.png";
import partner2 from "../../assets/partners2.png";
import partner3 from "../../assets/partners3.png";

import PhotoDG from "../../assets/DGceca.png";

import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaCogs, FaLightbulb, FaChalkboardTeacher, FaSearch, FaHandsHelping, FaUserTie } from "react-icons/fa";




import "./home.css";

const images = [Img1, Img2, Img3,Img4];
const partners = [partner1, partner2, partner3];

const Home = () => {
  return (
    <>
      <section className="hero">
      <div className="slider">
        {images.map((img, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      <div className="hero-content">
        <h1 className="fade-in-up">
          Experts en Ingénierie de <br /> la Commande Publique<br /> & Audit Stratégique
        </h1>
        <p className="fade-in-up">
          Accompagnement Panafricain pour les Institutions Publiques <br />et Privées
        </p>
        <a href="/services" className="hero-btn fade-in-up">
          Decouvrez notre expertise
        </a>
      </div>
    </section>


      <section className="cabinet-director">
  <div className="director-photo">
    <img src={PhotoDG} alt="Directeur CECA" />
  </div>

  <div className="director-card">
    <h2>
      MOT <span>du Directeur</span>
    </h2>
    <p>
    Chez Cabinet Experts Consulting Afrique, nous croyons fermement que la performance et l’impact des institutions publiques comme privées reposent sur des fondations solides : une stratégie claire, des compétences renforcées et une gestion rigoureuse. C’est autour de ces axes que nous avons construit notre démarche ...

      {/* → Texte tronqué ici si tu veux faire un résumé */}
    </p>
    <a href="/about#directeur" className="info-btn">Plus d'infos</a>
  </div>
</section>

<section className="ceca-cards-modern">
  <h2 className="section-title">Nos Domaines d’Intervention</h2>
  <div className="modern-card-container">
    {[
      {
        icon: <FaCogs />,
        title: "Ingénierie",
        text: "Solutions innovantes pour renforcer les institutions.",
      },
      {
        icon: <FaLightbulb />,
        title: "Expertise",
        text: "Stratégie, audit et performance organisationnelle.",
      },
      {
        icon: <FaChalkboardTeacher />,
        title: "Formation",
        text: "Renforcement des capacités pour les professionnels.",
      },
      {
        icon: <FaSearch />,
        title: "Audit",
        text: "Évaluation rigoureuse des processus et résultats.",
      },
      {
        icon: <FaHandsHelping />,
        title: "Assistance",
        text: "Accompagnement sur mesure dans vos projets.",
      },
      {
        icon: <FaUserTie />,
        title: "Conseil",
        text: "Solutions stratégiques adaptées à vos besoins.",
      },
    ].map((item, index) => (
      <motion.div
        className="modern-card"
        key={index}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <div className="modern-icon">{item.icon}</div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </motion.div>
    ))}
  </div>
</section>



     
      <section className="partners">
  <h2>Nos Partenaires</h2>
  <div className="partners-slider">
    <div className="partners-track">
      {[...partners, ...partners].map((logo, index) => (
        <div key={index} className="partner-logo">
          <img src={logo} alt={`Partenaire ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
</section>

<div className='separator'></div>

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

export default Home;
