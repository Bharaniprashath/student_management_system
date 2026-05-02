import { useState } from 'react';
import './Register.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username,
            password
        }

        await fetch('http://localhost:8080/register', {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                toast.success("Registration successful!");
                navigate('/login');
            } else {
                toast.error("Registration failed.");
                navigate('/register');
            }
        })
        .catch(error => {
            toast.error(`An error occurred.${error.message}`);
        });
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Register</h2>
                <hr width='50%'/>
                <div className="form-group">
                    <input type="text" id='username' placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="form-group">
                    <input type="password" id='password' placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <input type="password" id='confirm-password' placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <p>{confirmPassword !== password ? "Passwords do not match" : ""}</p>
                </div>

                <div className="form-group">
                    <button type="submit" className='btn-primary'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register