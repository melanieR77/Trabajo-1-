import styles from './Gallery.module.css';

const photos = [
  { src: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&q=80', alt: 'Perrito juguetón', span: 'big' },
  { src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80', alt: 'Dos perros corriendo' },
  { src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80', alt: 'Cachorro dormido' },
  { src: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=400&q=80', alt: 'Bulldog adorable' },
  { src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&q=80', alt: 'Perro feliz', span: 'big' },
  { src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=80', alt: 'Pomeranian' },
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
