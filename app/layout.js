import './globals.css';

export const metadata = {
  title: 'Venta de Perritos 🐾 | Tu Compañero Perfecto',
  description: 'Encuentra tu perrito ideal. Cachorros de raza con vacunas, desparasitados y llenos de amor. Envíos a todo Honduras.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
