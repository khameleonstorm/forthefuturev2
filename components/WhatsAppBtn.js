import s from './WhatsAppBtn.module.css'
import { IoLogoWhatsapp } from "react-icons/io"

export default function WhatsAppBtn() {
  return (
    <div className={s.ctn}>
      <a href='http://wa.me/19782291366'>
        <IoLogoWhatsapp />
        <p>Contact Us</p>
      </a>
    </div>
  )
}
