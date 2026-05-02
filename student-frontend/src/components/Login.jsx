import { useState } from 'react';
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const userData = {
            username,
            password
        }

        const res = await fetch('http://localhost:8080/login', {
            method: "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(userData)
        })

        const data = await res.json();
        console.log(data.token);
        localStorage.setItem("token", data.token);
        
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
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
                    <button type="submit" className='btn-primary'>Login</button>
                </div>
            </form> 
        </div>
    )
}

export default Login
