import "./TasksForm.css";
import TaskForm from "./TaskForm.js"
import { useEffect , useState} from "react";
import CreateTaskForm from "./CreateTaskForm";

export default function TasksForm (){

    let [tasks, setTasks] = useState([])

    let fetchTasks = async () => {
        let res = await fetch("/tasks");
        res = await res.json();
        return res;
    }

    useEffect(() => {
        (async () => {
            let res =  await fetchTasks();
            setTasks(res);
        })();
    } ,[]);

    return(
        <div>
            <div className="TasksForm">
                {tasks.length > 0 ? tasks.map(task => {
                    return (
                        <TaskForm key = {task._id} title={task.title} description = {task.description} _id={task._id} setTasks={setTasks}/>
                    )
                }) : <div>No Hay Elementos Disponibles</div>}
            </div>
            <div className="ButtonContainer">
                <CreateTaskForm/>
            </div>
        </div>
    )
}