'use client';
import { useState } from 'react';
import styles from './Breeds.module.css';

const puppies = [
  {
    id: 1,
    name: 'Golden Retriever',
    emoji: '🐕',
    price: 'L. 8,500',
    age: '8 semanas',
    gender: 'Macho',
    img: '/golden-retriever.jpg',
    badge: '⭐ Más vendido',
    badgeColor: '#F59E0B',
    desc: 'Dulce, inteligente y leal. Perfecto para familias con niños.',
    traits: ['Amistoso', 'Inteligente', 'Activo'],
    available: 3,
  },
  {
    id: 2,
    name: 'French Bulldog',
    emoji: '🐾',
    price: 'L. 12,000',
    age: '10 semanas',
    gender: 'Hembra',
    img: '/french-bulldog.jpg',
    badge: '🔥 Popular',
    badgeColor: '#EF4444',
    desc: 'Compacto, juguetón y lleno de personalidad. Ideal para apartamento.',
    traits: ['Cariñoso', 'Juguetón', 'Tranquilo'],
    available: 2,
  },
  {
    id: 3,
    name: 'Labrador Retriever',
    emoji: '🦮',
    price: 'L. 7,500',
    age: '9 semanas',
    gender: 'Macho',
    img: '/labrador-retriever.jpg',
    badge: '💛 Familiar',
    badgeColor: '#10B981',
    desc: 'El compañero ideal para toda la familia. Energético y muy obediente.',
    traits: ['Leal', 'Energético', 'Obediente'],
    available: 4,
  },
  {
    id: 4,
    name: 'Pomeranian',
    emoji: '🐩',
    price: 'L. 10,000',
    age: '12 semanas',
    gender: 'Hembra',
    img: '/pomeranian.jpg',
    badge: '✨ Nuevo',
    badgeColor: '#8B5CF6',
    desc: 'Pequeño con gran personalidad. Elegante y lleno de energía.',
    traits: ['Curioso', 'Activo', 'Elegante'],
    available: 2,
  },
  {
    id: 5,
    name: 'Shih Tzu',
    emoji: '🐕‍🦺',
    price: 'L. 9,000',
    age: '8 semanas',
    gender: 'Macho',
    img: '/shih-tzu.jpg',
    badge: '💎 Premium',
    badgeColor: '#0EA5E9',
    desc: 'Aristocrático y afectuoso. Su pelaje sedoso lo hace único.',
    traits: ['Dulce', 'Calmado', 'Juguetón'],
    available: 1,
  },
  {
    id: 6,
    name: 'Beagle',
    emoji: '🐶',
    price: 'L. 6,500',
    age: '10 semanas',
    gender: 'Hembra',
    img: '/beagle.jpg',
    badge: '🌟 Oferta',
    badgeColor: '#F97316',
    desc: 'Curioso, alegre y muy sociable. Ama las aventuras al aire libre.',
    traits: ['Alegre', 'Curioso', 'Social'],
    available: 3,
  },
];

function PuppyCard({ puppy }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={puppy.img} alt={puppy.name} className={styles.img} />
        <div className={styles.badge} style={{ background: puppy.badgeColor }}>{puppy.badge}</div>
        <button
          className={`${styles.like} ${liked ? styles.liked : ''}`}
          onClick={() => setLiked(!liked)}
          aria-label="Me gusta"
        >
          {liked ? '❤️' : '🤍'}
        </button>
        <div className={styles.availableChip}>
          <span className={styles.dot} />
          {puppy.available} disponibles
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.nameRow}>
          <h3 className={styles.name}>{puppy.emoji} {puppy.name}</h3>
          <span className={styles.price}>{puppy.price}</span>
        </div>

        <div className={styles.meta}>
          <span>🗓 {puppy.age}</span>
          <span>⚥ {puppy.gender}</span>
        </div>

        <p className={styles.desc}>{puppy.desc}</p>

        <div className={styles.traits}>
          {puppy.traits.map(t => <span key={t} className={styles.trait}>{t}</span>)}
        </div>

        <a
          href={`https://wa.me/50498765432?text=Hola! Me interesa el ${puppy.name} 🐶`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          💬 Preguntar por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function Breeds() {
  const [filter, setFilter] = useState('todos');
  const filters = ['todos', 'pequeños', 'medianos', 'grandes'];
  const sizeMap = {
    1: 'medianos', 2: 'pequeños', 3: 'grandes',
    4: 'pequeños', 5: 'pequeños', 6: 'medianos',
  };

  const filtered = filter === 'todos'
    ? puppies
    : puppies.filter(p => sizeMap[p.id] === filter);

  return (
    <section id="razas" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>🐾 Disponibles ahora</span>
        <h2 className={styles.title}>Nuestros Perritos</h2>
        <p className={styles.sub}>Todos nuestros cachorros vienen con vacunas, desparasitación y carné de salud</p>

        <div className={styles.filters}>
          {filters.map(f => (
            <button
              key={f}
              className={`${styles.filter} ${filter === f ? styles.active : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.map(p => <PuppyCard key={p.id} puppy={p} />)}
      </div>
    </section>
  );
}
