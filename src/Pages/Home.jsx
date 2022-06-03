import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const Home = () => {
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Home