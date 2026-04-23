import EditStudent from "../components/EditStudent"
import { useParams } from 'react-router-dom'
import './EditPage.css'

const EditPage = () => {

    const { id } = useParams();

    return (
        <div className="Edit-container">
            <h1>Edit Student</h1>
            <EditStudent id={id} />
        </div>
    )
}

export default EditPage