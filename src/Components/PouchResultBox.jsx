import { useNavigate } from "react-router-dom"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import LaunchIcon from '@mui/icons-material/Launch';

const PouchResultBox = ({symbol, name, obtainDetail, removeInfo, index}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        obtainDetail(symbol)
        navigate(`/pouch/${symbol}`)
    }

    const handleRemove = () => {
        removeInfo(index)
    }

    return (
        <div className="pouchbox">
            <div className="removebutton" onClick={handleRemove}>
            <RemoveCircleOutlineIcon/>
            </div>
            
            
            <p className="pouchSym">{symbol}</p>
            <p>{name}</p>
            <div className="launch" onClick={handleClick}><LaunchIcon/></div>
        </div>
    )
}

export default PouchResultBox