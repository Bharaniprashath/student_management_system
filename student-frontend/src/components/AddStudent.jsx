import "./AddStudent.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [regNo, setRegNo] = useState("");
    const [age, setAge] = useState("");
    const [mobileNo, setMobileNo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const studentData = {
            name,
            email,
            regNo,
            age,
            mobileNo
        };
        console.log(studentData);
        try{
            await fetch("http://localhost:8080/student",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentData)
            })
            return navigate('/students')
        }catch(error){
            console.error("Error adding student:", error);
        }
    }

    return (
        <div className="add-product">
        <table className="reg-form">
            <tbody>
            <tr>
                <td>Name:</td>
                <td>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </td>
            </tr>

            <tr>
                <td>Email ID:</td>
                <td>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </td>
            </tr>

            <tr>
                <td>RegNo:</td>
                <td>
                <input
                    type="number"
                    name="regNo"
                    value={regNo}
                    onChange={(e) => setRegNo(e.target.value)}
                    required
                />
                </td>
            </tr>

            <tr>
                <td>Age:</td>
                <td>
                <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                </td>
            </tr>

            <tr>
                <td>MobileNo:</td>
                <td>
                <input
                    type="number"
                    name="mobileNo"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    required
                />
                </td>
            </tr>
            
            <tr>
                <td colSpan="3">
                <button onClick={handleSubmit}>Submit</button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}

export default AddProduct