import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <NavLink to="/">StudentPortal</NavLink>
                </div>
                <ul className="navbar-links">
                    <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/students" className={({ isActive }) => isActive ? 'active' : ''}>Details</NavLink></li>
                    <li><NavLink to="/editstudent" className={({ isActive }) => isActive ? 'active' : ''}>Edit/Delete</NavLink></li>
                    <li><NavLink to="/attendance" className={({ isActive }) => isActive ? 'active' : ''}>Attendance</NavLink></li>
                    <li><NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink></li>
                    <li><NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>Register</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar