import { useRef, useState } from "react";
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
import Link from "next/link";
import Image from "next/image"
import cryptoBG from "../public/assets/cryptobg.jpg"
import goldBG from "../public/assets/multiple.jpg"






export default function Hero() {
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
              <h1><span className={styles.green}>Exp</span>l<span className={styles.green}>ore.</span> Rent <span className={styles.green}>& </span></h1>
              <h1>Own <span>Pro<span className={styles.green}>p</span>erties.</span></h1>
              <Link href="/rentHome">Explore 👉</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslides}>
            <div className={styles.img}>
              <Image placeholder="blur" src={cryptoBG} layout="fill" objectFit="cover" alt="nightHome"/>
            </div>
            <div className={styles.context2}>
              <h1>Cryp<span className={styles.green}>t</span>ocurrenc<span className={styles.green}>y</span> </h1>
              <h1>Inves<span className={styles.green}>t</span>ment<span className={styles.green}>.</span></h1>
              <Link href="/invest">Explore 👉</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslides}>
            <div className={styles.img}>
              <Image placeholder="blur" src={goldBG} layout="fill" objectFit="cover" alt="nightHome"/>
            </div>
            <div className={styles.context3}>
              <h1><span className={styles.green}>Jewe</span>l<span className={styles.green}>ry</span> Acces<span className={styles.green}>s</span>ories</h1>
              <h1>& Mining<span className={styles.green}>.</span></h1>
              <Link href="/stocks">Explore 👉</Link>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  );
}
