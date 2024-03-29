import { useState, useRef } from "react";
import { wallet } from "../utils/text"
import Image from "next/image"
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VscCommentDiscussion } from "react-icons/vsc";
import { VscCopy } from "react-icons/vsc";
import styles from "./Funding.module.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function Funding() {
  const [coin, setCoin] = useState(0);
  const [copy, setCopy] = useState(true);
  const [trust, setTrust] = useState(false);
  const [phone, setPhone] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const textAreaRef = useRef(null);


  const handleChange = (e) => {
    setCoin(e.target.value)
  }

  const handleClick = (e) => {
    if (e === "copy") {
      setCopy(true)
      setTrust(false)
      setPhone(false)
    }
    if (e === "trust") {
      setTrust(true)
      setCopy(false)
      setPhone(false)
    }
    if (e === "phone") {
      setPhone(true)
      setTrust(false)
      setCopy(false)
    }
  }


  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false)
      }, 3000);
    } catch (err) {
      setCopySuccess(err.message);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className={styles.form}>
          <InputLabel id="demo-select-small">Coin</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={coin}
              label="Coin"
              onChange={handleChange}
              style={{fontSize: ".8rem"}}
            >

            <MenuItem value={0}>Bitcoin</MenuItem>
            <MenuItem value={1}>Ethereum</MenuItem>
            <MenuItem value={2}>USDT</MenuItem>
            <MenuItem value={3}>DOGE</MenuItem>
            <MenuItem value={4}>TRX</MenuItem>
            <MenuItem value={5}>BNB</MenuItem>
          </Select>
        </FormControl>

        <div className={styles.qr}>
            <Image priority src={`/assets/qr${coin+1}.jpg`} width={200} height={200} layout='responsive' alt="QR code"/>
            <input
            type="text"
            ref={textAreaRef}
            value={wallet[coin].address}
            disabled
            />
        </div>

        <div className={styles.text}>
          <p>Send only <span>{wallet[coin].title}({wallet[coin].network}) </span>to this address, sending any other coin may result to permanent loss</p>
        </div>

        <div className={styles.icons}>
          <div className={styles.icon}>
            <a>
              <VscCopy onClick={() => copyToClipBoard(wallet[coin].address)} size="4em" style={copy && {color: "#00e99b"}}/>
            </a>
            {!copySuccess && <p>Copy</p>}
            {copySuccess && <p>Copied!</p>}
          </div>
          <div className={styles.icon}>
            <a href={wallet[coin].link}>
              <VscWorkspaceTrusted size="3.5em"/>
            </a>
            <p>Trust-Wallet</p>
          </div>
          <div className={styles.icon}>
            <a>
              <VscCommentDiscussion size="3.5em"/>
            </a>
            <p>Contact-Us</p>
          </div>
        </div>

      </div>
    </div>
  )
  }
