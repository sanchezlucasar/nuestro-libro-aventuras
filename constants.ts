import { PageContent } from './types';

export const PAGES: PageContent[] = [
  // Portada (página 0, anverso de la hoja 0)
  {
    id: 0,
    photos: [],
    texts: [
      {
        content: 'Nuestro Libro de Aventuras',
        position: { top: '35%', left: '10%', right: '10%' },
        size: { width: '80%' },
        font: 'fantasy',
        fontSize: '3.5rem',
        textAlign: 'center',
      },
      {
        content: 'Una colección de momentos maravillosos, risas y recuerdos de nuestros primeros 10 años. Presiona la flecha para comenzar.',
        position: { top: '60%', left: '15%', right: '15%' },
        size: { width: '70%' },
        font: 'body',
        fontSize: '1.2rem',
        textAlign: 'center',
      },
    ],
  },
  // Página 1 (reverso de la hoja 0)
  {
    id: 1,
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1531819177115-4272add9482b?q=80&w=800',
        alt: 'Manos juntas al atardecer',
        position: { top: '10%', left: '10%' },
        size: { width: '60%', height: 'auto' },
        rotation: '-8deg',
        style: 'polaroid',
      },
      {
        src: 'https://images.unsplash.com/photo-1541250828552-7053f5967f13?q=80&w=400',
        alt: 'Pareja riendo',
        position: { top: '45%', left: '40%' },
        size: { width: '50%', height: 'auto' },
        rotation: '5deg',
        style: 'polaroid',
      },
    ],
    texts: [
      {
        content: 'El Comienzo...',
        position: { top: '5%', right: '5%' },
        size: { width: '40%' },
        font: 'script',
        fontSize: '2.5rem',
        textAlign: 'right',
        rotation: '2deg'
      },
    ],
  },
  // Página 2 (anverso de la hoja 1)
  {
    id: 2,
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1534327435275-14c11b22e0e2?q=80&w=800',
        alt: 'Mapa y brújula',
        position: { top: '50%', left: '5%' },
        size: { width: '80%', height: 'auto' },
        rotation: '3deg',
        style: 'rounded',
      },
    ],
    texts: [
      {
        content: 'Nuestro Primer Gran Viaje',
        position: { top: '10%', left: '10%' },
        size: { width: '80%' },
        font: 'fantasy',
        fontSize: '2.8rem',
        textAlign: 'center',
      },
      {
        content: 'El mundo era un tablero de ajedrez gigante, y nosotros, simples viajeros. Ese viaje nos enseñó sobre la belleza de explorar nuevos reinos, uno al lado del otro.',
        position: { top: '30%', left: '15%' },
        size: { width: '70%' },
        font: 'body',
        fontSize: '1.1rem',
        textAlign: 'center',
      },
    ],
  },
   // Página 3 (reverso de la hoja 1)
  {
    id: 3,
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1588482314352-334a1bba7706?q=80&w=400',
        alt: 'Café por la mañana',
        position: { top: '8%', left: '8%' },
        size: { width: '45%', height: 'auto' },
        rotation: '-5deg',
        style: 'polaroid',
      },
      {
        src: 'https://images.unsplash.com/photo-1498846323784-1875461b2108?q=80&w=400',
        alt: 'Paseo por el bosque',
        position: { top: '30%', left: '50%' },
        size: { width: '45%', height: 'auto' },
        rotation: '7deg',
        style: 'polaroid',
      },
      {
        src: 'https://images.unsplash.com/photo-1502403752330-8a183d25b16a?q=80&w=400',
        alt: 'Viendo una película',
        position: { top: '60%', left: '15%' },
        size: { width: '45%', height: 'auto' },
        rotation: '-3deg',
        style: 'polaroid',
      },
    ],
    texts: [
        {
        content: 'La Magia Cotidiana',
        position: { top: '5%', right: '5%' },
        size: { width: '50%' },
        font: 'script',
        fontSize: '2.5rem',
        textAlign: 'right',
      }
    ],
  },
  // Página 4 (anverso de la hoja 2)
  {
    id: 4,
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1478827371593-305719f5c94d?q=80&w=800',
        alt: 'Pareja abrazándose en la nieve',
        position: { top: '40%', left: '10%' },
        size: { width: '80%', height: 'auto' },
        rotation: '0deg',
        style: 'rounded',
      },
    ],
    texts: [
      {
        content: 'Creciendo Juntos',
        position: { top: '10%', left: '10%' },
        size: { width: '80%' },
        font: 'fantasy',
        fontSize: '3rem',
        textAlign: 'center',
      },
       {
        content: 'A través de cada acertijo y cada desafío, hemos crecido. No solo en edad, sino más unidos, más fuertes y más curiosos que nunca.',
        position: { top: '25%', left: '15%' },
        size: { width: '70%' },
        font: 'body',
        fontSize: '1.1rem',
        textAlign: 'center',
      },
    ],
  },
  // Página 5 (reverso de la hoja 2)
  {
    id: 5,
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=800',
        alt: 'Manos entrelazadas',
        position: { top: '10%', left: '20%' },
        size: { width: '60%', height: 'auto' },
        rotation: '4deg',
        style: 'polaroid',
      },
    ],
    texts: [
      {
        content: 'Hacia el Siguiente Capítulo...',
        position: { top: '60%', left: '10%' },
        size: { width: '80%' },
        font: 'fantasy',
        fontSize: '2.5rem',
        textAlign: 'center',
      },
      {
        content: 'Diez años han pasado en este país de las maravillas. Una vida entera nos espera. Te amo.',
        position: { top: '75%', left: '15%' },
        size: { width: '70%' },
        font: 'body',
        fontSize: '1.2rem',
        textAlign: 'center',
      },
    ],
  },
];
