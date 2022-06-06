import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';


const ResultBox = ({name, symbol, type, region, handleInfo, removeInfo}) => {
    const [add, setAdd] = useState(false)

    const handleClick = () => {
        
            setAdd(true)
            handleInfo(symbol, name)
        
        
    }
    
    return (
        <div className="resultbox" key={symbol}>
            <div className={add === true? "addbutton" : "notadded"} onClick={handleClick}><AddCircleOutlineIcon /></div>
            <h3>{name}</h3>
            <p>Symbol: {symbol}</p>
            <p>Type: {type}</p>
            <p>Country: {region}</p>
            
            
            
        </div>
    )
}

export default ResultBox;