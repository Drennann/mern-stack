import "./CreateForm.css";
import {useNavigate} from "react-router-dom";

export default function CreateForm() {

    let navigate = useNavigate();

    let onClickBackHandler = (e) => {
        e.preventDefault()
        navigate("../")
    }

    let onSubmitHandler = async e => {
        e.preventDefault();
        let title = e.target[0].value;
        let description = e.target[1].value;
        let res = {title, description}
        await fetch("/tasks", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(res)
        })
        navigate("../")
    }

    return (
        <div className="CreateFormContainer">
            <form className="CreateForm" onSubmit={onSubmitHandler}>
                <input className ="title" type="text"></input>
                <textarea className ="description" type="text"></textarea>
                <div className="ButtonSection">
                    <button onClick = {onClickBackHandler}>Volver</button>
                    <button>Aceptar</button>
                </div>
            </form>
        </div>
        )
}