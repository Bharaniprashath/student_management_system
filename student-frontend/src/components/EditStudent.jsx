import "./EditStudent.css"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify'

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [regNo, setRegNo] = useState("");
    const [age, setAge] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:8080/student/${id}`);
                const data = await res.json();
                setName(data.name);
                setEmail(data.email);
                setRegNo(data.regNo);
                setAge(data.age);
                setMobileNo(data.mobileNo);
            } catch (error) {
                console.error("Error fetching student details:", error);
                toast.error("Failed to fetch student details");
            } finally {
                setLoading(false);
            }
        };
        fetchStudent();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const studentData = {
            id,
            name,
            email,
            regNo,
            age,
            mobileNo
        };
        try {
            await fetch(`http://localhost:8080/student/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(studentData)
            })
            toast.success("Student updated successfully!");
            navigate('/students');
        } catch (error) {
            console.error("Error updating student:", error);
            toast.error("Failed to update student");
        }
    }

    if (loading) return <div className="loading-state">Loading student details...</div>;

    return (
        <div className="form-container">
            <header className="form-header">
                <h2>Edit Student Details</h2>
                <p>Update the information for student: <strong>{name}</strong></p>
            </header>

            <form className="student-form" onSubmit={handleUpdate}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="regNo">Registration Number</label>
                        <input
                            id="regNo"
                            type="number"
                            value={regNo}
                            onChange={(e) => setRegNo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input
                            id="age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="mobileNo">Mobile Number</label>
                    <input
                        id="mobileNo"
                        type="number"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        required
                    />
                </div>

                <div className="form-actions">
                    <button type="button" className="btn-cancel" onClick={() => navigate('/students')}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Update Student</button>
                </div>
            </form>
        </div>
    )
}

export default EditStudent