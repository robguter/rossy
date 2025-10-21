export interface Dessert {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // URL o path local de la imagen
  colorTheme: 'red' | 'green'; // Para dar un toque temático en el diseño
}