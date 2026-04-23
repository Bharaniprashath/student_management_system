import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import StudentDetails from './pages/StudentDetails'
import AddStudent from './pages/AddStudentPage'
import EditStudent from './pages/EditPage'
import EditList from './pages/StudentsEditPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<StudentDetails/>} />
                    <Route path="/addstudent" element={<AddStudent/>}></Route>
                    <Route path="/students" element={<StudentDetails/>}></Route>
                    <Route path="/editstudent/:id" element={<EditStudent/>}></Route>
                    <Route path="/editstudent" element={<EditList/>}></Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
