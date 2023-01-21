import future from "../public/assets/future.jpg";
import keyhand from "../public/assets/keyhand.jpg";
import cryptopiggy from "../public/assets/cryptopiggy.jpg";
import diamondhand from "../public/assets/holdingdiamond.jpg";

export  const texts = [
  {
    id: 1,
    title: "WHY CHOOSE US?",
    desc: "We enhance our clients’ experiences and provide them with the right tools, unbiased advice, and specialists for each service, we established a structure unlike traditional real estate companies and other investment companies. Furthermore, buyers will have access to a plethora of services and specialists for post-home purchasing assistance, cryptocurrency and stock investment",
    reversed: true,
    imageUrl: future,
    background: "#EDFFF1"
  },
  {
    id: 2,
    title: "OWN A HOME!",
    desc: "Real estate purchase could be very problematic and likely the largest investments in your life, it is important that you select the right agent, know the neighborhoods, and thoroughly understand the real estate transaction process. Our agents’ knowledge and training makes them experts in negotiating the best purchase price for our clients.",
    reversed: false,
    imageUrl: keyhand,
    background: "#ffe4c466"
  },
  {
    id: 3,
    title: "CRYPTOCURRENCY INVESTMENT",
    desc: "4Dfuture trading engine has been designed to meet the highest online-trading industry standards. All systems have been uniquely coded to minimize latency and increase order execution speed. System automatically monitors all buying power factor, maximum order size, maximum position size after every order placement. 4Dfuture prides itself on having one of the most advanced and reliable trading software on the market.",
    reversed: true,
    imageUrl: cryptopiggy,
    background: "#BAFFC9"
 
  },
  {
    id: 4,
    title: "INVEST IN GOLD & ETFs ",
    desc: "Stock traders demand speed, reliability, and flexibility. Our platforms deliver, and our team of experts is eager to help you along the way.",
    reversed: false,
    imageUrl: diamondhand,
    background: "#FDF6F5",
  }
]



export const plans = [
  {
    id: 1,
    amount: "$0 - $1k",
    title: "Basic",
    desc: "Suitable for all",
    falsepoints: ["Deposit fee"],
    truepoints: ["Pro Personalized Portfolio", "Auto Renew", "Yield per month: 60%", "Yield per day: 2.0%"],
    background: "#00A3FF", 
  },
  {
    id: 2,
    title: "Pro",
    amount: "$1k - $100k",
    desc: "Increased yield percentage",
    falsepoints: ["Management fee", "Deposit fee"],
    truepoints: ["Personalized Portfolio", "Auto Renew", "Yield per month: 158%", "Yield per day: 5.3%", "Trading Signal"],
    background: "#FFE600",   
  },
  {
    id: 3,
    amount: "$100k+",
    title: "Executive",
    desc: "Exclusive benifits and privileges",
    falsepoints: ["Management fee", "Deposit fee"],
    truepoints: ["Personalized Portfolio", "Trading Signal", "Defi insights", "Yield per month: 450%", "Yield per day: 15.0%"],
    background: "#00847C",     
  }
]



export const plans2 = [
  {
    id: 1,
    title: "Basic",
    amount: "$1k+",
    desc: "Max yield percentage",
    falsepoints: ["Management fee", "Deposit fee", "Limited profits"],
    truepoints: ["Personalized Portfolio", "Auto Renew", "Yield per month: 128%", "Yield per day: 4.3%"],
    background: "#FFE600",   
  },
  {
    id: 2,
    amount: "$100k+",
    title: "Plus",
    desc: "Increased yield percentage",
    falsepoints: ["Management fee", "Deposit fee"],
    truepoints: ["Personalized Portfolio", "Trading Signal", "Defi insights", "Yield per month: 450%", "Yield per day: 15.0%"],
    background: "#00847C",     
  }
]




export const about = [
  {
    id: 1,
    title: "About Us",
    span: ["We started by providing smart, simple investing, without the high fees and account minimums associated with traditional investment management. We invest your money in a globally diversified portfolio of low-cost index funds, and our cutting-edge technology helps you earn the best possible return, while optimizing your tax bill. This means we do things like automatic rebalancing, dividend reinvesting, and tax loss harvesting — services that were only available to the ultra rich until now or that most people found too time-consuming and tedious to do on their own.", 

    "Our expert financial advisors are always available when you need them. They can help plan your financial milestones and answer questions you might have about potential risks or what sort of investment accounts you should have.",

    "Investing is just one part of your financial picture. So, we've introduced more ways to reach your goals and manage your money. High interest savings. Commission-free trading. And features — like automatically investing your spare change — that make it easier to save for your future. That's because we believe that everyone should have access to the tools they need to make smart financial choices."
  ]  
  },
  {
    id: 2,
    title: "Who We Are",
    span: [" 4thefuture is backed by a team of world-class financial experts and the best technology talent. Our talented team of software engineers, designers, and data scientists have previously worked at such companies as Amazon, Google, and Apple.", 

    "Our Investment Advisory Committee are recognized thought leaders in the investment community. They play an advisory role in Wealthsimple's investment management process and serve as a sounding board for 4thefuture's management team."
  ]  
  },

]


export const locs = [
  {
    id: 1,
    city: "Phoenix",
    state: "AZ",
  },
  {
    id: 2,
    city: "	Birmingham",
    state: "AL",
  },
  {
    id: 3,
    city: "LosAngeles",
    state: "CA",
  },
  {
    id: 4,
    city: "Denver",
    state: "CO",
  },
  {
    id: 5,
    city: "Miami",
    state: "FL",
  },
  {
    id: 6,
    city: "Atlanta",
    state: " GA",
  },
  {
    id: 7,
    city: "Honolulu",
    state: "HI",
  },
  {
    id: 8,
    city: "Chicago",
    state: " IL",
  },
  {
    id: 9,
    city: "Frankfort",
    state: "KY",
  },
  {
    id: 10,
    city: "NewOrleans",
    state: "LA",
  },
  {
    id: 11,
    city: "Detroit",
    state: "MI",
  },
  {
    id: 12,
    city: "Minneapolis",
    state: "MN",
  },
  {
    id: 13,
    city: "KansasCity",
    state: "MO",
  },
  {
    id: 14,
    city: "LasVegas",
    state: "NV",
  },
  {
    id: 15,
    city: "Manchester",
    state: "NH",
  },
  {
    id: 16,
    city: "	NewYork",
    state: "NY",
  },
  {
    id: 17,
    city: "OklahomaCity",
    state: "OK",
  },
  {
    id: 18,
    city: "Houston",
    state: "TX",
  },
  {
    id: 19,
    city: "Montgomery",
    state: "VA",
  },
  {
    id: 20,
    city: "Columbia",
    state: "SC",
  },
  {
    id: 21,
    city: "Mobile",
    state: "AL",
  },
  {
    id: 22,
    city: "Huntsville",
    state: "AL",
  },
]




export const renderChart = () => {
  new TradingView.MediumWidget(
  {
  "symbols": [
    [
      "Gold",
      "TVC:GOLD|1D"
    ],
    [
      "Bitcoin",
      "BITSTAMP:BTCUSD|1D"
    ],
    [
      "Tether",
      "CRYPTOCAP:USDT|1D"
    ],
    [
      "Diamond",
      "BSE:DIAMOND|1D"
    ],
    [
      "Google",
      "CAPITALCOM:GOOG|12M"
    ],
    [
      "Apple",
      "NASDAQ:AAPL|12M"
    ],
    [
      "Microsoft",
      "NASDAQ:MSFT|12M"
    ]
  ],
  "chartOnly": false,
  "width": "100%",
  "height": "100%",
  "locale": "en",
  "colorTheme": "dark",
  "autosize": true,
  "showVolume": true,
  "hideDateRanges": false,
  "scalePosition": "right",
  "scaleMode": "Normal",
  "noTimeScale": true,
  "valuesTracking": "5",
  "chartType": "line",
  "fontColor": "rgba(120, 123, 134, 0.57)",
  "gridLineColor": "rgba(240, 243, 250, 0.03)",
  "volumeUpColor": "rgba(34, 171, 148, 0.5)",
  "volumeDownColor": "rgba(247, 82, 95, 0.5)",
  "backgroundColor": "rgba(0, 0, 0, 1)",
  "container_id": "tradingview_70c8b"
})
}

export const wallet = [
  {
    id: 1,
    title: "Bitcoin",
    network: "BTC",
    address: "bc1q3nk3jmzkkzf6wlkv2r3wyfppxgc4udt49ynfk4",
    link: "https://link.trustwallet.com/send?asset=c0&address=bc1q3nk3jmzkkzf6wlkv2r3wyfppxgc4udt49ynfk4",
  },
  {
    id: 2,
    title: "Ethereum",
    network: "ETH",
    address: "0x96a1B418bdD1C4580FA2bBD388398f7E14D3b8Dc",
    link: "https://link.trustwallet.com/send?address=0x96a1B418bdD1C4580FA2bBD388398f7E14D3b8Dc&asset=c60",
  },
  {
    id: 3,
    title: "BNB",
    network: "BNB",
    address: "bnb16x26el433xhn0qmys7rv8lxvxqqmexfhgty8ux",
    link: "https://link.trustwallet.com/send?address=bnb16x26el433xhn0qmys7rv8lxvxqqmexfhgty8ux&asset=c714",
  },
];

export const message = {
  success: "Order sent successfully",
  failed: "Order failed due to insufficient funds",
}

export const volumes = [
  { time: '2018-10-19', value: 19103293.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-22', value: 21737523.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-23', value: 29328713.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-24', value: 37435638.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-25', value: 25269995.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-10-26', value: 24973311.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-10-29', value: 22103692.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-30', value: 25231199.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-31', value: 24214427.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-01', value: 22533201.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-02', value: 14734412.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-05', value: 12733842.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-06', value: 12371207.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-07', value: 14891287.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-08', value: 12482392.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-09', value: 17365762.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-12', value: 13236769.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-13', value: 13047907.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-14', value: 18288710.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-15', value: 17147123.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-16', value: 19470986.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-19', value: 18405731.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-20', value: 22028957.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-21', value: 18482233.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-23', value: 7009050.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-26', value: 12308876.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-27', value: 14118867.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-28', value: 18662989.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-29', value: 14763658.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-30', value: 31142818.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-03', value: 27795428.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-04', value: 21727411.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-06', value: 26880429.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-07', value: 16948126.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-10', value: 16603356.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-11', value: 14991438.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-12', value: 18892182.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-13', value: 15454706.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-14', value: 13960870.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-17', value: 18902523.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-18', value: 18895777.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-19', value: 20968473.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-20', value: 26897008.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-21', value: 55413082.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-24', value: 15077207.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-26', value: 17970539.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-27', value: 17530977.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-28', value: 14771641.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-31', value: 15331758.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-02', value: 13969691.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-03', value: 19245411.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-04', value: 17035848.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-07', value: 16348982.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-08', value: 21425008.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-09', value: 18136000.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-10', value: 14259910.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-11', value: 15801548.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-14', value: 11342293.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-15', value: 10074386.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-16', value: 13411691.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-17', value: 15223854.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-18', value: 16802516.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-22', value: 18284771.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-23', value: 15109007.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-24', value: 12494109.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-25', value: 17806822.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-28', value: 25955718.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-29', value: 33789235.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-30', value: 27260036.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-31', value: 28585447.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-01', value: 13778392.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-04', value: 15818901.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-05', value: 14124794.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-06', value: 11391442.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-07', value: 12436168.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-08', value: 12011657.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-11', value: 9802798.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-12', value: 11227550.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-13', value: 11884803.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-14', value: 11190094.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-15', value: 15719416.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-19', value: 12272877.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-20', value: 11379006.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-21', value: 14680547.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-22', value: 12534431.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-25', value: 15051182.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-26', value: 12005571.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-27', value: 8962776.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-28', value: 15742971.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-01', value: 10942737.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-04', value: 13674737.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-05', value: 15749545.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-06', value: 13935530.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-07', value: 12644171.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-08', value: 10646710.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-11', value: 13627431.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-12', value: 12812980.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-13', value: 14168350.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-14', value: 12148349.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-15', value: 23715337.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-18', value: 12168133.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-19', value: 13462686.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-20', value: 11903104.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-21', value: 10920129.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-22', value: 25125385.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-25', value: 15463411.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-26', value: 12316901.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-27', value: 13290298.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-28', value: 20547060.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-29', value: 17283871.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-01', value: 16331140.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-02', value: 11408146.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-03', value: 15491724.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-04', value: 8776028.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-05', value: 11497780.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-08', value: 11680538.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-09', value: 10414416.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-10', value: 8782061.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-11', value: 9219930.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-12', value: 10847504.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-15', value: 7741472.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-16', value: 10239261.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-17', value: 15498037.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-18', value: 13189013.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-22', value: 11950365.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-23', value: 23488682.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-24', value: 13227084.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-25', value: 17425466.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-26', value: 16329727.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-29', value: 13984965.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-30', value: 15469002.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-01', value: 11627436.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-02', value: 14435436.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-03', value: 9388228.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-06', value: 10066145.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-07', value: 12963827.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-08', value: 12086743.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-09', value: 14835326.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-10', value: 10707335.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-13', value: 13759350.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-14', value: 12776175.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-15', value: 10806379.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-16', value: 11695064.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-17', value: 14436662.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-20', value: 20910590.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-21', value: 14016315.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-22', value: 11487448.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-23', value: 11707083.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-24', value: 8755506.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-28', value: 3097125.00, color: 'rgba(0, 150, 136, 0.8)' },
]

export const chartData = [
  { time: '2018-10-19', value: 54.90 },
  { time: '2018-10-22', value: 54.98 },
  { time: '2018-10-23', value: 57.21 },
  { time: '2018-10-24', value: 57.42 },
  { time: '2018-10-25', value: 56.43 },
  { time: '2018-10-26', value: 55.51 },
  { time: '2018-10-29', value: 56.48 },
  { time: '2018-10-30', value: 58.18 },
  { time: '2018-10-31', value: 57.09 },
  { time: '2018-11-01', value: 56.05 },
  { time: '2018-11-02', value: 56.63 },
  { time: '2018-11-05', value: 57.21 },
  { time: '2018-11-06', value: 57.21 },
  { time: '2018-11-07', value: 57.65 },
  { time: '2018-11-08', value: 58.27 },
  { time: '2018-11-09', value: 58.46 },
  { time: '2018-11-12', value: 58.72 },
  { time: '2018-11-13', value: 58.66 },
  { time: '2018-11-14', value: 58.94 },
  { time: '2018-11-15', value: 59.08 },
  { time: '2018-11-16', value: 60.21 },
  { time: '2018-11-19', value: 60.62 },
  { time: '2018-11-20', value: 59.46 },
  { time: '2018-11-21', value: 59.16 },
  { time: '2018-11-23', value: 58.64 },
  { time: '2018-11-26', value: 59.17 },
  { time: '2018-11-27', value: 60.65 },
  { time: '2018-11-28', value: 60.06 },
  { time: '2018-11-29', value: 59.45 },
  { time: '2018-11-30', value: 60.30 },
  { time: '2018-12-03', value: 58.16 },
  { time: '2018-12-04', value: 58.09 },
  { time: '2018-12-06', value: 58.08 },
  { time: '2018-12-07', value: 57.68 },
  { time: '2018-12-10', value: 58.27 },
  { time: '2018-12-11', value: 58.85 },
  { time: '2018-12-12', value: 57.25 },
  { time: '2018-12-13', value: 57.09 },
  { time: '2018-12-14', value: 57.08 },
  { time: '2018-12-17', value: 55.95 },
  { time: '2018-12-18', value: 55.65 },
  { time: '2018-12-19', value: 55.86 },
  { time: '2018-12-20', value: 55.07 },
  { time: '2018-12-21', value: 54.92 },
  { time: '2018-12-24', value: 53.05 },
  { time: '2018-12-26', value: 54.44 },
  { time: '2018-12-27', value: 55.15 },
  { time: '2018-12-28', value: 55.27 },
  { time: '2018-12-31', value: 56.22 },
  { time: '2019-01-02', value: 56.02 },
  { time: '2019-01-03', value: 56.22 },
  { time: '2019-01-04', value: 56.36 },
  { time: '2019-01-07', value: 56.72 },
  { time: '2019-01-08', value: 58.38 },
  { time: '2019-01-09', value: 57.05 },
  { time: '2019-01-10', value: 57.60 },
  { time: '2019-01-11', value: 58.02 },
  { time: '2019-01-14', value: 58.03 },
  { time: '2019-01-15', value: 58.10 },
  { time: '2019-01-16', value: 57.08 },
  { time: '2019-01-17', value: 56.83 },
  { time: '2019-01-18', value: 57.09 },
  { time: '2019-01-22', value: 56.99 },
  { time: '2019-01-23', value: 57.76 },
  { time: '2019-01-24', value: 57.07 },
  { time: '2019-01-25', value: 56.40 },
  { time: '2019-01-28', value: 55.07 },
  { time: '2019-01-29', value: 53.28 },
  { time: '2019-01-30', value: 54.00 },
  { time: '2019-01-31', value: 55.06 },
  { time: '2019-02-01', value: 54.55 },
  { time: '2019-02-04', value: 54.04 },
  { time: '2019-02-05', value: 54.14 },
  { time: '2019-02-06', value: 53.79 },
  { time: '2019-02-07', value: 53.57 },
  { time: '2019-02-08', value: 53.95 },
  { time: '2019-02-11', value: 54.05 },
  { time: '2019-02-12', value: 54.42 },
  { time: '2019-02-13', value: 54.48 },
  { time: '2019-02-14', value: 54.03 },
  { time: '2019-02-15', value: 55.16 },
  { time: '2019-02-19', value: 55.44 },
  { time: '2019-02-20', value: 55.76 },
  { time: '2019-02-21', value: 56.15 },
  { time: '2019-02-22', value: 56.92 },
  { time: '2019-02-25', value: 56.78 },
  { time: '2019-02-26', value: 56.64 },
  { time: '2019-02-27', value: 56.72 },
  { time: '2019-02-28', value: 56.92 },
  { time: '2019-03-01', value: 56.96 },
  { time: '2019-03-04', value: 56.24 },
  { time: '2019-03-05', value: 56.08 },
  { time: '2019-03-06', value: 55.68 },
  { time: '2019-03-07', value: 56.30 },
  { time: '2019-03-08', value: 56.53 },
  { time: '2019-03-11', value: 57.58 },
  { time: '2019-03-12', value: 57.43 },
  { time: '2019-03-13', value: 57.66 },
  { time: '2019-03-14', value: 57.95 },
  { time: '2019-03-15', value: 58.39 },
  { time: '2019-03-18', value: 58.07 },
  { time: '2019-03-19', value: 57.50 },
  { time: '2019-03-20', value: 57.67 },
  { time: '2019-03-21', value: 58.29 },
  { time: '2019-03-22', value: 59.76 },
  { time: '2019-03-25', value: 60.08 },
  { time: '2019-03-26', value: 60.63 },
  { time: '2019-03-27', value: 60.88 },
  { time: '2019-03-28', value: 59.08 },
  { time: '2019-03-29', value: 59.13 },
  { time: '2019-04-01', value: 59.09 },
  { time: '2019-04-02', value: 58.53 },
  { time: '2019-04-03', value: 58.87 },
  { time: '2019-04-04', value: 58.99 },
  { time: '2019-04-05', value: 59.09 },
  { time: '2019-04-08', value: 59.13 },
  { time: '2019-04-09', value: 58.40 },
  { time: '2019-04-10', value: 58.61 },
  { time: '2019-04-11', value: 58.56 },
  { time: '2019-04-12', value: 58.74 },
  { time: '2019-04-15', value: 58.71 },
  { time: '2019-04-16', value: 58.79 },
  { time: '2019-04-17', value: 57.78 },
  { time: '2019-04-18', value: 58.04 },
  { time: '2019-04-22', value: 58.37 },
  { time: '2019-04-23', value: 57.15 },
  { time: '2019-04-24', value: 57.08 },
  { time: '2019-04-25', value: 55.85 },
  { time: '2019-04-26', value: 56.58 },
  { time: '2019-04-29', value: 56.84 },
  { time: '2019-04-30', value: 57.19 },
  { time: '2019-05-01', value: 56.52 },
  { time: '2019-05-02', value: 56.99 },
  { time: '2019-05-03', value: 57.24 },
  { time: '2019-05-06', value: 56.91 },
  { time: '2019-05-07', value: 56.63 },
  { time: '2019-05-08', value: 56.38 },
  { time: '2019-05-09', value: 56.48 },
  { time: '2019-05-10', value: 56.91 },
  { time: '2019-05-13', value: 56.75 },
  { time: '2019-05-14', value: 56.55 },
  { time: '2019-05-15', value: 56.81 },
  { time: '2019-05-16', value: 57.38 },
  { time: '2019-05-17', value: 58.09 },
  { time: '2019-05-20', value: 59.01 },
  { time: '2019-05-21', value: 59.50 },
  { time: '2019-05-22', value: 59.25 },
  { time: '2019-05-23', value: 58.87 },
  { time: '2019-05-24', value: 59.32 },
  { time: '2019-05-28', value: 59.57 },
]










export const detriotHouses = {
  "data": {
    "results": [
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/3a3c9625ebfeb4fadf397c69e8595048l-m1843212510s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-30T13:16:03Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "fireplace",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "rental_property"
        ],
        "permalink": "11565-Rossiter-St_Detroit_MI_48224_M47775-18145",
        "status": "for_sale",
        "list_date": "2022-10-30T17:17:33Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1946,
          "sold_price": 65000,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 5663,
          "sqft": 1274,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "EXP Realty, LLC",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 99900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4777518145",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99939358234406
              },
              {
                "label": "road_view",
                "probability": 0.92554432153702
              },
              {
                "label": "yard",
                "probability": 0.99884307384491
              },
              {
                "label": "house_view",
                "probability": 0.65658003091812
              },
              {
                "label": "house_view",
                "probability": 0.96647137403488
              }
            ],
            "href": "https://ap.rdcpix.com/3a3c9625ebfeb4fadf397c69e8595048l-m1843212510s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99968802928925
              },
              {
                "label": "road_view",
                "probability": 0.87886011600494
              },
              {
                "label": "yard",
                "probability": 0.99946242570877
              },
              {
                "label": "house_view",
                "probability": 0.83052694797516
              },
              {
                "label": "house_view",
                "probability": 0.98053359985352
              }
            ],
            "href": "https://ap.rdcpix.com/3a3c9625ebfeb4fadf397c69e8595048l-m1060776092s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.97906816005707
              },
              {
                "label": "porch",
                "probability": 0.97468554973602
              },
              {
                "label": "road_view",
                "probability": 0.49206027388573
              },
              {
                "label": "house_view",
                "probability": 0.96610736846924
              },
              {
                "label": "house_view",
                "probability": 0.9986909031868
              }
            ],
            "href": "https://ap.rdcpix.com/3a3c9625ebfeb4fadf397c69e8595048l-m3961252292s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "garage",
                "probability": 0.7013276219368
              },
              {
                "label": "road_view",
                "probability": 0.99420046806335
              },
              {
                "label": "yard",
                "probability": 0.97063821554184
              }
            ],
            "href": "https://ap.rdcpix.com/3a3c9625ebfeb4fadf397c69e8595048l-m678989659s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "garage",
                "probability": 0.7013276219368
              },
              {
                "label": "road_view",
                "probability": 0.99420046806335
              },
              {
                "label": "yard",
                "probability": 0.97063821554184
              }
            ],
            "href": "https://ap.rdcpix.com/3a3c9625ebfeb4fadf397c69e8595048l-m678989659s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949396980",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "606724265",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949396980",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48224",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.950236,
              "lat": 42.424466
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "11565 Rossiter St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=11565%20Rossiter%20St%2C%20Detroit%2C%20MI%2048224&size=640x480&source=outdoor&signature=QvwGuzpy9QRSA-3N5IkCQWwSWeg=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/ac11996a0b548d404029dce6f4b398d0l-m2026435109s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-30T12:37:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "rental_property"
        ],
        "permalink": "11276-Somerset-Ave_Detroit_MI_48224_M40694-85537",
        "status": "for_sale",
        "list_date": "2022-10-30T16:38:24Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1941,
          "sold_price": 112000,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 4792,
          "sqft": 1344,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "EXP Realty, LLC",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 94900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4069485537",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99894911050797
              },
              {
                "label": "porch",
                "probability": 0.67163419723511
              },
              {
                "label": "yard",
                "probability": 0.9997290968895
              },
              {
                "label": "house_view",
                "probability": 0.95821315050125
              },
              {
                "label": "house_view",
                "probability": 0.9630714058876
              }
            ],
            "href": "https://ap.rdcpix.com/ac11996a0b548d404029dce6f4b398d0l-m2026435109s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.97172337770462
              },
              {
                "label": "road_view",
                "probability": 0.89056402444839
              },
              {
                "label": "yard",
                "probability": 0.93405044078827
              },
              {
                "label": "house_view",
                "probability": 0.93724489212036
              },
              {
                "label": "house_view",
                "probability": 0.66959983110428
              }
            ],
            "href": "https://ap.rdcpix.com/ac11996a0b548d404029dce6f4b398d0l-m4135119811s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "garage",
                "probability": 0.94046455621719
              },
              {
                "label": "road_view",
                "probability": 0.89037156105042
              },
              {
                "label": "yard",
                "probability": 0.73114305734634
              }
            ],
            "href": "https://ap.rdcpix.com/ac11996a0b548d404029dce6f4b398d0l-m2582481429s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99779921770096
              },
              {
                "label": "road_view",
                "probability": 0.60888338088989
              },
              {
                "label": "yard",
                "probability": 0.99613523483276
              },
              {
                "label": "house_view",
                "probability": 0.74049371480942
              },
              {
                "label": "house_view",
                "probability": 0.9625831246376
              }
            ],
            "href": "https://ap.rdcpix.com/ac11996a0b548d404029dce6f4b398d0l-m3063492329s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949396715",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "616477425",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949396715",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48224",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.942652,
              "lat": 42.424499
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "11276 Somerset Ave"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=11276%20Somerset%20Ave%2C%20Detroit%2C%20MI%2048224&size=640x480&source=outdoor&signature=4uWTjakkSE6kucgHBwMxju2I7Uk=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/9ea2d181821bd3217655bb53638a5690l-m1172171699s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-30T11:34:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            },
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "single_story",
          "garage_1_or_more",
          "rental_property"
        ],
        "permalink": "19429-Spencer-St_Detroit_MI_48234_M45532-94044",
        "status": "for_sale",
        "list_date": "2022-10-30T15:35:38Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1940,
          "sold_price": 6000,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 3920,
          "sqft": 1029,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 1,
          "beds": 2,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Keller Williams Realty-Great Lakes",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 37000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4553294044",
        "photos": [
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.7509343624115
              },
              {
                "label": "house_view",
                "probability": 0.93178659677505
              },
              {
                "label": "porch",
                "probability": 0.99460273981094
              },
              {
                "label": "yard",
                "probability": 0.82315015792847
              },
              {
                "label": "house_view",
                "probability": 0.5954921245575
              },
              {
                "label": "house_view",
                "probability": 0.99923229217529
              }
            ],
            "href": "https://ap.rdcpix.com/9ea2d181821bd3217655bb53638a5690l-m1172171699s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": null,
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949396311",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "532441161",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "532082317",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949396311",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48234",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.026733,
              "lat": 42.437806
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "19429 Spencer St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=19429%20Spencer%20St%2C%20Detroit%2C%20MI%2048234&size=640x480&source=outdoor&signature=lEbdXdU_CGEWIzYWKpMDleIIgkU=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/746b63d8c59a3b645b3e0ffea3046656l-m2062342915s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-30T11:30:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            },
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "rental_property"
        ],
        "permalink": "19400-Spencer-St_Detroit_MI_48234_M45599-72871",
        "status": "for_sale",
        "list_date": "2022-10-30T15:32:24Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1947,
          "sold_price": 28700,
          "baths_full": 2,
          "name": null,
          "baths_half": null,
          "lot_sqft": 4356,
          "sqft": 1359,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Keller Williams Realty-Great Lakes",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 47000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4559972871",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99786961078644
              },
              {
                "label": "porch",
                "probability": 0.9999805688858
              },
              {
                "label": "yard",
                "probability": 0.983254134655
              },
              {
                "label": "house_view",
                "probability": 0.96176385879517
              },
              {
                "label": "house_view",
                "probability": 0.97779697179794
              }
            ],
            "href": "https://ap.rdcpix.com/746b63d8c59a3b645b3e0ffea3046656l-m2062342915s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949396298",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "569193557",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "569234597",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "571499077",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949396298",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48234",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.026099,
              "lat": 42.437374
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "19400 Spencer St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=19400%20Spencer%20St%2C%20Detroit%2C%20MI%2048234&size=640x480&source=outdoor&signature=NQfIKgFWyxvAjqxMnGW_hULId1c=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/a0c039afb619f978dd2153bb58c0d2c1l-m3572716169s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-30T13:37:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "rental_property"
        ],
        "permalink": "19181-Cooley-St_Detroit_MI_48219_M40817-90116",
        "status": "for_sale",
        "list_date": "2022-10-30T03:17:38Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1951,
          "sold_price": 82000,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 6098,
          "sqft": 1175,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "EXP Realty, LLC",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 104900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4081790116",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99921786785126
              },
              {
                "label": "porch",
                "probability": 0.88212561607361
              },
              {
                "label": "yard",
                "probability": 0.99994647502899
              },
              {
                "label": "house_view",
                "probability": 0.99222683906555
              },
              {
                "label": "house_view",
                "probability": 0.52732545137405
              }
            ],
            "href": "https://ap.rdcpix.com/a0c039afb619f978dd2153bb58c0d2c1l-m3572716169s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99761700630188
              },
              {
                "label": "porch",
                "probability": 0.9969379901886
              },
              {
                "label": "yard",
                "probability": 0.999640583992
              },
              {
                "label": "house_view",
                "probability": 0.98926335573196
              },
              {
                "label": "house_view",
                "probability": 0.97115290164948
              }
            ],
            "href": "https://ap.rdcpix.com/a0c039afb619f978dd2153bb58c0d2c1l-m3195651540s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.99561488628387
              }
            ],
            "href": "https://ap.rdcpix.com/a0c039afb619f978dd2153bb58c0d2c1l-m445659135s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "dining_room",
                "probability": 0.99833101034164
              }
            ],
            "href": "https://ap.rdcpix.com/a0c039afb619f978dd2153bb58c0d2c1l-m2465444272s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99154388904572
              }
            ],
            "href": "https://ap.rdcpix.com/a0c039afb619f978dd2153bb58c0d2c1l-m2473815036s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949392477",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            }
          ]
        },
        "listing_id": "2949392477",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48219",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.260038,
              "lat": 42.430379
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "19181 Cooley St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=19181%20Cooley%20St%2C%20Detroit%2C%20MI%2048219&size=640x480&source=outdoor&signature=NXDjAp4HTBM6FafsC7nPKXHTWqg=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/2e415429f34a8b8ada7388d88c9d1f06l-m2745672652s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T23:02:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "family_room",
          "fireplace",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "fenced_yard",
          "library"
        ],
        "permalink": "16750-Plainview-Ave_Detroit_MI_48219_M31004-11116",
        "status": "for_sale",
        "list_date": "2022-10-30T03:04:16Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1941,
          "sold_price": 10000,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 6534,
          "sqft": 1474,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Treasure Homes, Inc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 145000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3100411116",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99944716691971
              },
              {
                "label": "road_view",
                "probability": 0.9887490272522
              },
              {
                "label": "yard",
                "probability": 0.99930799007416
              },
              {
                "label": "house_view",
                "probability": 0.92856776714325
              },
              {
                "label": "house_view",
                "probability": 0.984041929245
              }
            ],
            "href": "https://ap.rdcpix.com/2e415429f34a8b8ada7388d88c9d1f06l-m2745672652s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.98902380466461
              },
              {
                "label": "porch",
                "probability": 0.70151549577713
              },
              {
                "label": "yard",
                "probability": 0.99952185153961
              },
              {
                "label": "house_view",
                "probability": 0.92009353637695
              },
              {
                "label": "house_view",
                "probability": 0.88023614883423
              }
            ],
            "href": "https://ap.rdcpix.com/2e415429f34a8b8ada7388d88c9d1f06l-m1184830900s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.85748624801636
              }
            ],
            "href": "https://ap.rdcpix.com/2e415429f34a8b8ada7388d88c9d1f06l-m3763195324s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99958151578903
              }
            ],
            "href": "https://ap.rdcpix.com/2e415429f34a8b8ada7388d88c9d1f06l-m3465454020s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99999630451202
              }
            ],
            "href": "https://ap.rdcpix.com/2e415429f34a8b8ada7388d88c9d1f06l-m1529583061s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949392381",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2932124841",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949392381",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48219",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.236508,
              "lat": 42.41271
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "16750 Plainview Ave"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=16750%20Plainview%20Ave%2C%20Detroit%2C%20MI%2048219&size=640x480&source=outdoor&signature=3qGzB2gxWKb3wciRSJNXbfjHz6A=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/f9f8b95df5f28dcb74e9138b258540aal-m2533711125s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T19:56:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "dishwasher",
          "family_room",
          "fireplace",
          "forced_air",
          "furnished",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "new_roof"
        ],
        "permalink": "18650-Roselawn-St_Detroit_MI_48221_M40432-78133",
        "status": "for_sale",
        "list_date": "2022-10-29T23:38:44Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1938,
          "sold_price": 140000,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 3920,
          "sqft": 1599,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Brookstone Realtors Llc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 249900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4043278133",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99917715787888
              },
              {
                "label": "porch",
                "probability": 0.99989914894104
              },
              {
                "label": "house_view",
                "probability": 0.99942183494568
              },
              {
                "label": "house_view",
                "probability": 0.99925059080124
              }
            ],
            "href": "https://ap.rdcpix.com/f9f8b95df5f28dcb74e9138b258540aal-m2533711125s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.9992161989212
              },
              {
                "label": "porch",
                "probability": 0.9999715089798
              },
              {
                "label": "road_view",
                "probability": 0.64231437444687
              },
              {
                "label": "house_view",
                "probability": 0.99927598237991
              },
              {
                "label": "house_view",
                "probability": 0.9988859295845
              }
            ],
            "href": "https://ap.rdcpix.com/f9f8b95df5f28dcb74e9138b258540aal-m1741233985s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.48169353604317
              },
              {
                "label": "porch",
                "probability": 0.99686902761459
              },
              {
                "label": "porch",
                "probability": 0.99999094009399
              }
            ],
            "href": "https://ap.rdcpix.com/f9f8b95df5f28dcb74e9138b258540aal-m162393064s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99993348121643
              }
            ],
            "href": "https://ap.rdcpix.com/f9f8b95df5f28dcb74e9138b258540aal-m362601888s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 1
              }
            ],
            "href": "https://ap.rdcpix.com/f9f8b95df5f28dcb74e9138b258540aal-m2767052192s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949388693",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "564157693",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "549144541",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "539739805",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "529604665",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "523585105",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949388693",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48221",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.152639,
              "lat": 42.428637
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "18650 Roselawn St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=18650%20Roselawn%20St%2C%20Detroit%2C%20MI%2048221&size=640x480&source=outdoor&signature=pFL-WE2geVLdjo8KOdx4ytT2gnM=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/3bf5b5f1a436b753fc220db6b3b9916cl-m1499059369s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T19:36:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": "Lenox Realty & Management"
            },
            {
              "office_name": "Lenox Realty & Management"
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "family_room",
          "forced_air",
          "basement",
          "single_story",
          "garage_1_or_more"
        ],
        "permalink": "16418-Fairmount-Dr_Detroit_MI_48205_M40859-79829",
        "status": "for_sale",
        "list_date": "2022-10-29T23:38:44Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1949,
          "sold_price": 29500,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 5227,
          "sqft": 724,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 1,
          "beds": 2,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Lenox Realty & Management",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 68000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4085979829",
        "photos": [
          {
            "tags": [
              {
                "label": "road_view",
                "probability": 0.70765024423599
              },
              {
                "label": "yard",
                "probability": 0.99836641550064
              }
            ],
            "href": "https://ap.rdcpix.com/3bf5b5f1a436b753fc220db6b3b9916cl-m1499059369s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "road_view",
                "probability": 0.70541536808014
              },
              {
                "label": "yard",
                "probability": 0.97668719291687
              }
            ],
            "href": "https://ap.rdcpix.com/3bf5b5f1a436b753fc220db6b3b9916cl-m3405482466s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.75508201122284
              },
              {
                "label": "road_view",
                "probability": 0.77852594852448
              },
              {
                "label": "yard",
                "probability": 0.99357479810715
              },
              {
                "label": "house_view",
                "probability": 0.80373477935791
              },
              {
                "label": "house_view",
                "probability": 0.97873675823212
              }
            ],
            "href": "https://ap.rdcpix.com/3bf5b5f1a436b753fc220db6b3b9916cl-m573312165s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "road_view",
                "probability": 0.86345314979553
              },
              {
                "label": "yard",
                "probability": 0.86319422721863
              }
            ],
            "href": "https://ap.rdcpix.com/3bf5b5f1a436b753fc220db6b3b9916cl-m2040472584s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.96140933036804
              }
            ],
            "href": "https://ap.rdcpix.com/3bf5b5f1a436b753fc220db6b3b9916cl-m3684213311s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949388680",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2947970884",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "614502933",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "549199261",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949388680",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48205",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.950648,
              "lat": 42.444539
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "16418 Fairmount Dr"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=16418%20Fairmount%20Dr%2C%20Detroit%2C%20MI%2048205&size=640x480&source=outdoor&signature=4CpnrYNZWQznhIc8fg6C7mdciVU=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/b8e08b230ca306158366899795e33bfel-m39999679s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T17:24:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "family_room",
          "fireplace",
          "furnished",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "new_roof"
        ],
        "permalink": "3250-W-Buena-Vista-St_Detroit_MI_48238_M31035-68755",
        "status": "for_sale",
        "list_date": "2022-10-29T21:24:31Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1926,
          "sold_price": 7500,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 3920,
          "sqft": 1753,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "National Realty Centers Birmingham",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 89900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3103568755",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.9823409318924
              },
              {
                "label": "porch",
                "probability": 0.79270857572556
              },
              {
                "label": "road_view",
                "probability": 0.85585099458694
              },
              {
                "label": "house_view",
                "probability": 0.60563403367996
              },
              {
                "label": "house_view",
                "probability": 0.65756571292877
              }
            ],
            "href": "https://ap.rdcpix.com/b8e08b230ca306158366899795e33bfel-m39999679s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.94442462921143
              },
              {
                "label": "porch",
                "probability": 0.64657324552536
              },
              {
                "label": "porch",
                "probability": 0.98401457071304
              },
              {
                "label": "house_view",
                "probability": 0.9216975569725
              },
              {
                "label": "house_view",
                "probability": 0.64607101678848
              }
            ],
            "href": "https://ap.rdcpix.com/b8e08b230ca306158366899795e33bfel-m2844195327s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "porch",
                "probability": 0.99920135736465
              },
              {
                "label": "porch",
                "probability": 0.83773118257523
              },
              {
                "label": "yard",
                "probability": 0.95449835062027
              }
            ],
            "href": "https://ap.rdcpix.com/b8e08b230ca306158366899795e33bfel-m613841920s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.98931634426117
              },
              {
                "label": "porch",
                "probability": 0.99947613477707
              },
              {
                "label": "yard",
                "probability": 0.84042763710022
              },
              {
                "label": "house_view",
                "probability": 0.74314045906067
              },
              {
                "label": "house_view",
                "probability": 0.90425235033035
              }
            ],
            "href": "https://ap.rdcpix.com/b8e08b230ca306158366899795e33bfel-m3524649503s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "porch",
                "probability": 0.980996966362
              },
              {
                "label": "porch",
                "probability": 0.9919445514679
              }
            ],
            "href": "https://ap.rdcpix.com/b8e08b230ca306158366899795e33bfel-m1811273038s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949386868",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "571584145",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "550106689",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "547445033",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "539979857",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949386868",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48238",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.127173,
              "lat": 42.388803
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "3250 W Buena Vista St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=3250%20W%20Buena%20Vista%20St%2C%20Detroit%2C%20MI%2048238&size=640x480&source=outdoor&signature=0OdHTUWHyNWwggbbYkkpdlXPq5c=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/7afe3c4b3002bcb02f9380952fb8c6e0l-m1960235566s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T17:04:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            },
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "single_story",
          "shopping"
        ],
        "permalink": "3958-Commor-St_Detroit_MI_48212_M42033-57918",
        "status": "for_sale",
        "list_date": "2022-10-29T21:04:34Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1924,
          "sold_price": 25000,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 3049,
          "sqft": 1148,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 1,
          "beds": 2,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Amin Realty",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 120000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4203357918",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99908995628357
              },
              {
                "label": "porch",
                "probability": 0.99961817264557
              },
              {
                "label": "house_view",
                "probability": 0.81154733896255
              },
              {
                "label": "house_view",
                "probability": 0.99555248022079
              }
            ],
            "href": "https://ap.rdcpix.com/7afe3c4b3002bcb02f9380952fb8c6e0l-m1960235566s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99807858467102
              },
              {
                "label": "porch",
                "probability": 0.99918645620346
              },
              {
                "label": "house_view",
                "probability": 0.87674796581268
              },
              {
                "label": "house_view",
                "probability": 0.99359232187271
              }
            ],
            "href": "https://ap.rdcpix.com/7afe3c4b3002bcb02f9380952fb8c6e0l-m2687170072s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99840968847275
              },
              {
                "label": "porch",
                "probability": 0.92497485876083
              },
              {
                "label": "road_view",
                "probability": 0.95830357074738
              },
              {
                "label": "yard",
                "probability": 0.98097938299179
              },
              {
                "label": "house_view",
                "probability": 0.73585325479507
              },
              {
                "label": "house_view",
                "probability": 0.90042412281036
              }
            ],
            "href": "https://ap.rdcpix.com/7afe3c4b3002bcb02f9380952fb8c6e0l-m1465495780s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99935835599899
              },
              {
                "label": "porch",
                "probability": 0.97676408290863
              },
              {
                "label": "yard",
                "probability": 0.9552326798439
              },
              {
                "label": "house_view",
                "probability": 0.73951506614685
              }
            ],
            "href": "https://ap.rdcpix.com/7afe3c4b3002bcb02f9380952fb8c6e0l-m2523469629s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.95305627584457
              },
              {
                "label": "porch",
                "probability": 0.98848432302475
              },
              {
                "label": "porch",
                "probability": 0.99992024898529
              }
            ],
            "href": "https://ap.rdcpix.com/7afe3c4b3002bcb02f9380952fb8c6e0l-m2573921588s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949386668",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            }
          ]
        },
        "listing_id": "2949386668",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48212",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.0527,
              "lat": 42.407577
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "3958 Commor St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=3958%20Commor%20St%2C%20Detroit%2C%20MI%2048212&size=640x480&source=outdoor&signature=Rr5Oai5MIQfzmD6vYPvdVDGBer0=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/f6ae9cb36d9f398f7141a1addb168c92l-m3946321604s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-30T07:28:06Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "laundry_room",
          "basement",
          "two_or_more_stories",
          "big_yard",
          "rental_property"
        ],
        "permalink": "9336-Coyle-St_Detroit_MI_48228_M43983-66223",
        "status": "for_sale",
        "list_date": "2022-10-29T19:35:33Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1944,
          "sold_price": 70000,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 4792,
          "sqft": 955,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Real Estate One-Clinton Twp",
            "photo": "https://ap.rdcpix.com/1855937352/10b9b009bfa5e81987162640eeb68023o-c0s.jpg",
            "type": "Office"
          }
        ],
        "list_price": 45999,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4398366223",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.98653376102448
              },
              {
                "label": "porch",
                "probability": 0.99994206428528
              },
              {
                "label": "yard",
                "probability": 0.99393576383591
              },
              {
                "label": "house_view",
                "probability": 0.70681095123291
              },
              {
                "label": "house_view",
                "probability": 0.67267268896103
              }
            ],
            "href": "https://ap.rdcpix.com/f6ae9cb36d9f398f7141a1addb168c92l-m3946321604s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.99955409765244
              }
            ],
            "href": "https://ap.rdcpix.com/f6ae9cb36d9f398f7141a1addb168c92l-m1903721952s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.53534883260727
              }
            ],
            "href": "https://ap.rdcpix.com/f6ae9cb36d9f398f7141a1addb168c92l-m106751376s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "laundry_room",
                "probability": 0.7343003153801
              }
            ],
            "href": "https://ap.rdcpix.com/f6ae9cb36d9f398f7141a1addb168c92l-m743091150s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.97226768732071
              }
            ],
            "href": "https://ap.rdcpix.com/f6ae9cb36d9f398f7141a1addb168c92l-m3925160580s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "advantage_pro"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949385610",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2942009293",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "580518421",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "504315841",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949385610",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48228",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.192592,
              "lat": 42.363831
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "9336 Coyle St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=9336%20Coyle%20St%2C%20Detroit%2C%20MI%2048228&size=640x480&source=outdoor&signature=5cn_dYJjk397bGGWSiO0lJCV9l8=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/7d8c5dee0aed889bc40f70c50b1de7dcl-m923444742s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-30T07:28:25Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "modern_kitchen",
          "large_kitchen",
          "fenced_yard",
          "rental_property"
        ],
        "permalink": "14602-Mark-Twain-St_Detroit_MI_48227_M33605-04130",
        "status": "for_sale",
        "list_date": "2022-10-29T18:58:20Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1926,
          "sold_price": null,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 4356,
          "sqft": 1476,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Real Estate One-Clinton Twp",
            "photo": "https://ap.rdcpix.com/1855937352/10b9b009bfa5e81987162640eeb68023o-c0s.jpg",
            "type": "Office"
          }
        ],
        "list_price": 65999,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3360504130",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.9980383515358
              },
              {
                "label": "porch",
                "probability": 0.97065114974976
              },
              {
                "label": "yard",
                "probability": 0.99976891279221
              },
              {
                "label": "house_view",
                "probability": 0.99897527694702
              },
              {
                "label": "house_view",
                "probability": 0.99320638179779
              }
            ],
            "href": "https://ap.rdcpix.com/7d8c5dee0aed889bc40f70c50b1de7dcl-m923444742s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.99995100498199
              }
            ],
            "href": "https://ap.rdcpix.com/7d8c5dee0aed889bc40f70c50b1de7dcl-m4159549309s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.99945718050003
              }
            ],
            "href": "https://ap.rdcpix.com/7d8c5dee0aed889bc40f70c50b1de7dcl-m2630507082s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "bedroom",
                "probability": 0.9999862909317
              }
            ],
            "href": "https://ap.rdcpix.com/7d8c5dee0aed889bc40f70c50b1de7dcl-m20045975s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "bedroom",
                "probability": 0.98085290193558
              }
            ],
            "href": "https://ap.rdcpix.com/7d8c5dee0aed889bc40f70c50b1de7dcl-m3718776732s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "advantage_pro"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949385157",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2942012724",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "574204669",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949385157",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48227",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.185998,
              "lat": 42.39608
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "14602 Mark Twain St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=14602%20Mark%20Twain%20St%2C%20Detroit%2C%20MI%2048227&size=640x480&source=outdoor&signature=v6jhhTOo93Z29kN4y36HACD2ndk=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/83145f9c9076a431f8365c3190938f94l-m3959000818s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-30T07:28:44Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "basement",
          "single_story",
          "garage_1_or_more",
          "fenced_yard",
          "rental_property"
        ],
        "permalink": "18635-Meyers-Rd_Detroit_MI_48235_M47925-82513",
        "status": "for_sale",
        "list_date": "2022-10-29T18:24:24Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1948,
          "sold_price": null,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 2614,
          "sqft": 942,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 1,
          "beds": 2,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Real Estate One-Clinton Twp",
            "photo": "https://ap.rdcpix.com/1855937352/10b9b009bfa5e81987162640eeb68023o-c0s.jpg",
            "type": "Office"
          }
        ],
        "list_price": 41999,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4792582513",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99530690908432
              },
              {
                "label": "yard",
                "probability": 0.99962973594666
              },
              {
                "label": "house_view",
                "probability": 0.69587063789368
              },
              {
                "label": "house_view",
                "probability": 0.86818963289261
              }
            ],
            "href": "https://ap.rdcpix.com/83145f9c9076a431f8365c3190938f94l-m3959000818s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 1
              }
            ],
            "href": "https://ap.rdcpix.com/83145f9c9076a431f8365c3190938f94l-m3999830182s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.999995470047
              }
            ],
            "href": "https://ap.rdcpix.com/83145f9c9076a431f8365c3190938f94l-m1534968732s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.54515147209167
              }
            ],
            "href": "https://ap.rdcpix.com/83145f9c9076a431f8365c3190938f94l-m2930557004s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "laundry_room",
                "probability": 0.62536305189133
              }
            ],
            "href": "https://ap.rdcpix.com/83145f9c9076a431f8365c3190938f94l-m1490940774s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "advantage_pro"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949384285",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2942104047",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949384285",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48235",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.170914,
              "lat": 42.428185
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "18635 Meyers Rd"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=18635%20Meyers%20Rd%2C%20Detroit%2C%20MI%2048235&size=640x480&source=outdoor&signature=9s-JSZ-az9y4thwz5OhsS_iIiPc=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/3a5cb9af00301aecb615533080b97e25l-m967015963s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T19:47:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "single_story",
          "big_yard",
          "farm",
          "ranch",
          "shopping"
        ],
        "permalink": "10035-Chatham_Detroit_MI_48239_M42627-86581",
        "status": "for_sale",
        "list_date": "2022-10-29T17:29:35Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1948,
          "sold_price": 6053,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 4356,
          "sqft": 872,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 1,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Berkshire Hathaway HomeServices The Loft Warehouse",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 125000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4262786581",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99775439500809
              },
              {
                "label": "porch",
                "probability": 0.96590936183929
              },
              {
                "label": "yard",
                "probability": 0.99652892351151
              },
              {
                "label": "house_view",
                "probability": 0.45613884925842
              },
              {
                "label": "house_view",
                "probability": 0.94038724899292
              }
            ],
            "href": "https://ap.rdcpix.com/3a5cb9af00301aecb615533080b97e25l-m967015963s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99917382001877
              },
              {
                "label": "porch",
                "probability": 0.97285264730453
              },
              {
                "label": "yard",
                "probability": 0.99653768539429
              },
              {
                "label": "house_view",
                "probability": 0.96717792749405
              }
            ],
            "href": "https://ap.rdcpix.com/3a5cb9af00301aecb615533080b97e25l-m4153832968s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99030530452728
              },
              {
                "label": "yard",
                "probability": 0.99837327003479
              },
              {
                "label": "house_view",
                "probability": 0.96304947137833
              },
              {
                "label": "house_view",
                "probability": 0.99369817972183
              }
            ],
            "href": "https://ap.rdcpix.com/3a5cb9af00301aecb615533080b97e25l-m2829535377s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99972087144852
              }
            ],
            "href": "https://ap.rdcpix.com/3a5cb9af00301aecb615533080b97e25l-m2580017710s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99936980009079
              }
            ],
            "href": "https://ap.rdcpix.com/3a5cb9af00301aecb615533080b97e25l-m1168293893s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949383536",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "550265837",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "505512641",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949383536",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48239",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.262418,
              "lat": 42.368746
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "10035 Chatham"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=10035%20Chatham%2C%20Detroit%2C%20MI%2048239&size=640x480&source=outdoor&signature=3Y3YxFLpKpn7wfcY-KIsbIS87eU=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/e2774644cde065505251bd93329f25cal-m3325094674s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-30T07:27:48Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "fireplace",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "modern_kitchen",
          "large_kitchen",
          "fenced_yard"
        ],
        "permalink": "16541-Asbury-Park_Detroit_MI_48235_M34065-39461",
        "status": "for_sale",
        "list_date": "2022-10-29T16:58:25Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1947,
          "sold_price": 48890,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 4356,
          "sqft": 1134,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Real Estate One-Clinton Twp",
            "photo": "https://ap.rdcpix.com/1855937352/10b9b009bfa5e81987162640eeb68023o-c0s.jpg",
            "type": "Office"
          }
        ],
        "list_price": 69999,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3406539461",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99591714143753
              },
              {
                "label": "porch",
                "probability": 0.99391728639603
              },
              {
                "label": "yard",
                "probability": 0.67359721660614
              },
              {
                "label": "house_view",
                "probability": 0.97810214757919
              },
              {
                "label": "house_view",
                "probability": 0.90001600980759
              }
            ],
            "href": "https://ap.rdcpix.com/e2774644cde065505251bd93329f25cal-m3325094674s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.68700498342514
              }
            ],
            "href": "https://ap.rdcpix.com/e2774644cde065505251bd93329f25cal-m354658283s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.97649699449539
              }
            ],
            "href": "https://ap.rdcpix.com/e2774644cde065505251bd93329f25cal-m3401465129s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.99996888637543
              }
            ],
            "href": "https://ap.rdcpix.com/e2774644cde065505251bd93329f25cal-m370944399s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.73177450895309
              }
            ],
            "href": "https://ap.rdcpix.com/e2774644cde065505251bd93329f25cal-m321099982s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "advantage_pro"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949383088",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2942014676",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "586981837",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "595643965",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "587250489",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "534201129",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949383088",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48235",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.209124,
              "lat": 42.411003
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "16541 Asbury Park"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=16541%20Asbury%20Park%2C%20Detroit%2C%20MI%2048235&size=640x480&source=outdoor&signature=BB-pax12djCsH3Tow2Z57BBx0p0=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/460fca38a949336abdba61930e8af158l-m3503184283s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T12:07:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "basement",
          "two_or_more_stories"
        ],
        "permalink": "3323-Kendall-St_Detroit_MI_48238_M31223-61459",
        "status": "for_sale",
        "list_date": "2022-10-29T16:08:25Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1927,
          "sold_price": null,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 3920,
          "sqft": 2600,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 2,
          "beds": 1,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Elite Realty",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 215000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3122361459",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99827444553375
              },
              {
                "label": "porch",
                "probability": 0.99995195865631
              },
              {
                "label": "yard",
                "probability": 0.99713551998138
              },
              {
                "label": "house_view",
                "probability": 0.96808451414108
              },
              {
                "label": "house_view",
                "probability": 0.86111301183701
              }
            ],
            "href": "https://ap.rdcpix.com/460fca38a949336abdba61930e8af158l-m3503184283s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.87559133768082
              },
              {
                "label": "porch",
                "probability": 0.99999606609344
              },
              {
                "label": "house_view",
                "probability": 0.95506805181503
              },
              {
                "label": "house_view",
                "probability": 0.79120779037476
              }
            ],
            "href": "https://ap.rdcpix.com/460fca38a949336abdba61930e8af158l-m404700538s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": null
              }
            ],
            "href": "https://ap.rdcpix.com/460fca38a949336abdba61930e8af158l-m3476972258s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99992561340332
              }
            ],
            "href": "https://ap.rdcpix.com/460fca38a949336abdba61930e8af158l-m3343355086s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.949098944664
              }
            ],
            "href": "https://ap.rdcpix.com/460fca38a949336abdba61930e8af158l-m2107325103s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": true,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949382499",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            }
          ]
        },
        "listing_id": "2949382499",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48238",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.132681,
              "lat": 42.3948
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "3323 Kendall St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=3323%20Kendall%20St%2C%20Detroit%2C%20MI%2048238&size=640x480&source=outdoor&signature=caM1THJP5FMsBrllaW2SXD8xiKo=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/bb0bb08c42651fc645007cd7876316d0l-m4022226409s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T11:15:09Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "two_or_more_stories",
          "granite_kitchen",
          "updated_kitchen"
        ],
        "permalink": "312-Rosedale-Ct_Detroit_MI_48202_M32035-24236",
        "status": "for_sale",
        "list_date": "2022-10-29T15:18:13Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1890,
          "sold_price": 50000,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 3485,
          "sqft": 1664,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 3,
          "beds": 4,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "National Realty Centers-Northville",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 180000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3203524236",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99103736877441
              },
              {
                "label": "yard",
                "probability": 0.99769860506058
              },
              {
                "label": "house_view",
                "probability": 0.59721904993057
              },
              {
                "label": "house_view",
                "probability": 0.51587665081024
              },
              {
                "label": "house_view",
                "probability": 0.99977165460587
              }
            ],
            "href": "https://ap.rdcpix.com/bb0bb08c42651fc645007cd7876316d0l-m4022226409s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99951088428497
              },
              {
                "label": "porch",
                "probability": 0.9848398566246
              },
              {
                "label": "porch",
                "probability": 0.99996507167816
              }
            ],
            "href": "https://ap.rdcpix.com/bb0bb08c42651fc645007cd7876316d0l-m2049558245s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.9999223947525
              }
            ],
            "href": "https://ap.rdcpix.com/bb0bb08c42651fc645007cd7876316d0l-m3769313052s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99899214506149
              }
            ],
            "href": "https://ap.rdcpix.com/bb0bb08c42651fc645007cd7876316d0l-m101817234s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99999213218689
              }
            ],
            "href": "https://ap.rdcpix.com/bb0bb08c42651fc645007cd7876316d0l-m2276027986s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949381813",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2946722917",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2944655710",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2924870753",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949381813",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48202",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.082147,
              "lat": 42.392739
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "312 Rosedale Ct"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=312%20Rosedale%20Ct%2C%20Detroit%2C%20MI%2048202&size=640x480&source=outdoor&signature=4U09z0eW07y3N9GxDuovOvY5tp4=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/5509e3386bcf3f419d340ec34ad0a0edl-m3369486623s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T09:48:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "garage_1_or_more",
          "updated_kitchen"
        ],
        "permalink": "291-Englewood-St_Detroit_MI_48202_M42191-80903",
        "status": "for_sale",
        "list_date": "2022-10-29T13:48:31Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1910,
          "sold_price": 90000,
          "baths_full": 2,
          "name": null,
          "baths_half": null,
          "lot_sqft": 3920,
          "sqft": 2609,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": null,
          "beds": 4,
          "type": "multi_family"
        },
        "branding": [
          {
            "name": "National Realty Centers-Northville",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 300000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4219180903",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.85622423887253
              },
              {
                "label": "porch",
                "probability": 0.99363315105438
              },
              {
                "label": "yard",
                "probability": 0.995854139328
              },
              {
                "label": "house_view",
                "probability": 0.81907147169113
              },
              {
                "label": "house_view",
                "probability": 0.99052935838699
              }
            ],
            "href": "https://ap.rdcpix.com/5509e3386bcf3f419d340ec34ad0a0edl-m3369486623s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.98800545930862
              },
              {
                "label": "porch",
                "probability": 0.69563347101212
              },
              {
                "label": "porch",
                "probability": 0.9977999329567
              },
              {
                "label": "yard",
                "probability": 0.99972075223923
              },
              {
                "label": "house_view",
                "probability": 0.99647742509842
              },
              {
                "label": "house_view",
                "probability": 0.99974864721298
              }
            ],
            "href": "https://ap.rdcpix.com/5509e3386bcf3f419d340ec34ad0a0edl-m318212734s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99976581335068
              }
            ],
            "href": "https://ap.rdcpix.com/5509e3386bcf3f419d340ec34ad0a0edl-m1568419345s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99999988079071
              }
            ],
            "href": "https://ap.rdcpix.com/5509e3386bcf3f419d340ec34ad0a0edl-m3049427226s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99973219633102
              }
            ],
            "href": "https://ap.rdcpix.com/5509e3386bcf3f419d340ec34ad0a0edl-m1230797833s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949380728",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2947471981",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2928590924",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2922425766",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2554359585",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2856463182",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949380728",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48202",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.083354,
              "lat": 42.39388
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "291 Englewood St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=291%20Englewood%20St%2C%20Detroit%2C%20MI%2048202&size=640x480&source=outdoor&signature=v3dX4ZEM4cePjm0NGbhH3YdkTgw=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/0a099902f5d33f4099a0d9b4e96ef44dl-m3832226598s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T10:27:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": "KW Domain"
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "central_air",
          "community_security_features",
          "dining_room",
          "dishwasher",
          "forced_air",
          "washer_dryer",
          "two_or_more_stories",
          "garage_1_or_more",
          "high_ceiling",
          "private_courtyard"
        ],
        "permalink": "2643-Brush-St-17CH6B_Detroit_MI_48201_M92008-45352",
        "status": "for_sale",
        "list_date": "2022-10-29T12:17:34Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 2018,
          "sold_price": null,
          "baths_full": 2,
          "name": null,
          "baths_half": null,
          "lot_sqft": null,
          "sqft": 1264,
          "baths": 2,
          "sub_type": "condo",
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 2,
          "type": "condos"
        },
        "branding": [
          {
            "name": "Keller Williams Domain Birmingham",
            "photo": "https://ap.rdcpix.com/1202092327/239010286a3103ef3c6597ffc9d37b9ao-c0s.jpg",
            "type": "Office"
          }
        ],
        "list_price": 549000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "9200845352",
        "photos": [
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.97270220518112
              },
              {
                "label": "house_view",
                "probability": 0.92144483327866
              }
            ],
            "href": "https://ap.rdcpix.com/0a099902f5d33f4099a0d9b4e96ef44dl-m3832226598s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.6326277256012
              },
              {
                "label": "unknown",
                "probability": 0.74635314941406
              },
              {
                "label": "porch",
                "probability": 0.97423607110977
              },
              {
                "label": "porch",
                "probability": 0.99944585561752
              }
            ],
            "href": "https://ap.rdcpix.com/0a099902f5d33f4099a0d9b4e96ef44dl-m3136712685s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.99950671195984
              }
            ],
            "href": "https://ap.rdcpix.com/0a099902f5d33f4099a0d9b4e96ef44dl-m585112678s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.9999772310257
              }
            ],
            "href": "https://ap.rdcpix.com/0a099902f5d33f4099a0d9b4e96ef44dl-m4101594616s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.5595760345459
              }
            ],
            "href": "https://ap.rdcpix.com/0a099902f5d33f4099a0d9b4e96ef44dl-m2269464713s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "advantage_pro"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949377400",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            }
          ]
        },
        "listing_id": "2949377400",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48201",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.050778,
              "lat": 42.343894
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "2643 Brush St Unit 6B"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=2643%20Brush%20St%20Unit%206B%2C%20Detroit%2C%20MI%2048201&size=640x480&source=outdoor&signature=vvQHEpbBxxeP-sUMgIDvLiZ2NUs=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/79803eee2131a6a0bd0660ac74fc12bbl-m3922766425s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T07:06:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "rental_property"
        ],
        "permalink": "11845-Lakepointe-St_Detroit_MI_48224_M30811-90113",
        "status": "for_sale",
        "list_date": "2022-10-29T11:08:25Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1948,
          "sold_price": 69900,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 5663,
          "sqft": 1364,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "EXP Realty, LLC",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 104900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3081190113",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99834859371185
              },
              {
                "label": "yard",
                "probability": 0.99852007627487
              },
              {
                "label": "house_view",
                "probability": 0.9985294342041
              },
              {
                "label": "house_view",
                "probability": 0.98753100633621
              }
            ],
            "href": "https://ap.rdcpix.com/79803eee2131a6a0bd0660ac74fc12bbl-m3922766425s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.8090392947197
              },
              {
                "label": "yard",
                "probability": 0.79949480295181
              }
            ],
            "href": "https://ap.rdcpix.com/79803eee2131a6a0bd0660ac74fc12bbl-m1507004262s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.86207067966461
              },
              {
                "label": "yard",
                "probability": 0.98890161514282
              },
              {
                "label": "house_view",
                "probability": 0.96737891435623
              },
              {
                "label": "house_view",
                "probability": 0.92884212732315
              }
            ],
            "href": "https://ap.rdcpix.com/79803eee2131a6a0bd0660ac74fc12bbl-m3669715774s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": null
              }
            ],
            "href": "https://ap.rdcpix.com/79803eee2131a6a0bd0660ac74fc12bbl-m4138621450s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "farm_land",
                "probability": 0.57540082931519
              },
              {
                "label": "road_view",
                "probability": 0.99978119134903
              }
            ],
            "href": "https://ap.rdcpix.com/79803eee2131a6a0bd0660ac74fc12bbl-m3564757083s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949377148",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "590387309",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949377148",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48224",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.94635,
              "lat": 42.427703
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "11845 Lakepointe St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=11845%20Lakepointe%20St%2C%20Detroit%2C%20MI%2048224&size=640x480&source=outdoor&signature=REVLOdZ9a_MCiHZ8ZPAzAXF3Ijk=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/b2eeb05a19bcb83614c21a90af202379l-m1321472157s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T22:43:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            },
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more"
        ],
        "permalink": "15104-Steel-St_Detroit_MI_48227_M36103-51975",
        "status": "for_sale",
        "list_date": "2022-10-29T02:44:25Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1942,
          "sold_price": null,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 3920,
          "sqft": 1009,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "EXP Realty, LLC",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 65000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3610351975",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99503517150879
              },
              {
                "label": "porch",
                "probability": 0.99929368495941
              },
              {
                "label": "yard",
                "probability": 0.97686553001404
              },
              {
                "label": "house_view",
                "probability": 0.92901760339737
              },
              {
                "label": "house_view",
                "probability": 0.7502378821373
              }
            ],
            "href": "https://ap.rdcpix.com/b2eeb05a19bcb83614c21a90af202379l-m1321472157s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99072194099426
              },
              {
                "label": "porch",
                "probability": 0.99993681907654
              },
              {
                "label": "yard",
                "probability": 0.94217437505722
              },
              {
                "label": "house_view",
                "probability": 0.64845311641693
              },
              {
                "label": "house_view",
                "probability": 0.99150460958481
              }
            ],
            "href": "https://ap.rdcpix.com/b2eeb05a19bcb83614c21a90af202379l-m706298325s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.66908186674118
              }
            ],
            "href": "https://ap.rdcpix.com/b2eeb05a19bcb83614c21a90af202379l-m4228008022s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.96780246496201
              }
            ],
            "href": "https://ap.rdcpix.com/b2eeb05a19bcb83614c21a90af202379l-m1033447298s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "bathroom",
                "probability": 0.99958366155624
              }
            ],
            "href": "https://ap.rdcpix.com/b2eeb05a19bcb83614c21a90af202379l-m3030577057s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949372507",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            }
          ]
        },
        "listing_id": "2949372507",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48227",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.171162,
              "lat": 42.401521
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "15104 Steel St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=15104%20Steel%20St%2C%20Detroit%2C%20MI%2048227&size=640x480&source=outdoor&signature=SG5Y5U4B1hdK1uxw4Z-Rk8Nf724=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/699734efd5e49268bcd139e414f299c6l-m1869334737s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T18:35:06Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": "Next Level Realty & Investments"
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "rental_property"
        ],
        "permalink": "9136-Devonshire-Rd_Detroit_MI_48224_M46129-72042",
        "status": "for_sale",
        "list_date": "2022-10-28T22:35:33Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1929,
          "sold_price": 37900,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 6098,
          "sqft": 1464,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Next Level Realty & Investments, Llc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 88000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4612972042",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99955683946609
              },
              {
                "label": "porch",
                "probability": 0.93141329288483
              },
              {
                "label": "road_view",
                "probability": 0.90427786111832
              },
              {
                "label": "yard",
                "probability": 0.97550213336945
              },
              {
                "label": "house_view",
                "probability": 0.95657938718796
              },
              {
                "label": "house_view",
                "probability": 0.98235654830933
              }
            ],
            "href": "https://ap.rdcpix.com/699734efd5e49268bcd139e414f299c6l-m1869334737s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949365027",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2942141722",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "553181529",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "547406657",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949365027",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48224",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.947634,
              "lat": 42.410983
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "9136 Devonshire Rd"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=9136%20Devonshire%20Rd%2C%20Detroit%2C%20MI%2048224&size=640x480&source=outdoor&signature=MmudgzWTm9Jy82Ie5TtADIEXgA8=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/2766b4b1041a752770e068ee37583769l-m495966979s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T18:22:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "garage_1_or_more"
        ],
        "permalink": "8845-Chamberlain-St_Detroit_MI_48209_M32008-78874",
        "status": "for_sale",
        "list_date": "2022-10-28T22:24:01Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1916,
          "sold_price": null,
          "baths_full": 2,
          "name": null,
          "baths_half": null,
          "lot_sqft": 3920,
          "sqft": 1455,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": null,
          "beds": 3,
          "type": "multi_family"
        },
        "branding": [
          {
            "name": "Keller Williams Realty-Great Lakes",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 75000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3200878874",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99949789047241
              },
              {
                "label": "porch",
                "probability": 0.99864894151688
              },
              {
                "label": "yard",
                "probability": 0.74381327629089
              },
              {
                "label": "house_view",
                "probability": 0.53625911474228
              },
              {
                "label": "house_view",
                "probability": 0.95742845535278
              }
            ],
            "href": "https://ap.rdcpix.com/2766b4b1041a752770e068ee37583769l-m495966979s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99237835407257
              },
              {
                "label": "porch",
                "probability": 0.99567234516144
              },
              {
                "label": "yard",
                "probability": 0.99798893928528
              },
              {
                "label": "house_view",
                "probability": 0.97953677177429
              },
              {
                "label": "house_view",
                "probability": 0.85867190361023
              }
            ],
            "href": "https://ap.rdcpix.com/2766b4b1041a752770e068ee37583769l-m2387379543s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.80121797323227
              },
              {
                "label": "yard",
                "probability": 0.98531460762024
              }
            ],
            "href": "https://ap.rdcpix.com/2766b4b1041a752770e068ee37583769l-m3450383122s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.99999701976776
              }
            ],
            "href": "https://ap.rdcpix.com/2766b4b1041a752770e068ee37583769l-m2865121793s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.98524749279022
              }
            ],
            "href": "https://ap.rdcpix.com/2766b4b1041a752770e068ee37583769l-m3131802320s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949364753",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "612471073",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949364753",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48209",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.129567,
              "lat": 42.300294
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "8845 Chamberlain St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=8845%20Chamberlain%20St%2C%20Detroit%2C%20MI%2048209&size=640x480&source=outdoor&signature=qd46c7a6o_bonA3vgB8u4zvP4SY=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/49a5382200a80f073bf4da035f7795f0l-m627341969s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T18:04:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "fireplace",
          "forced_air",
          "basement",
          "single_story",
          "garage_1_or_more",
          "rental_property",
          "investment_opportunity",
          "shopping",
          "fixer_upper"
        ],
        "permalink": "16866-Mansfield-St_Detroit_MI_48235_M47100-76236",
        "status": "for_sale",
        "list_date": "2022-10-28T22:05:32Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1939,
          "sold_price": 6037,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 10890,
          "sqft": 908,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 1,
          "beds": 2,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Keller Williams Home",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 58000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4710076236",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.92442148923874
              },
              {
                "label": "porch",
                "probability": 0.99933880567551
              },
              {
                "label": "yard",
                "probability": 0.99911373853683
              },
              {
                "label": "house_view",
                "probability": 0.87735748291016
              },
              {
                "label": "house_view",
                "probability": 0.97411978244781
              }
            ],
            "href": "https://ap.rdcpix.com/49a5382200a80f073bf4da035f7795f0l-m627341969s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99919766187668
              }
            ],
            "href": "https://ap.rdcpix.com/49a5382200a80f073bf4da035f7795f0l-m1232403242s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.99989986419678
              }
            ],
            "href": "https://ap.rdcpix.com/49a5382200a80f073bf4da035f7795f0l-m3799436833s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "bathroom",
                "probability": 0.99999666213989
              }
            ],
            "href": "https://ap.rdcpix.com/49a5382200a80f073bf4da035f7795f0l-m2971148439s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.98863810300827
              }
            ],
            "href": "https://ap.rdcpix.com/49a5382200a80f073bf4da035f7795f0l-m3121367011s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949363947",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2942439217",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2920512038",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "501661989",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949363947",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48235",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.205462,
              "lat": 42.415039
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "16866 Mansfield St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=16866%20Mansfield%20St%2C%20Detroit%2C%20MI%2048235&size=640x480&source=outdoor&signature=vbEWqo7nbUJYcvg5QBUMLgnH_80=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/a461bd37abbe208edd1d6247f898acb8l-m458027633s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T10:32:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "rental_property"
        ],
        "permalink": "1443-Bewick-St_Detroit_MI_48214_M46720-29634",
        "status": "for_sale",
        "list_date": "2022-10-28T22:05:32Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1908,
          "sold_price": null,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 6970,
          "sqft": 1980,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 4,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Coldwell Banker Weir Manuel - Grosse Pointe",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 35000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4672029634",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99040985107422
              },
              {
                "label": "yard",
                "probability": 0.9047315120697
              },
              {
                "label": "house_view",
                "probability": 0.83779436349869
              },
              {
                "label": "house_view",
                "probability": 0.99557220935822
              }
            ],
            "href": "https://ap.rdcpix.com/a461bd37abbe208edd1d6247f898acb8l-m458027633s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99683654308319
              },
              {
                "label": "road_view",
                "probability": 0.52120423316956
              },
              {
                "label": "yard",
                "probability": 0.97484505176544
              },
              {
                "label": "house_view",
                "probability": 0.68180453777313
              },
              {
                "label": "house_view",
                "probability": 0.99526828527451
              }
            ],
            "href": "https://ap.rdcpix.com/a461bd37abbe208edd1d6247f898acb8l-m3017186628s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "road_view",
                "probability": 0.83161550760269
              },
              {
                "label": "yard",
                "probability": 0.97703766822815
              }
            ],
            "href": "https://ap.rdcpix.com/a461bd37abbe208edd1d6247f898acb8l-m1700665369s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.98513525724411
              },
              {
                "label": "road_view",
                "probability": 0.63176041841507
              },
              {
                "label": "yard",
                "probability": 0.66611737012863
              },
              {
                "label": "house_view",
                "probability": 0.81249034404755
              },
              {
                "label": "house_view",
                "probability": 0.99986743927002
              }
            ],
            "href": "https://ap.rdcpix.com/a461bd37abbe208edd1d6247f898acb8l-m1727990631s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.97849750518799
              },
              {
                "label": "yard",
                "probability": 0.9786005616188
              },
              {
                "label": "house_view",
                "probability": 0.83487683534622
              },
              {
                "label": "house_view",
                "probability": 0.99927169084549
              }
            ],
            "href": "https://ap.rdcpix.com/a461bd37abbe208edd1d6247f898acb8l-m3035073565s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949363945",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            }
          ]
        },
        "listing_id": "2949363945",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48214",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.98073,
              "lat": 42.362856
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "1443 Bewick St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=1443%20Bewick%20St%2C%20Detroit%2C%20MI%2048214&size=640x480&source=outdoor&signature=jthfAloKDADcfShuFYl2SRsm93M=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/053a66c5781accff8ece597c1daa1f62l-m2007934249s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T18:11:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "rental_property"
        ],
        "permalink": "11297-Wayburn-St_Detroit_MI_48224_M43665-37960",
        "status": "for_sale",
        "list_date": "2022-10-28T21:58:13Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1938,
          "sold_price": 60500,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 6534,
          "sqft": 1247,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Next Level Realty & Investments, Llc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 84000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4366537960",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99617731571198
              },
              {
                "label": "road_view",
                "probability": 0.77739280462265
              },
              {
                "label": "yard",
                "probability": 0.99709868431091
              },
              {
                "label": "house_view",
                "probability": 0.86922430992126
              },
              {
                "label": "house_view",
                "probability": 0.76019257307053
              }
            ],
            "href": "https://ap.rdcpix.com/053a66c5781accff8ece597c1daa1f62l-m2007934249s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949363405",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2923923488",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2923177823",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949363405",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48224",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.95392,
              "lat": 42.421344
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "11297 Wayburn St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=11297%20Wayburn%20St%2C%20Detroit%2C%20MI%2048224&size=640x480&source=outdoor&signature=6lFM9HmuXXbTIMvTiw1VuCOcg7g=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/da1c529ac020466a479b8552d70b1cf9l-m2269666545s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T17:43:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "rental_property"
        ],
        "permalink": "3968-Bedford-St_Detroit_MI_48224_M46326-16788",
        "status": "for_sale",
        "list_date": "2022-10-28T21:44:27Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1939,
          "sold_price": 75000,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 4792,
          "sqft": 2318,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Next Level Realty & Investments, Llc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 82000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4632616788",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.84945064783096
              },
              {
                "label": "yard",
                "probability": 0.98224776983261
              },
              {
                "label": "house_view",
                "probability": 0.98968291282654
              }
            ],
            "href": "https://ap.rdcpix.com/da1c529ac020466a479b8552d70b1cf9l-m2269666545s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99993979930878
              }
            ],
            "href": "https://ap.rdcpix.com/da1c529ac020466a479b8552d70b1cf9l-m2646648960s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.99969804286957
              }
            ],
            "href": "https://ap.rdcpix.com/da1c529ac020466a479b8552d70b1cf9l-m964210332s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949362946",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "615736141",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "615159977",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "614368073",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949362946",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48224",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.935885,
              "lat": 42.394817
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "3968 Bedford St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=3968%20Bedford%20St%2C%20Detroit%2C%20MI%2048224&size=640x480&source=outdoor&signature=kBLQb_V8M-b2Gjsg_EoyMUpo2_M=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/19293627e83c72a3d77abefb01366819l-m3941840473s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T00:09:07Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            },
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "garage_1_or_more",
          "updated_kitchen"
        ],
        "permalink": "19576-Joann-St_Detroit_MI_48205_M46333-41992",
        "status": "for_sale",
        "list_date": "2022-10-28T21:41:26Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1929,
          "sold_price": 77000,
          "baths_full": 2,
          "name": null,
          "baths_half": null,
          "lot_sqft": 4356,
          "sqft": 1376,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": null,
          "beds": 4,
          "type": "multi_family"
        },
        "branding": [
          {
            "name": "Munoz Realty Inc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 120000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4633341992",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.96248310804367
              },
              {
                "label": "porch",
                "probability": 0.68271106481552
              },
              {
                "label": "porch",
                "probability": 0.90369701385498
              },
              {
                "label": "yard",
                "probability": 0.99900877475739
              },
              {
                "label": "house_view",
                "probability": 0.80666047334671
              },
              {
                "label": "house_view",
                "probability": 0.9976789355278
              }
            ],
            "href": "https://ap.rdcpix.com/19293627e83c72a3d77abefb01366819l-m3941840473s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "porch",
                "probability": 0.6666259765625
              }
            ],
            "href": "https://ap.rdcpix.com/19293627e83c72a3d77abefb01366819l-m3121468193s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "kitchen",
                "probability": 0.98078203201294
              }
            ],
            "href": "https://ap.rdcpix.com/19293627e83c72a3d77abefb01366819l-m3924525024s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99997091293335
              }
            ],
            "href": "https://ap.rdcpix.com/19293627e83c72a3d77abefb01366819l-m525128279s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99999797344208
              }
            ],
            "href": "https://ap.rdcpix.com/19293627e83c72a3d77abefb01366819l-m3451461383s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949362846",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "571043021",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "576927361",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949362846",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48205",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.989838,
              "lat": 42.439594
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "19576 Joann St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=19576%20Joann%20St%2C%20Detroit%2C%20MI%2048205&size=640x480&source=outdoor&signature=9fzf1oW2hPOdsMt5mRiirQPyeWY=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/e669be7595cb90a12ba0087510b4dc94l-m300922616s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T20:57:57Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "central_air",
          "community_outdoor_space",
          "dining_room",
          "family_room",
          "fireplace",
          "forced_air",
          "hardwood_floors",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "new_roof",
          "medicalcare",
          "shopping"
        ],
        "permalink": "17186-Rosemont-Ave_Detroit_MI_48219_M41588-99129",
        "status": "for_sale",
        "list_date": "2022-10-28T20:59:52Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1941,
          "sold_price": 47000,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 4356,
          "sqft": 1423,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Higbie Maxon Agney, Inc.",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 160000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4158899129",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.996965944767
              },
              {
                "label": "porch",
                "probability": 0.88963603973389
              },
              {
                "label": "yard",
                "probability": 0.99875354766846
              },
              {
                "label": "house_view",
                "probability": 0.99934405088425
              },
              {
                "label": "house_view",
                "probability": 0.87544250488281
              }
            ],
            "href": "https://ap.rdcpix.com/e669be7595cb90a12ba0087510b4dc94l-m300922616s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99754202365875
              },
              {
                "label": "yard",
                "probability": 0.99963796138763
              },
              {
                "label": "house_view",
                "probability": 0.93041330575943
              },
              {
                "label": "house_view",
                "probability": 0.9805816411972
              }
            ],
            "href": "https://ap.rdcpix.com/e669be7595cb90a12ba0087510b4dc94l-m2818878161s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.52508401870728
              },
              {
                "label": "house_view",
                "probability": 0.74919158220291
              },
              {
                "label": "house_view",
                "probability": 0.96335178613663
              },
              {
                "label": "house_view",
                "probability": 0.99788576364517
              }
            ],
            "href": "https://ap.rdcpix.com/e669be7595cb90a12ba0087510b4dc94l-m2633258870s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "porch",
                "probability": 0.86310774087906
              },
              {
                "label": "porch",
                "probability": 0.98725199699402
              }
            ],
            "href": "https://ap.rdcpix.com/e669be7595cb90a12ba0087510b4dc94l-m392671117s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99202466011047
              },
              {
                "label": "yard",
                "probability": 0.99921870231628
              },
              {
                "label": "house_view",
                "probability": 0.96336793899536
              },
              {
                "label": "house_view",
                "probability": 0.98790502548218
              }
            ],
            "href": "https://ap.rdcpix.com/e669be7595cb90a12ba0087510b4dc94l-m2545086590s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": true,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949360960",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "549352681",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "542857025",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "521618857",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949360960",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48219",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.220806,
              "lat": 42.416756
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "17186 Rosemont Ave"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=17186%20Rosemont%20Ave%2C%20Detroit%2C%20MI%2048219&size=640x480&source=outdoor&signature=osSd5LywruUtWnANV27gI0f9LTU=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/7cf9c143993864ffb5dc21e130fd97edl-m2704819136s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T21:01:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            },
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "basement",
          "two_or_more_stories",
          "granite_kitchen",
          "updated_kitchen",
          "modern_kitchen",
          "new_roof",
          "shopping"
        ],
        "permalink": "18667-Prairie-St_Detroit_MI_48221_M34221-62971",
        "status": "for_sale",
        "list_date": "2022-10-28T20:41:46Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1928,
          "sold_price": 53000,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 3485,
          "sqft": 1439,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "RE/MAX LEADING EDGE",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 149900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3422162971",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.9998237490654
              },
              {
                "label": "porch",
                "probability": 0.99993145465851
              },
              {
                "label": "yard",
                "probability": 0.94076091051102
              },
              {
                "label": "house_view",
                "probability": 0.98203837871552
              },
              {
                "label": "house_view",
                "probability": 0.69273853302002
              }
            ],
            "href": "https://ap.rdcpix.com/7cf9c143993864ffb5dc21e130fd97edl-m2704819136s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99981933832169
              },
              {
                "label": "porch",
                "probability": 0.9998699426651
              },
              {
                "label": "road_view",
                "probability": 0.43927454948425
              },
              {
                "label": "yard",
                "probability": 0.98948585987091
              },
              {
                "label": "house_view",
                "probability": 0.96145296096802
              },
              {
                "label": "house_view",
                "probability": 0.83942538499832
              }
            ],
            "href": "https://ap.rdcpix.com/7cf9c143993864ffb5dc21e130fd97edl-m142917026s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.68259924650192
              }
            ],
            "href": "https://ap.rdcpix.com/7cf9c143993864ffb5dc21e130fd97edl-m2996311933s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.60978657007217
              }
            ],
            "href": "https://ap.rdcpix.com/7cf9c143993864ffb5dc21e130fd97edl-m1830365503s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.59583687782288
              }
            ],
            "href": "https://ap.rdcpix.com/7cf9c143993864ffb5dc21e130fd97edl-m2827871617s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949360237",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2947486682",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2943423806",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "587504477",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "520484209",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "512111777",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "506213801",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949360237",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48221",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.146015,
              "lat": 42.428926
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "18667 Prairie St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=18667%20Prairie%20St%2C%20Detroit%2C%20MI%2048221&size=640x480&source=outdoor&signature=00FhvjCO0dE3Cl1cuy-rz79uBuc=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/e2a439be2d861be215efa283ab09f310l-m1345659253s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T16:29:19Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": "KW Professionals"
            },
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "two_or_more_stories"
        ],
        "permalink": "12251-Steel-St_Detroit_MI_48227_M36827-96968",
        "status": "for_sale",
        "list_date": "2022-10-28T20:27:03Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1930,
          "sold_price": 85000,
          "baths_full": 2,
          "name": null,
          "baths_half": null,
          "lot_sqft": 4792,
          "sqft": 1079,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Keller Williams Professionals",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 79900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3682796968",
        "photos": [
          {
            "tags": [
              {
                "label": "garage",
                "probability": 0.69411396980286
              },
              {
                "label": "house_view",
                "probability": 0.99950098991394
              },
              {
                "label": "porch",
                "probability": 0.75830459594727
              },
              {
                "label": "road_view",
                "probability": 0.50120985507965
              },
              {
                "label": "yard",
                "probability": 0.99908673763275
              },
              {
                "label": "house_view",
                "probability": 0.99468839168549
              },
              {
                "label": "house_view",
                "probability": 0.99297958612442
              }
            ],
            "href": "https://ap.rdcpix.com/e2a439be2d861be215efa283ab09f310l-m1345659253s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": true,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949359651",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            }
          ]
        },
        "listing_id": "2949359651",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48227",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.171171,
              "lat": 42.378251
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "12251 Steel St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=12251%20Steel%20St%2C%20Detroit%2C%20MI%2048227&size=640x480&source=outdoor&signature=3Z1Y9kkhQpmhHvPvW9Zqjr5n0rg=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/2955fad0b7a1d8771d32c7bb29dfbb65l-m1636005870s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T15:58:08Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            },
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more"
        ],
        "permalink": "16190-Greenlawn-St_Detroit_MI_48221_M33361-99735",
        "status": "for_sale",
        "list_date": "2022-10-28T19:58:54Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1927,
          "sold_price": 78900,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 4792,
          "sqft": 1295,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 3,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Trust Realty LLC",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 50000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3336199735",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99467384815216
              },
              {
                "label": "porch",
                "probability": 0.99450641870499
              },
              {
                "label": "house_view",
                "probability": 0.48635882139206
              },
              {
                "label": "house_view",
                "probability": 0.6190972328186
              }
            ],
            "href": "https://ap.rdcpix.com/2955fad0b7a1d8771d32c7bb29dfbb65l-m1636005870s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99693405628204
              }
            ],
            "href": "https://ap.rdcpix.com/2955fad0b7a1d8771d32c7bb29dfbb65l-m496764535s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.99564146995544
              }
            ],
            "href": "https://ap.rdcpix.com/2955fad0b7a1d8771d32c7bb29dfbb65l-m810516652s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.70082104206085
              },
              {
                "label": "porch",
                "probability": 0.92652744054794
              }
            ],
            "href": "https://ap.rdcpix.com/2955fad0b7a1d8771d32c7bb29dfbb65l-m3080235480s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99376052618027
              }
            ],
            "href": "https://ap.rdcpix.com/2955fad0b7a1d8771d32c7bb29dfbb65l-m645832297s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949358137",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2945470648",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2942575279",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "582857077",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "577696349",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "577696505",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949358137",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48221",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.15061,
              "lat": 42.411149
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "16190 Greenlawn St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=16190%20Greenlawn%20St%2C%20Detroit%2C%20MI%2048221&size=640x480&source=outdoor&signature=VubZ1sxbofrRLjp8or186tAWf04=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/0da43a609079ccc0c74a7425c45a76f7l-m366442766s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T15:31:07Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "basement",
          "two_or_more_stories",
          "shopping"
        ],
        "permalink": "16135-Santa-Rosa-Dr_Detroit_MI_48221_M31501-04990",
        "status": "for_sale",
        "list_date": "2022-10-28T19:32:31Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1924,
          "sold_price": null,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 3920,
          "sqft": 1020,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Market Elite Inc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 18000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3150104990",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.98334908485413
              },
              {
                "label": "porch",
                "probability": 0.99832266569138
              },
              {
                "label": "house_view",
                "probability": 0.85986143350601
              }
            ],
            "href": "https://ap.rdcpix.com/0da43a609079ccc0c74a7425c45a76f7l-m366442766s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99890887737274
              },
              {
                "label": "porch",
                "probability": 0.99847489595413
              },
              {
                "label": "yard",
                "probability": 0.98975640535355
              },
              {
                "label": "house_view",
                "probability": 0.99941086769104
              },
              {
                "label": "house_view",
                "probability": 0.77138525247574
              }
            ],
            "href": "https://ap.rdcpix.com/0da43a609079ccc0c74a7425c45a76f7l-m67144164s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99774616956711
              },
              {
                "label": "porch",
                "probability": 0.99998927116394
              },
              {
                "label": "house_view",
                "probability": 0.99212461709976
              },
              {
                "label": "house_view",
                "probability": 0.79507958889008
              }
            ],
            "href": "https://ap.rdcpix.com/0da43a609079ccc0c74a7425c45a76f7l-m537069890s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "yard",
                "probability": 0.9758408665657
              }
            ],
            "href": "https://ap.rdcpix.com/0da43a609079ccc0c74a7425c45a76f7l-m1847000975s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99794203042984
              },
              {
                "label": "porch",
                "probability": 0.76826620101929
              },
              {
                "label": "yard",
                "probability": 0.99181926250458
              },
              {
                "label": "house_view",
                "probability": 0.99262660741806
              },
              {
                "label": "house_view",
                "probability": 0.98835235834122
              }
            ],
            "href": "https://ap.rdcpix.com/0da43a609079ccc0c74a7425c45a76f7l-m336453619s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949356982",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2940751288",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2932580046",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2924979901",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949356982",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48221",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.143013,
              "lat": 42.410461
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "16135 Santa Rosa Dr"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=16135%20Santa%20Rosa%20Dr%2C%20Detroit%2C%20MI%2048221&size=640x480&source=outdoor&signature=EI3dQraH2CpHXSCpNoqIcjjUX9o=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/60d8a2852a136fcbc54f9b5e364ba164l-m3725812123s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T15:08:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "modern_kitchen",
          "open_kitchen",
          "fixer_upper"
        ],
        "permalink": "7977-Olivet-St_Detroit_MI_48209_M47726-67795",
        "status": "for_sale",
        "list_date": "2022-10-28T19:09:05Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1900,
          "sold_price": null,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 2178,
          "sqft": 1085,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Market Elite Inc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 49900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4772667795",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99906319379807
              },
              {
                "label": "porch",
                "probability": 0.99925667047501
              },
              {
                "label": "yard",
                "probability": 0.80240666866302
              },
              {
                "label": "house_view",
                "probability": 0.94710165262222
              },
              {
                "label": "house_view",
                "probability": 0.61612641811371
              }
            ],
            "href": "https://ap.rdcpix.com/60d8a2852a136fcbc54f9b5e364ba164l-m3725812123s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.97350114583969
              }
            ],
            "href": "https://ap.rdcpix.com/60d8a2852a136fcbc54f9b5e364ba164l-m245217127s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99457091093063
              }
            ],
            "href": "https://ap.rdcpix.com/60d8a2852a136fcbc54f9b5e364ba164l-m2627683907s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99052995443344
              }
            ],
            "href": "https://ap.rdcpix.com/60d8a2852a136fcbc54f9b5e364ba164l-m2764739797s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.97817558050156
              }
            ],
            "href": "https://ap.rdcpix.com/60d8a2852a136fcbc54f9b5e364ba164l-m2520119485s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949356008",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2940747828",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2933469132",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949356008",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48209",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.12107,
              "lat": 42.301804
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "7977 Olivet St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=7977%20Olivet%20St%2C%20Detroit%2C%20MI%2048209&size=640x480&source=outdoor&signature=IsyL5cSmyyAFgKfeZwMHx7767RI=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/6d89ab38d919bd6ca71da85771cd498bl-m2855530340s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T14:57:15Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "central_air",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "granite_kitchen",
          "master_bedroom",
          "shopping"
        ],
        "permalink": "7737-Woodward-Ave_Detroit_MI_48202_M45865-54187",
        "status": "for_sale",
        "list_date": "2022-10-28T18:58:23Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 2005,
          "sold_price": 207932,
          "baths_full": 2,
          "name": null,
          "baths_half": 1,
          "lot_sqft": null,
          "sqft": 1547,
          "baths": 3,
          "sub_type": "condo",
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 3,
          "type": "condos"
        },
        "branding": [
          {
            "name": "S&P Realty",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 290000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4586554187",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.48496183753014
              },
              {
                "label": "road_view",
                "probability": 0.94135981798172
              }
            ],
            "href": "https://ap.rdcpix.com/6d89ab38d919bd6ca71da85771cd498bl-m2855530340s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "road_view",
                "probability": 0.98992162942886
              }
            ],
            "href": "https://ap.rdcpix.com/6d89ab38d919bd6ca71da85771cd498bl-m1514132168s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.40926361083984
              },
              {
                "label": "road_view",
                "probability": 0.94176435470581
              }
            ],
            "href": "https://ap.rdcpix.com/6d89ab38d919bd6ca71da85771cd498bl-m2939507089s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.85581815242767
              },
              {
                "label": "road_view",
                "probability": 0.90331602096558
              }
            ],
            "href": "https://ap.rdcpix.com/6d89ab38d919bd6ca71da85771cd498bl-m4024776889s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99889189004898
              },
              {
                "label": "porch",
                "probability": 0.83655893802643
              }
            ],
            "href": "https://ap.rdcpix.com/6d89ab38d919bd6ca71da85771cd498bl-m1039681666s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949355404",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2945664517",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2943953007",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2936673132",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2932399791",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2932066956",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949355404",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48202",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.075873,
              "lat": 42.3729
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "7737 Woodward Ave Unit 59"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=7737%20Woodward%20Ave%20Unit%2059%2C%20Detroit%2C%20MI%2048202&size=640x480&source=outdoor&signature=tzUC_w-3euQXPSDIJ33de_mGJ9I=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/4ba837f1ebc9549b3728ec345732ae2fl-m3064125588s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-30T11:57:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "central_air",
          "dining_room",
          "family_room",
          "fireplace",
          "basement",
          "two_or_more_stories",
          "updated_kitchen",
          "big_yard"
        ],
        "permalink": "2229-Glynn-Ct_Detroit_MI_48206_M45799-18374",
        "status": "for_sale",
        "list_date": "2022-10-28T18:41:51Z",
        "open_houses": [
          {
            "start_date": "2022-10-30T12:00:00",
            "description": "Come tour this beautifully updated Colonial near the Historic Boston Edison Neighborhood!",
            "end_date": "2022-10-30T14:00:00",
            "dst": true,
            "time_zone": "EST"
          }
        ],
        "description": {
          "baths_3qtr": null,
          "year_built": 1920,
          "sold_price": 48000,
          "baths_full": 2,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 4792,
          "sqft": 2576,
          "baths": 3,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 2,
          "beds": 5,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "EXP Realty, LLC",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 325000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4579918374",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99963462352753
              },
              {
                "label": "porch",
                "probability": 0.99967133998871
              },
              {
                "label": "yard",
                "probability": 0.99875676631927
              },
              {
                "label": "house_view",
                "probability": 0.99995172023773
              },
              {
                "label": "house_view",
                "probability": 0.99985873699188
              }
            ],
            "href": "https://ap.rdcpix.com/4ba837f1ebc9549b3728ec345732ae2fl-m3064125588s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.99993085861206
              }
            ],
            "href": "https://ap.rdcpix.com/4ba837f1ebc9549b3728ec345732ae2fl-m556644268s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.99751424789429
              }
            ],
            "href": "https://ap.rdcpix.com/4ba837f1ebc9549b3728ec345732ae2fl-m3232739190s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.95612156391144
              }
            ],
            "href": "https://ap.rdcpix.com/4ba837f1ebc9549b3728ec345732ae2fl-m1700416950s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "dining_room",
                "probability": 0.99072229862213
              }
            ],
            "href": "https://ap.rdcpix.com/4ba837f1ebc9549b3728ec345732ae2fl-m320038564s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949353566",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2947733423",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2933830925",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2921849677",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "615781733",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "614770533",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949353566",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48206",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.107119,
              "lat": 42.380424
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "2229 Glynn Ct"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=2229%20Glynn%20Ct%2C%20Detroit%2C%20MI%2048206&size=640x480&source=outdoor&signature=CX7PIw5Dc8Re4KUvGNivbV3OtAo=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/cac3fce8700573b1d73da7dd00aafe8dl-m2915606121s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-29T23:05:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "central_air",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "big_yard",
          "front_porch"
        ],
        "permalink": "20030-Roselawn-St_Detroit_MI_48221_M35248-39936",
        "status": "for_sale",
        "list_date": "2022-10-28T18:34:09Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1924,
          "sold_price": null,
          "baths_full": 2,
          "name": null,
          "baths_half": null,
          "lot_sqft": 5227,
          "sqft": 1260,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Treasure Homes, Inc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 162900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3524839936",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99786013364792
              },
              {
                "label": "porch",
                "probability": 0.78843706846237
              },
              {
                "label": "porch",
                "probability": 0.99990880489349
              },
              {
                "label": "yard",
                "probability": 0.98562902212143
              },
              {
                "label": "house_view",
                "probability": 0.9799752831459
              },
              {
                "label": "house_view",
                "probability": 0.85538363456726
              }
            ],
            "href": "https://ap.rdcpix.com/cac3fce8700573b1d73da7dd00aafe8dl-m2915606121s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99874323606491
              },
              {
                "label": "porch",
                "probability": 0.99763941764832
              },
              {
                "label": "porch",
                "probability": 0.9999281167984
              }
            ],
            "href": "https://ap.rdcpix.com/cac3fce8700573b1d73da7dd00aafe8dl-m126568156s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "porch",
                "probability": 0.9345914721489
              },
              {
                "label": "porch",
                "probability": 0.86492550373077
              }
            ],
            "href": "https://ap.rdcpix.com/cac3fce8700573b1d73da7dd00aafe8dl-m1192538s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "porch",
                "probability": 0.9988169670105
              },
              {
                "label": "porch",
                "probability": 0.99864882230759
              }
            ],
            "href": "https://ap.rdcpix.com/cac3fce8700573b1d73da7dd00aafe8dl-m2309055520s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.98060536384583
              },
              {
                "label": "porch",
                "probability": 0.95053046941757
              },
              {
                "label": "house_view",
                "probability": 0.98316091299057
              },
              {
                "label": "house_view",
                "probability": 0.58629477024078
              }
            ],
            "href": "https://ap.rdcpix.com/cac3fce8700573b1d73da7dd00aafe8dl-m691011290s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949353206",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            }
          ]
        },
        "listing_id": "2949353206",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48221",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.153047,
              "lat": 42.44053
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "20030 Roselawn St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=20030%20Roselawn%20St%2C%20Detroit%2C%20MI%2048221&size=640x480&source=outdoor&signature=VIoA9A0oa2nTmO4OyNw0ZgoBV0k=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/501886f34f7a9130f8fba99c07a11494l-m3877608954s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T14:08:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "rental_property",
          "fixer_upper"
        ],
        "permalink": "10772-Wayburn-St_Detroit_MI_48224_M36983-91282",
        "status": "for_sale",
        "list_date": "2022-10-28T18:08:57Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1939,
          "sold_price": 69000,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 3920,
          "sqft": 1178,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Next Level Realty & Investments, Llc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 82000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3698391282",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.98724514245987
              },
              {
                "label": "road_view",
                "probability": 0.94141316413879
              },
              {
                "label": "yard",
                "probability": 0.99711537361145
              },
              {
                "label": "house_view",
                "probability": 0.73073387145996
              },
              {
                "label": "house_view",
                "probability": 0.94077324867249
              }
            ],
            "href": "https://ap.rdcpix.com/501886f34f7a9130f8fba99c07a11494l-m3877608954s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949352191",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "618186577",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "617123981",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949352191",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48224",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.95561,
              "lat": 42.417226
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "10772 Wayburn St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=10772%20Wayburn%20St%2C%20Detroit%2C%20MI%2048224&size=640x480&source=outdoor&signature=pJgoXhLwctgDsBrkc93YgSzUfz4=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/1ad1cf143fff7b9b2b514c621b785100l-m2076921103s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T14:04:05Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": "Market Elite Inc"
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "big_yard",
          "fenced_yard",
          "master_bedroom"
        ],
        "permalink": "8166-Lauder-St_Detroit_MI_48228_M49483-37705",
        "status": "for_sale",
        "list_date": "2022-10-28T18:05:49Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1942,
          "sold_price": 21000,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 3920,
          "sqft": 940,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 1,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Market Elite Inc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 54900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4948337705",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99892669916153
              },
              {
                "label": "porch",
                "probability": 0.9916096329689
              },
              {
                "label": "yard",
                "probability": 0.99989247322083
              },
              {
                "label": "house_view",
                "probability": 0.99480706453323
              },
              {
                "label": "house_view",
                "probability": 0.98802185058594
              }
            ],
            "href": "https://ap.rdcpix.com/1ad1cf143fff7b9b2b514c621b785100l-m2076921103s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99715185165405
              },
              {
                "label": "porch",
                "probability": 0.99988865852356
              },
              {
                "label": "yard",
                "probability": 0.99973505735397
              },
              {
                "label": "house_view",
                "probability": 0.85476934909821
              },
              {
                "label": "house_view",
                "probability": 0.79812526702881
              }
            ],
            "href": "https://ap.rdcpix.com/1ad1cf143fff7b9b2b514c621b785100l-m2541870833s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99825650453568
              },
              {
                "label": "porch",
                "probability": 0.99989211559296
              },
              {
                "label": "yard",
                "probability": 0.99924778938293
              },
              {
                "label": "house_view",
                "probability": 0.6320099234581
              },
              {
                "label": "house_view",
                "probability": 0.79119396209717
              }
            ],
            "href": "https://ap.rdcpix.com/1ad1cf143fff7b9b2b514c621b785100l-m681222742s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99720746278763
              },
              {
                "label": "yard",
                "probability": 0.99742788076401
              },
              {
                "label": "house_view",
                "probability": 0.72481137514114
              },
              {
                "label": "house_view",
                "probability": 0.71482449769974
              }
            ],
            "href": "https://ap.rdcpix.com/1ad1cf143fff7b9b2b514c621b785100l-m1494623017s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.81143552064896
              },
              {
                "label": "yard",
                "probability": 0.87858688831329
              }
            ],
            "href": "https://ap.rdcpix.com/1ad1cf143fff7b9b2b514c621b785100l-m2545345761s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949351898",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "2940751958",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2932579990",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "2393492578",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "615046285",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949351898",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48228",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.189039,
              "lat": 42.353438
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "8166 Lauder St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=8166%20Lauder%20St%2C%20Detroit%2C%20MI%2048228&size=640x480&source=outdoor&signature=5j1-R9Wwb0TiM6p6kDo76DVJKpQ=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/5e234bbb9d4e9801a4ad7ad71b7cf64el-m4106439233s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T13:35:06Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "central_air",
          "dining_room",
          "fireplace",
          "forced_air",
          "furnished",
          "washer_dryer",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "updated_kitchen",
          "new_roof"
        ],
        "permalink": "11468-Beaconsfield-St_Detroit_MI_48224_M41585-42733",
        "status": "for_sale",
        "list_date": "2022-10-28T17:36:06Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1942,
          "sold_price": null,
          "baths_full": 1,
          "name": null,
          "baths_half": null,
          "lot_sqft": 4356,
          "sqft": 994,
          "baths": 1,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Re/Max First",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 119900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "4158542733",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99950635433197
              },
              {
                "label": "porch",
                "probability": 0.97923856973648
              },
              {
                "label": "road_view",
                "probability": 0.43046468496323
              },
              {
                "label": "yard",
                "probability": 0.99983942508698
              },
              {
                "label": "house_view",
                "probability": 0.99235218763351
              },
              {
                "label": "house_view",
                "probability": 0.99363625049591
              }
            ],
            "href": "https://ap.rdcpix.com/5e234bbb9d4e9801a4ad7ad71b7cf64el-m4106439233s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99796652793884
              },
              {
                "label": "porch",
                "probability": 0.99421894550323
              },
              {
                "label": "yard",
                "probability": 0.99733364582062
              },
              {
                "label": "house_view",
                "probability": 0.98856502771378
              }
            ],
            "href": "https://ap.rdcpix.com/5e234bbb9d4e9801a4ad7ad71b7cf64el-m3424588206s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.97995913028717
              },
              {
                "label": "porch",
                "probability": 0.99928122758865
              },
              {
                "label": "yard",
                "probability": 0.83047789335251
              },
              {
                "label": "house_view",
                "probability": 0.91566276550293
              },
              {
                "label": "house_view",
                "probability": 0.75318795442581
              }
            ],
            "href": "https://ap.rdcpix.com/5e234bbb9d4e9801a4ad7ad71b7cf64el-m2580612873s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "garage",
                "probability": 0.99975794553757
              },
              {
                "label": "road_view",
                "probability": 0.81637901067734
              }
            ],
            "href": "https://ap.rdcpix.com/5e234bbb9d4e9801a4ad7ad71b7cf64el-m2466483282s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949350651",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            }
          ]
        },
        "listing_id": "2949350651",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48224",
            "state": "Michigan",
            "coordinate": {
              "lon": -82.944719,
              "lat": 42.425224
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "11468 Beaconsfield St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=11468%20Beaconsfield%20St%2C%20Detroit%2C%20MI%2048224&size=640x480&source=outdoor&signature=csEcq5I_QCmVIA3Advp1c-AcVLI=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/eac36a6ce801d9f0f168ff325b81d0c1l-m2748723907s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T13:26:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "forced_air",
          "basement",
          "two_or_more_stories",
          "garage_1_or_more",
          "garage_2_or_more",
          "big_yard",
          "new_roof"
        ],
        "permalink": "20554-Picadilly-Rd_Detroit_MI_48221_M32636-82932",
        "status": "for_sale",
        "list_date": "2022-10-28T17:27:12Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1946,
          "sold_price": 50000,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 4792,
          "sqft": 1424,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": 2,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "@properties Detroit",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 249900,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3263682932",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99858981370926
              },
              {
                "label": "porch",
                "probability": 0.7061852812767
              },
              {
                "label": "yard",
                "probability": 0.9983646273613
              },
              {
                "label": "house_view",
                "probability": 0.95036774873734
              },
              {
                "label": "house_view",
                "probability": 0.69615465402603
              }
            ],
            "href": "https://ap.rdcpix.com/eac36a6ce801d9f0f168ff325b81d0c1l-m2748723907s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.99895131587982
              }
            ],
            "href": "https://ap.rdcpix.com/eac36a6ce801d9f0f168ff325b81d0c1l-m3919771036s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.99925714731216
              }
            ],
            "href": "https://ap.rdcpix.com/eac36a6ce801d9f0f168ff325b81d0c1l-m2403032421s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "living_room",
                "probability": 0.99974292516708
              }
            ],
            "href": "https://ap.rdcpix.com/eac36a6ce801d9f0f168ff325b81d0c1l-m2766677192s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.99930250644684
              }
            ],
            "href": "https://ap.rdcpix.com/eac36a6ce801d9f0f168ff325b81d0c1l-m1482795558s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "essentials"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949350327",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "580001257",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "516906541",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "516998253",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "510897797",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "506293317",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949350327",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48221",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.137307,
              "lat": 42.445994
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "20554 Picadilly Rd"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=20554%20Picadilly%20Rd%2C%20Detroit%2C%20MI%2048221&size=640x480&source=outdoor&signature=8Xgh2sUL8vsvWKJf4HcvJd3oMa0=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      },
      {
        "primary_photo": {
          "href": "https://ap.rdcpix.com/014de92c706a82617f5fab9411b77a2dl-m824376304s-w1024_h768.jpg"
        },
        "last_update_date": "2022-10-28T13:26:04Z",
        "source": {
          "plan_id": null,
          "agents": [
            {
              "office_name": null
            }
          ],
          "spec_id": null,
          "type": "mls"
        },
        "tags": [
          "dining_room",
          "forced_air",
          "basement",
          "two_or_more_stories",
          "rental_property"
        ],
        "permalink": "11725-Robson-St_Detroit_MI_48227_M30887-17833",
        "status": "for_sale",
        "list_date": "2022-10-28T17:27:12Z",
        "open_houses": null,
        "description": {
          "baths_3qtr": null,
          "year_built": 1936,
          "sold_price": 72500,
          "baths_full": 1,
          "name": null,
          "baths_half": 1,
          "lot_sqft": 4356,
          "sqft": 1486,
          "baths": 2,
          "sub_type": null,
          "baths_1qtr": null,
          "garage": null,
          "stories": 2,
          "beds": 3,
          "type": "single_family"
        },
        "branding": [
          {
            "name": "Next Level Realty & Investments, Llc",
            "photo": null,
            "type": "Office"
          }
        ],
        "list_price": 90000,
        "lead_attributes": {
          "show_contact_an_agent": true
        },
        "property_id": "3088717833",
        "photos": [
          {
            "tags": [
              {
                "label": "house_view",
                "probability": 0.99859589338303
              },
              {
                "label": "porch",
                "probability": 0.8294506072998
              },
              {
                "label": "yard",
                "probability": 0.99708718061447
              },
              {
                "label": "house_view",
                "probability": 0.980548620224
              },
              {
                "label": "house_view",
                "probability": 0.99016034603119
              }
            ],
            "href": "https://ap.rdcpix.com/014de92c706a82617f5fab9411b77a2dl-m824376304s-w1024_h768.jpg"
          },
          {
            "tags": [
              {
                "label": "unknown",
                "probability": 0.9705496430397
              }
            ],
            "href": "https://ap.rdcpix.com/014de92c706a82617f5fab9411b77a2dl-m2062573880s-w1024_h768.jpg"
          }
        ],
        "flags": {
          "is_new_construction": null,
          "is_for_rent": null,
          "is_subdivision": null,
          "is_contingent": null,
          "is_price_reduced": null,
          "is_pending": null,
          "is_foreclosure": null,
          "is_plan": null,
          "is_coming_soon": null,
          "is_new_listing": true
        },
        "community": null,
        "products": {
          "brand_name": "basic_opt_in"
        },
        "virtual_tours": null,
        "other_listings": {
          "rdc": [
            {
              "listing_id": "2949350326",
              "listing_key": null,
              "status": "for_sale",
              "primary": true
            },
            {
              "listing_id": "615961237",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "577237565",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            },
            {
              "listing_id": "575847345",
              "listing_key": null,
              "status": "off_market",
              "primary": null
            }
          ]
        },
        "listing_id": "2949350326",
        "price_reduced_amount": null,
        "location": {
          "address": {
            "postal_code": "48227",
            "state": "Michigan",
            "coordinate": {
              "lon": -83.192479,
              "lat": 42.374517
            },
            "city": "Detroit",
            "state_code": "MI",
            "line": "11725 Robson St"
          },
          "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=11725%20Robson%20St%2C%20Detroit%2C%20MI%2048227&size=640x480&source=outdoor&signature=U2J_63_w6qZF2VWqsmiwGNKB7ds=",
          "county": {
            "fips_code": "26163",
            "name": "Wayne"
          }
        },
        "matterport": false
      }
    ]
  }
}