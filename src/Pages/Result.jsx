import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultBox from "../Components/ResultBox";
import bestmatch from "../Data/bestmatch";

const API_KEY = import.meta.env.VITE_API_KEY


const Result = ({handleInfo, removeInfo}) => {
  const params = useParams();
  const [result, setResult] = useState({
    "bestMatches": [
    ]})
  
    const fetchData = async () => {
       
        const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${params.stock}&apikey=${API_KEY}`)
        const data = await response.json()
        console.log(data)
        setResult(data)
      }

      useEffect(() => {
        fetchData()
      }, [params.stock])

    
    const MakeResult = () => {
        
        const resultArr = []
        for (let i = 0; i < result.bestMatches.length; i++) {
            
            resultArr.push(<ResultBox 
                name={result.bestMatches[i]["2. name"]} 
                symbol={result.bestMatches[i]["1. symbol"]}
                type={result.bestMatches[i]["3. type"]}
                region={result.bestMatches[i]["4. region"]}
                handleInfo={handleInfo}
                removeInfo={removeInfo}
                key={result.bestMatches[i]["1. symbol"]}
                />)
        }
        return resultArr
    }
    
  return (
    <>
    <div className="section">
      <div className="header">
        <h1>Results</h1>
        <p>Search results for "{params.stock}":</p>
      </div>
      <div>
        <MakeResult />
      </div>
      </div>
    </>
  );
};

export default Result;
