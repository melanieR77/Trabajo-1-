import styles from './Testimonials.module.css';

const reviews = [
  { name: 'María López', city: 'San Pedro Sula', avatar: '👩', text: 'Mi Golden Retriever llegó sano, vacunado y lleno de energía. El proceso fue muy fácil y el equipo super amable. ¡100% recomendado!', rating: 5 },
  { name: 'Carlos Rodríguez', city: 'Tegucigalpa', avatar: '👨', text: 'Compré un French Bulldog para mi hija y quedamos encantados. Viene con todos sus documentos y la atención post-venta es excelente.', rating: 5 },
  { name: 'Ana García', city: 'La Ceiba', avatar: '👩‍🦱', text: 'Lo mejor fue que me enviaron fotos y videos del cachorro antes de comprarlo. Todo muy profesional y transparente. Mi Beagle es una joya!', rating: 5 },
  { name: 'Luis Martínez', city: 'Choloma', avatar: '🧔', text: 'Excelente criador. Mi Labrador llegó el mismo día que prometieron y en perfectas condiciones. Ya tengo 2 perritos de ellos!', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>💬 Testimonios</span>
        <h2 className={styles.title}>Familias que confían en nosotros</h2>
      </div>

      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.stars}>{'⭐'.repeat(r.rating)}</div>
            <p className={styles.text}>"{r.text}"</p>
            <div className={styles.author}>
              <span className={styles.avatar}>{r.avatar}</span>
              <div>
                <strong>{r.name}</strong>
                <span>{r.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.banner}>
        <span className={styles.bannerEmoji}>🏆</span>
        <div>
          <strong>+500 familias felices en Honduras</strong>
          <span>Únete a nuestra comunidad de amantes de los perritos</span>
        </div>
        <a href="#razas" className={styles.bannerBtn}>Ver cachorros →</a>
      </div>
    </section>
  );
}
