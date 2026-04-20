'use client';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll('[data-delay]');
    items?.forEach((el) => {
      const delay = el.dataset.delay || '0';
      el.style.animationDelay = delay + 'ms';
      el.style.opacity = '0';
      setTimeout(() => el.classList.add('fade-in-up'), 100);
    });
  }, []);

  return (
    <section id="inicio" className={styles.hero} ref={ref}>
      {/* Blobs de fondo */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.dots} />

      <div className={styles.content}>
        <div className={styles.badge} data-delay="0">🏆 #1 en Honduras</div>
        <h1 className={styles.title} data-delay="100">
          Encuentra a tu <br />
          <span className={styles.highlight}>compañero</span> perfecto
        </h1>
        <p className={styles.subtitle} data-delay="250">
          Cachorros de raza con documentos, vacunas al día y criados con amor. 
          Tu mejor amigo te está esperando. 🐾
        </p>
        <div className={styles.actions} data-delay="400">
          <a href="#razas" className={styles.btnPrimary}>Ver perritos disponibles</a>
          <a href="#nosotros" className={styles.btnSecondary}>Conoce más →</a>
        </div>
        <div className={styles.stats} data-delay="550">
          <div className={styles.stat}><strong>500+</strong><span>Cachorros entregados</span></div>
          <div className={styles.divider} />
          <div className={styles.stat}><strong>12+</strong><span>Razas disponibles</span></div>
          <div className={styles.divider} />
          <div className={styles.stat}><strong>100%</strong><span>Clientes felices</span></div>
        </div>
      </div>

      <div className={styles.imageSection} data-delay="200">
        <div className={styles.mainImageWrap} style={{ float: 'none' }}>
          <img
            className={`${styles.mainImg} float`}
            src="hero.jpg"
            alt="Perrito dorado feliz"
          />
          <div className={styles.badge2}>🐶 ¡Disponible!</div>
        </div>

        <div className={styles.floatingCard1}>
          <span className={styles.cardEmoji}>❤️</span>
          <div>
            <strong>Cuidados Premium</strong>
            <span>Vet. certificado</span>
          </div>
        </div>
        <div className={styles.floatingCard2}>
          <span className={styles.cardEmoji}>💉</span>
          <div>
            <strong>Vacunados</strong>
            <span>Al día siempre</span>
          </div>
        </div>
      </div>

      <a href="#razas" className={styles.scrollDown} aria-label="Scroll">
        <span />
      </a>
    </section>
  );
}
