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
            <div className="removebutton">
            <RemoveCircleOutlineIcon onClick={handleRemove}/>
            </div>
            
            
            <p className="pouchSym">{symbol}</p>
            <p>{name}</p>
            <div className="launch"><LaunchIcon onClick={handleClick}/></div>
        </div>
    )
}

export default PouchResultBox