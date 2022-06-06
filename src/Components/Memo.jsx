import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

const Memo = ({ note, deleteMemo, index }) => {
  const [done, setDone] = useState(false);

  const handleClick = () => {
    deleteMemo(index);
  };

  const handleDone = () => {
    if (done === false) {
      setDone(true);
    } else {
      setDone(false);
    }
  };

  return (
    <div className="memo" key={index}>
      <p className="memonote">{note} </p>
      <div className="memocontrols">
        <div
          className={done === true ? "done" : "controls"}
          onClick={handleDone}
        >
          <CheckCircleOutlineIcon />
        </div>
        <div className="delete" onClick={handleClick}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default Memo;
