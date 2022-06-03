import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";

const Search = () => {
    const [stockName, setStockName] = useState("");
    let navigate = useNavigate();

    const handleChange = (event) => {
        setStockName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/result/${stockName}`)
        setStockName("")
    }

    return (
        <div className="search section">
            <div className="header">
                <h1>Search</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="stockName">Enter stock keyword or symbol: </label>
                    <br /><br/>
                    <input className="inputbox"
                        type="text"
                        id="stockName"
                        placeholder="stock"
                        value={stockName}
                        onChange={handleChange}
                    />
                    <button className="inputbox">Search</button>
                </fieldset>
            </form>
            <Outlet />

        </div>
    )
}

export default Search