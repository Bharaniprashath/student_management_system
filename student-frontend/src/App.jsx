import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainLayout from './Layouts/MainLayout'
import StudentDetails from './pages/StudentDetails'
import AddStudent from './pages/AddStudentPage'
import EditStudent from './pages/EditPage'
import EditList from './pages/StudentsEditPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
    return (
        <Router>
            <ToastContainer position="top-right" autoClose={3000} />
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route path='/details' element={<StudentDetails/>} />
                    <Route path="/addstudent" element={<AddStudent/>}></Route>
                    <Route path="/students" element={<StudentDetails/>}></Route>
                    <Route path="/editstudent/:id" element={<EditStudent/>}></Route>
                    <Route path="/editstudent" element={<EditList/>}></Route>
                    <Route index path='/login' element={<LoginPage />}></Route>
                    <Route path='/register' element={<RegisterPage />}></Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
