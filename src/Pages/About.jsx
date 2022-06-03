import SearchIcon from '@mui/icons-material/Search';
import AddCardIcon from '@mui/icons-material/AddCard';
import PreviewIcon from '@mui/icons-material/Preview';
import SaveAsIcon from '@mui/icons-material/SaveAs';

const About = () => {
    return (
        <>  
        <div className="section">
            <br/>
            <h1 className="abouthead">Introducing...<br/><i>Spouch!</i></h1>
            <div className="about">
            <p>Spouch is a platform to simplify your stock management experience.</p>
            <br/>

            <h2 className="header">How to use</h2>
            <div className="aboutdiv">
            <h3 className="aboutheader">Search:</h3>
            <p><SearchIcon /> Search for stocks using keywords or symbols</p>
            <p><AddCardIcon /> Add stocks to your pouch</p>
            </div>

            <div className="aboutdiv">
            <h3 className="aboutheader">Pouch:</h3>
            <p><PreviewIcon/> View in-depth information of the stocks you saved</p>
            <p><SaveAsIcon /> Write and save memos, notes or reminders</p>
            </div>
            </div>
</div>
        </>
    )
}

export default About