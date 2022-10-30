import styles from "./SectionOne.module.css";
import Image from "next/image";
import React from "react";
import { texts } from "../utils/text";




const SectionOne = () => {

  return (texts && texts.map(text => 
      <div className={text.reversed ? styles.container2 : styles.container} key={text.id}>
        <div className={styles.imgcard}>
          <div className={styles.imgbg} style={{ background: text.background}}>
            <div className={styles.img}>
              <Image 
              loading="eager"
              src={text.imageUrl}
              layout="fill"
              objectFit="cover"
              alt="fot the future, investment, gold and stocks"
              />
            </div>
          </div>
        </div>

        <div className={styles.text}>
          {!text.reversed && <span className={styles.borderleft}></span>}
          <span className={styles.border}></span>
          <div>
            <h1>{text.title}</h1>
            <p>{text.desc}</p>
          </div>
          {text.reversed && <span className={styles.borderright}></span>}
        </div>
      </div>
  ))
}

export default SectionOne