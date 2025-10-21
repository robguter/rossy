import Image from 'next/image';

const images = [
  'images/pavcoche.jpg',
  'images/reposteria01.jpg',
  'images/reposteria02.jpg',
  'images/reposteria03.jpg',
];

export default function Banner() {
  return (
    <section style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2rem 0' }}>
      {images.map((src, idx) => (
        <div key={idx} style={{ flex: 1 }}>
          <Image
            src={src}
            alt={`Banner ${idx + 1}`}
            width={300}
            height={200}
            style={{ borderRadius: '1rem', objectFit: 'cover', width: '100%', height: 'auto' }}
            priority
          />
        </div>
      ))}
    </section>
  );
}