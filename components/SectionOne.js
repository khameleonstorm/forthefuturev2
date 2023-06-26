import s from "./SectionOne.module.css";
import Image from "next/image";


const SectionOne = ({ video, reversed, data }) => {

  return (
      <div className={s.ctn} style={reversed? {background: "white"} : {}}>
        <div className={reversed? s.wrp2 : s.wrp}>
          <div className={s.imgcard}>
            <div className={s.imgbg}>
              <div className={s.img}>
                <Image loading="eager" src={data.imageUrl} layout="fill" objectFit="cover" alt="invest" />
              </div>
            </div>
          </div>

          <div className={s.text}>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
          </div>
        </div>
      </div>
  );
}

export default SectionOne