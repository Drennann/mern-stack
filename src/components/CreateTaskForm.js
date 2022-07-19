import "./CreateTaskForm.css";
import {useNavigate} from "react-router-dom";

export default function CreateTaskFunction() {

    let navigate = useNavigate();

    return <button id="createTask" onClick = {() => navigate("./CreateForm")}>Crear Nueva Tarea</button>
}