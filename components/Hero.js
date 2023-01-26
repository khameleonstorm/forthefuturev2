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
import { IoPlay } from "react-icons/io5"
import { BsArrowRight } from "react-icons/bs"
import { useRouter } from "next/router";


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
              <Image priority src="/assets/nighthome.jpg" layout="fill" objectFit="cover" alt="nightHome"/>
            </div>
            <div className={styles.context1}>
              <h1>RENT & OWN PROPERTIES</h1>
              <div className={styles.links}>
                <a href="#" className={styles.btn1}  onClick={() => handleRoute("rentHome")}>
                  <BsArrowRight className={styles.circle}/>Explore
                </a>
                <a href="#" className={styles.btn2}>
                  <IoPlay /> About us
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslides}>
            <div className={styles.img}>
              <Image placeholder="blur" src={cryptoBG} layout="fill" objectFit="cover" alt="nightHome"/>
            </div>
            <div className={styles.context2}>
              <h1>INVEST IN CRYPTO</h1>
              <div className={styles.links}>
                <a href="#" className={styles.btn1}  onClick={() => handleRoute("invest")}>
                  <BsArrowRight className={styles.circle}/>Explore
                </a>
                <a href="#" className={styles.btn2}>
                  <IoPlay /> About us
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  );
}
