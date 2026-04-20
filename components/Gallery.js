import styles from './Gallery.module.css';

const photos = [
  { src: '/perritos1-galeria.jpg', alt: 'Tu casa puede ser su paraíso', span: 'big' },
  { src: '/perrito2-galeria.jpg', alt: 'El mejor amigo' },
  { src: '/perrito3-galeria.jpg', alt: 'Un hogar para ti, una vida para ellos' },
  { src: '/perrito4-galeria.jpg', alt: 'Ellos te esperan… sé su oportunidad' },
  { src: '/perrito5-galeria.jpg', alt: 'Adopta un mejor amigo', span: 'big' },
  { src: '/perrito6-galeria.jpg', alt: 'Una segunda oportunidad a un corazón fiel' },
];

export default function Gallery() {
  return (
    <section id="galeria" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>📸 Galería</span>
        <h2 className={styles.title}>Momentos de felicidad</h2>
        <p className={styles.sub}>Cada foto cuenta una historia de amor entre nuestros perritos y sus nuevas familias</p>
      </div>

      <div className={styles.grid}>
        {photos.map((p, i) => (
          <div key={i} className={`${styles.item} ${p.span === 'big' ? styles.big : ''}`}>
            <img src={p.src} alt={p.alt} className={styles.img} />
            <div className={styles.overlay}>
              <span>🐾 {p.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
