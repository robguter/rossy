import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Opcionales: módulos para paginación, navegación y autoplay
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const images = [
  'images/pavcoche.jpg',
  'images/reposteria01.jpg',
  'images/reposteria02.jpg',
  'images/reposteria03.jpg',
];

export default function Carousel() {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      style={{ width: '90%', borderRadius: '1rem'}}
    >
      {images.map((src, idx) => (
        <SwiperSlide key={src}>
          <img src={src} alt={`Foto ${idx+1}`} style={{width:'100%', height:'700px', objectFit:'fill'}} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}