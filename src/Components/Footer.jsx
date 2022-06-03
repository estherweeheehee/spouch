import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
        <div className="footer">
            
            {/* <div className="footerleft"></div> */}
            
            <HomeIcon /> 
            <InstagramIcon/>
            <FacebookIcon />
            <div className="contactlink" >
                
                <Link to="/contact">Contact Us</Link>
            </div>

        <div className="footerright">
            All Rights Reserved
            </div>
            
        </div>
        </>
    )
}

export default Footer;