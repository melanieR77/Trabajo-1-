import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span>🐾</span>
            <span className={styles.logoText}>Venta de Perritos</span>
          </div>
          <p className={styles.tagline}>
          Tu compañero ideal te espera.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook" className={styles.social}>📘</a>
            <a href="#" aria-label="Instagram" className={styles.social}>📸</a>
            <a href="https://wa.me/50498765432" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.social}>💬</a>
            <a href="#" aria-label="TikTok" className={styles.social}>🎵</a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Razas</h4>
          <ul>
            <li><a href="#razas">Golden Retriever</a></li>
            <li><a href="#razas">French Bulldog</a></li>
            <li><a href="#razas">Labrador</a></li>
            <li><a href="#razas">Pomeranian</a></li>
            <li><a href="#razas">Shih Tzu</a></li>
            <li><a href="#razas">Beagle</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Empresa</h4>
          <ul>
            <li><a href="#nosotros">Sobre nosotros</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Garantías</h4>
          <ul>
            <li>✅ Vacunas al día</li>
            <li>✅ Carné de salud</li>
            <li>✅ Pedigree</li>
            <li>✅ Envíos a Honduras</li>
            <li>✅ Soporte post-venta</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Venta de Perritos Honduras. Todos los derechos reservados. 🐾</p>
        <p>San Pedro Sula, Honduras</p>
      </div>
    </footer>
  );
}
