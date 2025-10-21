import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de Postres
        'rojo-pasion': '#CC0033', // Rojo vibrante para CTA y pasión
        'verde-fresco': '#66A066', // Verde menta/pistacho para frescura y calidad
        'crema-base': '#FFFBF5', // Fondo suave y cálido
        'gris-texto': '#333333', // Texto principal
      },
      backgroundImage: {
        // Ejemplo de un fondo sutil con el color verde
        'gradiente-fresco': 'linear-gradient(to right, var(--verde-fresco), #E0EEDD)',
      },
    },
  },
  plugins: [],
};

export default config;