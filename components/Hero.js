// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// importing styles from
import styles from "./Hero.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image"
import cryptoBG from "../public/assets/cryptobg.jpg"
import nightHomeBG from "../public/assets/nighthome.jpg"
import jeweryBG from "../public/assets/jewelryBg.jpg"
import { useRouter } from "next/router";
import { HiArrowNarrowRight } from "react-icons/hi";


export default function Hero() {
  const router = useRouter()

  const handleRoute = (e) => {
    router.push(e)
  }



  return (
    <div className={styles.hero}>
      <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperslides}>
            <div className={styles.img}>
              <Image priority src={nightHomeBG} layout="fill" objectFit="cover" alt="nightHome"/>
            </div>
            <div className={styles.context}>
              <h1>Rent & Own Properties</h1>
              <button onClick={() => handleRoute("/rentHome")}><span>Rent</span><HiArrowNarrowRight /></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslides}>
            <div className={styles.img}>
              <Image placeholder="blur" src={cryptoBG} layout="fill" objectFit="cover" alt="cryptocurrency"/>
            </div>
            <div className={styles.context}>
              <h1>Invest In Crypto</h1>
              <button onClick={() => handleRoute("/invest")}><span>Invest</span><HiArrowNarrowRight /></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslides}>
            <div className={styles.img}>
              <Image placeholder="blur" src={jeweryBG} layout="fill" objectFit="cover" alt="jewelry and gold"/>
            </div>
            <div className={styles.context}>
              <h1>Buy Gold & Jewelry</h1>
              <button onClick={() => handleRoute("/stocks")}><span>Buy</span><HiArrowNarrowRight /></button>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  );
}
