import { useState } from "react";
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

      <div className={styles.container}>
        {bal && bal.map(balance => 
        <div className={styles.card} key={balance.id}>
          <div className={styles.icons}>
            <a>
              <SiCashapp />
            </a>
            {deposit && <MdShowChart size="1.5em" style={{ color: balance.deposit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {profit && <MdShowChart size="1.5em" style={{ color: balance.profit > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
            {withdraw && <MdShowChart size="1.5em" style={{ color: balance.withdraw > 0 ? 'rgb(0, 233, 155)' : 'red'}}/>}
          </div>
          <div className={styles.text}>
            <h2>${withdraw ? balance.withdraw : profit ? balance.profit : balance.deposit}</h2>
            <p>{balance.title}</p>
          </div>
        </div>
        )}
      </div>
    </>
  )
}
