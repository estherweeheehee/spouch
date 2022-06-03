import { useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './Pages/Home'
import Search from './Pages/Search'
import Pouch from './Pages/Pouch'
import OpeningPage from './Pages/OpeningPage'
import Result from './Pages/Result'
import PouchDetailBox from './Components/PouchDetailBox'
import About from './Pages/About'
import Contact from './Pages/Contact'


const API_KEY = import.meta.env.VITE_API_KEY

// localStorage.debug= "simon:*"
// const log = debug("simon:app")
// log("testing")

function App() {
  const [info, setInfo] = useState([])
  const [detail, setDetail] = useState("");

  const obtainDetail = (sym) => {
    setDetail(sym)
    
    
}

  const handleInfo = (sym, name) => {
    if (info.every((entry) => {
      return entry.sym !== sym
    })) {
      setInfo([...info, {
        sym: sym,
        name: name
      }])
    }
    }
    

  const removeInfo = (i) => {
    const updatedInfo = info.filter((entry, index) => i !== index)
    setInfo(updatedInfo)
  }

  const removeAdd = (sym) => {
    const updated = info.filter((entry, index) => entry.sym !== sym)
    setInfo(updated)
  }

  // const fetchData = async () => {
  //   const response = await fetch(`http://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`)
  //   const data = await response.json()
  // }

  return (
    <div className="App">
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<OpeningPage />} />
            <Route path="about" element={<About />}/>
            <Route path="search" element={<Search />}>
              <Route path="result/:stock" element={<Result handleInfo={handleInfo} removeInfo={removeInfo}/>} />
            </Route>
            <Route path="pouch" element={<Pouch info={info} obtainDetail={obtainDetail} removeInfo={removeInfo} />}> 
              <Route path=":id" element={<PouchDetailBox detail={detail} />} />
            </Route>
            <Route path="contact" element={<Contact />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
