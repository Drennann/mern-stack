import "./TaskForm.css"
import { useNavigate } from "react-router-dom"

export default function TaskForm({title, description, _id, setTasks}) {

    let navigate = useNavigate();

    let fetchTasks = async () => {
        let res = await fetch("http://localhost:3001/tasks");
        res = await res.json();
        return res;
    }

    const onClickHandleDelete = async (e) => {
        e.preventDefault();
        await fetch("/tasks/"+_id, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        setTasks(await fetchTasks());
    }

    return(
        <div className="TaskForm">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <div className="ButtonSection">
                <button onClick={onClickHandleDelete}>Eliminar</button>
                <button onClick={() => {navigate("./EditForm", {state:{_id}})}}>Editar</button>    
            </div>
        </div>
    )
}