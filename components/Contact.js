'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', race: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hola! Soy ${form.name}. Me interesa un cachorro de raza: ${form.race}. Mi teléfono: ${form.phone}. ${form.message}`;
    window.open(`https://wa.me/50498765432?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.info}>
        <span className={styles.tag}>📩 Contacto</span>
        <h2 className={styles.title}>¿Listo para tu nuevo compañero?</h2>
        <p className={styles.desc}>
          Escríbenos y con gusto te asesoramos para encontrar la raza perfecta para tu estilo de vida y familia.
        </p>

        <div className={styles.contacts}>
          <a href="https://wa.me/50498765432" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <span className={styles.contactIcon}>💬</span>
            <div><strong>WhatsApp</strong><span>+504 9876-5432</span></div>
          </a>
          <a href="mailto:hola@ventadeperritos.hn" className={styles.contactItem}>
            <span className={styles.contactIcon}>📧</span>
            <div><strong>Email</strong><span>hola@ventadeperritos.hn</span></div>
          </a>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <div><strong>Ubicación</strong><span>San Pedro Sula, Honduras</span></div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>🕐</span>
            <div><strong>Horario</strong><span>Lunes–Sábado 8am–6pm</span></div>
          </div>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.formTitle}>Envíanos un mensaje</h3>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Tu nombre</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Ej: María López" required />
          </div>
          <div className={styles.field}>
            <label>Teléfono</label>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="+504 0000-0000" required />
          </div>
        </div>

        <div className={styles.field}>
          <label>Correo electrónico</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" />
        </div>

        <div className={styles.field}>
          <label>Raza de interés</label>
          <select name="race" value={form.race} onChange={handleChange} required>
            <option value="">Selecciona una raza</option>
            <option>Golden Retriever</option>
            <option>French Bulldog</option>
            <option>Labrador Retriever</option>
            <option>Pomeranian</option>
            <option>Shih Tzu</option>
            <option>Beagle</option>
            <option>Otra raza</option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Mensaje</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Cuéntanos sobre ti y tu familia..." />
        </div>

        <button type="submit" className={`${styles.submit} ${sent ? styles.success : ''}`}>
          {sent ? '✅ ¡Redirigiendo a WhatsApp!' : '💬 Enviar por WhatsApp'}
        </button>
      </form>
    </section>
  );
}
