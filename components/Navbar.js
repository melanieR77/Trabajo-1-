'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.paw}>🐾</span>
        <span className={styles.logoText}>Venta de Perritos</span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <li><a href="#inicio"   onClick={() => setMenuOpen(false)}>Inicio</a></li>
        <li><a href="#razas"    onClick={() => setMenuOpen(false)}>Razas</a></li>
        <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
        <li><a href="#galeria"  onClick={() => setMenuOpen(false)}>Galería</a></li>
        <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
      </ul>

      <a href="#contacto" className={styles.cta}>Adoptar ahora 🐶</a>

      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
