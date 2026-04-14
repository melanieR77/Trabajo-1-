import styles from './About.module.css';

const features = [
  { icon: '💉', title: 'Vacunas al día', desc: 'Todos nuestros cachorros tienen su esquema de vacunación completo y al corriente.' },
  { icon: '🩺', title: 'Revisión veterinaria', desc: 'Cada perrito es examinado por veterinarios certificados antes de ir a su nuevo hogar.' },
  { icon: '📋', title: 'Carné de salud', desc: 'Entregamos carné de salud, pedigree y documentos de pureza de raza.' },
  { icon: '🚚', title: 'Envíos a Honduras', desc: 'Hacemos envíos seguros a todo Honduras con rastreo en tiempo real.' },
  { icon: '🏠', title: 'Criados en casa', desc: 'Nuestros cachorros crecen en un ambiente familiar, no en criaderos masivos.' },
  { icon: '💬', title: 'Soporte post-venta', desc: 'Te acompañamos durante los primeros meses de adaptación de tu nuevo compañero.' },
];

export default function About() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.textSide}>
        <span className={styles.tag}>🌟 ¿Por qué elegirnos?</span>
        <h2 className={styles.title}>Criamos con amor,<br />no con fines de lucro</h2>
        <p className={styles.desc}>
          Somos una familia hondureña que lleva más de 10 años dedicada a la crianza responsable de cachorros de raza.
          Cada perrito que sale de nuestras manos ha sido amado, cuidado y preparado para ser el mejor compañero.
        </p>
        <p className={styles.desc}>
          No somos una fábrica de perros. Somos criadores apasionados que garantizan la salud, 
          el temperamento y la felicidad de cada cachorro. 🐾
        </p>
        <a href="#contacto" className={styles.btn}>Contáctanos hoy</a>
      </div>

      <div className={styles.featuresSide}>
        {features.map(f => (
          <div key={f.title} className={styles.feature}>
            <span className={styles.featureIcon}>{f.icon}</span>
            <div>
              <h4 className={styles.featureTitle}>{f.title}</h4>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
