import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import './MainLayout.css'

const MainLayout = () => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <main className="main-content">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default MainLayout;