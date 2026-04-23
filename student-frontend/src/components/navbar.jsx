import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/students">Details</Link></li>
                <li><Link to="/editstudent">Edit/Delete</Link></li>
                <li><Link to="/attendance">Attendance</Link></li>
                <li><Link to="/login">Login/Signup</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar