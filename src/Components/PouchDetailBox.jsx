import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Memo from "./Memo";
import DrawGraph from "./DrawGraph";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY2 = import.meta.env.VITE_API_KEY2;


const PouchDetailBox = () => {
  const params = useParams();
  console.log(params.id);
  const [memo, setMemo] = useState("");
  const [notebook, setNotebook] = useState([]);
  const [overview, setOverview] = useState({
    name: "",
    description: "",
    exchange: "",
    country: "",
    sector: "",
    marketcap: "",
    peratio: "",
    dividendpershare: "",
    dividendyield: "",
    pbratio: "",
    close: "",
    date: "",
    fiscalyearend: "",
    latestquarter: "",
    quarterlyearningsgrowthyoy: "",
    quaterlyrevenuegrowthyoy: "",
    analysttargetprice: "",
    fiftytwoweekhigh: "",
    fiftytwoweeklow: "",
    fiftydaymovingaverage: "",
    twohundreddaymovingaverage: "",
    timeseriesdaily : {}
  });

  const fetchDetails = async () => {
    const response = await fetch(
      `http://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.id}&apikey=${API_KEY}`
    );
    const data = await response.json();

    const response2 = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${params.id}&apikey=${API_KEY2}`
    );
    const price = await response2.json();

    // const lastRefreshed = price["Meta Data"]["3. Last Refreshed"];

    setOverview({
      name: data.Name,
      description: data.Description,
      exchange: data.Exchange,
      country: data.Country,
      sector: data.Sector,
      marketcap: data.MarketCapitalization,
      peratio: data.PERatio,
      dividendpershare: data.DividendPerShare,
      dividendyield: data.DividendYield,
      pbratio: data.PriceToBookRatio,
      // close: price["Time Series (Daily)"][lastRefreshed]["4. close"],
      // date: price["Meta Data"]["3. Last Refreshed"],
      fiscalyearend: data.FiscalYearEnd,
      latestquarter: data.LatestQuarter,
      quarterlyearningsgrowthyoy: data.QuarterlyEarningsGrowthYOY,
      quaterlyrevenuegrowthyoy: data.QuarterlyRevenueGrowthYOY,
      analysttargetprice: data.AnalystTargetPrice,
      fiftytwoweekhigh: data["52WeekHigh"],
      fiftytwoweeklow: data["52WeekLow"],
      fiftydaymovingaverage: data["50DayMovingAverage"],
      twohundreddaymovingaverage: data["200DayMovingAverage"],
      timeseriesdaily: price["Time Series (Daily)"]
    });
  };

  useEffect(() => {
    //fetchDetails()
  }, [params.id]);

  const handleChange = (event) => {
    setMemo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotebook([...notebook, memo]);
    setMemo("");
  };

  const MakeNotebook = () => {
    const notebookArr = [];
    for (let i = 0; i < notebook.length; i++) {
      notebookArr.push(
        <Memo note={notebook[i]} key={i} index={i} deleteMemo={deleteMemo} />
      );
    }
    return notebookArr;
  };

  const deleteMemo = (i) => {
    const newArr = notebook.filter((item, index) => i !== index);
    setNotebook(newArr);
  };



  return (
    <div className="detailbox">
      <h2>{params.id}</h2>
      {/* <h2>{overview.close}</h2>
      <p className="date">As of {overview.date}</p> */}
      <h3>{overview.name}</h3>

      <p>
        <b>Description:</b> {overview.description}
      </p>
      <p>
        <b>Exchange:</b> {overview.exchange}
      </p>
      <p>
        <b>Country:</b> {overview.country}
      </p>
      <p>
        <b>Sector:</b> {overview.sector}
      </p>
      <br />

      <div className="pouchdetailcontainer">
        <div className="leftdetailcontainer">
          <p>
            <b>Market Cap:</b> {parseFloat(overview.marketcap).toLocaleString()}
          </p>
          <p>
            <b>Price to Earnings Ratio:</b> {overview.peratio}
          </p>
          <p>
            <b>Dividend per share:</b> {overview.dividendpershare}
          </p>
          <p>
            <b>Dividend yield:</b> {overview.dividendyield}
          </p>
          <p>
            <b>Price to Book ratio:</b> {overview.pbratio}
          </p>
          <p>
            <b>Fiscal year end:</b> {overview.fiscalyearend}
          </p>
          <p>
            <b>Latest quarter:</b> {overview.latestquarter}
          </p>
          <p>
            <b>Quarterly earnings growth YOY:</b>{" "}
            {overview.quarterlyearningsgrowthyoy}
          </p>
          <p>
            <b>Quarterly revenue growth YOY:</b>{" "}
            {overview.quaterlyrevenuegrowthyoy}
          </p>
        </div>
        <div className="rightdetailcontainer">
          <p>
            <b>52-week high:</b> {overview.fiftytwoweekhigh}
          </p>
          <p>
            <b>52-week low:</b> {overview.fiftytwoweeklow}
          </p>
          <p>
            <b>50-day moving average:</b> {overview.fiftydaymovingaverage}
          </p>
          <p>
            <b>200-day moving average:</b> {overview.twohundreddaymovingaverage}
          </p>
          <p>
            <b>Analyst target price:</b> {overview.analysttargetprice}
          </p>
          <br />
        </div>
      </div>

      <div>
        <DrawGraph timeseriesdaily={overview.timeseriesdaily} />
      </div>


      <h2 className="memoheader">Memos:</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="memo">Memo:</label>
          <input
            id="memo"
            placeholder="enter memo"
            type="text"
            value={memo}
            onChange={handleChange}
          />

          {/* <label for="type">Type:</label>

          <select name="type" id="type">
          <option value="priority">Priority</option>
            <option value="reminder">Reminder</option>
            <option value="notes">Notes</option>
            <option value="priority">Priority</option>
            
          </select> */}
        

          <button>Submit</button>
        </fieldset>
      </form>
      <div className="memobox">
        <MakeNotebook />
      </div>
    </div>
  );
};

export default PouchDetailBox;
