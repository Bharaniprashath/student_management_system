import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import './MainLayout.css'

const MainLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

export default MainLayout;