import { useState } from "react";
import TextField from "../Components/TextField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";
import { v4 as uuidv4 } from 'uuid';
import { BsPlusCircle } from "react-icons/bs";

const FormTask = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: "",
        text: ""
    })

    const handleSubmit = () => {
        setValues({ name: "", text: ""})
        dispatch(addTask({
            //id:Math.floor(Math.random() * 1000),
            id: uuidv4(),
            name: values.name,
            text: values.text
        }))
        navigate("/")
    }

    return(
        <div className="container">
            <TextField 
                label="Název"
                value={values.name}
                onChange={(e) => setValues({...values, name: e.target.value})}
                inputProps={ {type: "text", placeholder: "Zadejte název..."} }
            />

            <TextField 
                label="Text"
                value={values.text}
                onChange={(e) => setValues({...values, text: e.target.value})}
                inputProps={ {type: "text", placeholder: "Zadejte úkol..."} }
            />
            <button className="add-btn" onClick={handleSubmit}><BsPlusCircle/>Přidat</button>
        </div>
    )
}

export default FormTask;