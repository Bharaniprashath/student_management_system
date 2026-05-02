const token = localStorage.getItem("token");

const deleteStudent = async (id) => {
    try{
        await fetch('http://localhost:8080/student/'+id, {
            method:"DELETE",
            headers:{
                'Authorization' : `Bearer ${token}`,
                'content-type' : 'application/json'
            }
        })
    }catch(error){
        console.error("Error deleting student:", error);
    }
}

export default deleteStudent;