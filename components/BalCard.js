import { useEffect, useState } from "react";
import { MdShowChart } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import styles  from "./BalCard.module.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BalCard({bal}) {
  const [portfolio, setPortfolio] = useState('deposit');
  const [deposit, setDeposit] = useState(true);
  const [profit, setProfit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [mobile, setMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 600) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };

    handleResize()

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const handleChange = (e) => {
    if (e.target.value === "deposit") {
      setDeposit(true)
      setProfit(false)
      setWithdraw(false)
      setPortfolio(e.target.value)
    }
    if (e.target.value === "profit") {
      setProfit(true)
      setWithdraw(false)
      setDeposit(false)
      setPortfolio(e.target.value)
    }
    if (e.target.value === "withdraw") {
      setWithdraw(true)
      setProfit(false)
      setDeposit(false)
      setPortfolio(e.target.value)
    }
  }


  return (
    <>
      {mobile &&
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className={styles.form}>
        <InputLabel id="demo-select-small">Portfolio</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={portfolio}
            label="Portfolio"
            onChange={handleChange}
          >

          <MenuItem value={"deposit"}>Deposit</MenuItem>
          <MenuItem value={"profit"}>Profit</MenuItem>
          <MenuItem value={"withdraw"}>Withdraw</MenuItem>
        </Select>
      </FormControl>
      }


      {!mobile &&
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.icons}>
            <a>
              <SiCashapp />
            </a>
            {deposit && <MdShowChart size="1.5em" style={{ color: bal[0]?.deposit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {profit && <MdShowChart size="1.5em" style={{ color: bal[0]?.profit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {withdraw && <MdShowChart size="1.5em" style={{ color: bal[0]?.withdraw > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
          </div>
          <div className={styles.text}>
            <h2>${bal[0]?.deposit}</h2>
            <p>{bal[0]?.title} Deposit</p>
          </div>
        </div> 

        <div className={styles.card}>
          <div className={styles.icons}>
            <a>
              <SiCashapp />
            </a>
            {deposit && <MdShowChart size="1.5em" style={{ color: bal[0]?.deposit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {profit && <MdShowChart size="1.5em" style={{ color: bal[0]?.profit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {withdraw && <MdShowChart size="1.5em" style={{ color: bal[0]?.withdraw > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
          </div>
          <div className={styles.text}>
            <h2>${bal[0]?.profit}</h2>
            <p>{bal[0]?.title} Profits</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icons}>
            <a>
              <SiCashapp />
            </a>
            {deposit && <MdShowChart size="1.5em" style={{ color: bal[0]?.deposit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {profit && <MdShowChart size="1.5em" style={{ color: bal[0]?.profit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {withdraw && <MdShowChart size="1.5em" style={{ color: bal[0]?.withdraw > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
          </div>
          <div className={styles.text}>
            <h2>${bal[0]?.withdraw}</h2>
            <p>{bal[0]?.title} Withdraws</p>
          </div>
        </div>
      </div>
      }




      {mobile &&
      <div className={styles.container}>
        {deposit &&
        <div className={styles.card}>
          <div className={styles.icons}>
            <a>
              <SiCashapp />
            </a>
            {deposit && <MdShowChart size="1.5em" style={{ color: bal[0]?.deposit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {profit && <MdShowChart size="1.5em" style={{ color: bal[0]?.profit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {withdraw && <MdShowChart size="1.5em" style={{ color: bal[0]?.withdraw > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
          </div>
          <div className={styles.text}>
            <h2>${bal[0]?.deposit}</h2>
            <p>{bal[0]?.title} Deposit</p>
          </div>
        </div> 
        }


        {profit &&
        <div className={styles.card}>
          <div className={styles.icons}>
            <a>
              <SiCashapp />
            </a>
            {deposit && <MdShowChart size="1.5em" style={{ color: bal[0]?.deposit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {profit && <MdShowChart size="1.5em" style={{ color: bal[0]?.profit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {withdraw && <MdShowChart size="1.5em" style={{ color: bal[0]?.withdraw > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
          </div>
          <div className={styles.text}>
            <h2>${bal[0]?.profit}</h2>
            <p>{bal[0]?.title} Profits</p>
          </div>
        </div>
        }



        {withdraw &&
        <div className={styles.card}>
          <div className={styles.icons}>
            <a>
              <SiCashapp />
            </a>
            {deposit && <MdShowChart size="1.5em" style={{ color: bal[0]?.deposit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {profit && <MdShowChart size="1.5em" style={{ color: bal[0]?.profit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {withdraw && <MdShowChart size="1.5em" style={{ color: bal[0]?.withdraw > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
          </div>
          <div className={styles.text}>
            <h2>${bal[0]?.withdraw}</h2>
            <p>{bal[0]?.title} Withdraws</p>
          </div>
        </div>
        }
      </div>
      }
    </>
  )
}
