import { useState } from "react"
import PouchResultBox from "../Components/PouchResultBox"
import overview from "../Data/overview";
import PouchDetailBox from "../Components/PouchDetailBox";
import { Outlet } from "react-router-dom";

const Pouch = ({info, obtainDetail, removeInfo}) => {
    const [detail, setDetail] = useState("");

    const MakePouch = () => {
        const pouchArr = []
        for (let i = 0; i < info.length; i++) {
            pouchArr.push(
                <PouchResultBox symbol={info[i].sym} name={info[i].name} index={i} obtainDetail={obtainDetail} removeInfo={removeInfo} key={i}/>
            )
        }
        return pouchArr;
    }


    return (
        <>
            <div className="section">
            <div className="header">
                <h1>Pouch</h1>
            </div>
            <div className="container">
            <div className="leftcolumn">
                <MakePouch />
            </div>
            <div className="rightcolumn">
                {/* <PouchDetailBox detail={detail} /> */}
                <Outlet/>
            </div>
            </div>
            </div>
        </>
    )
}

export default Pouch;