import s from "./SectionOne.module.css";
import Image from "next/image";


const SectionOne = ({ reversed, data }) => {

  return (
      <div className={s.ctn} style={reversed? {background: "white"} : {}}>
        <div className={reversed? s.wrp2 : s.wrp}>
          <div className={s.imgcard}>
            <div className={s.imgbg}>
              <div className={s.img}>
                {!data.video && <Image loading="eager" src={data.url} layout="fill" objectFit="cover" alt="invest" />}

                {data.video && <iframe className={s.iframe} src={data.url} title={data.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
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


// <video autoPlay loop style={{ width: '500px', height: '500px' }}>
// <source src="/blue.mp4" />
// </video>