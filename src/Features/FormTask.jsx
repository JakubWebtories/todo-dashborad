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
        text: "",
        selectValue: ""
    })

    const handleSubmit = () => {
        setValues({ name: "", text: "", selectValue: ""})
        dispatch(addTask({
            id: uuidv4(),
            name: values.name,
            text: values.text,
            selectValue: values.selectValue
        }))
        navigate("/")
    }

    return(
        <div className="container">
            <label>Kategorie</label>
            <select className="select-options-category" onChange={(e) => setValues({...values, selectValue: e.target.value})}>
                <option value="">Vyberte kategorii...</option>
                <option value="Práce">Práce</option>
                <option value="Volný čas">Volný čas</option>
                <option value="Vzdělávání">Vzdělávání</option>
                <option value="Vzdělávání">Jiné</option>
            </select>
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
            <button className="add-btn" onClick={handleSubmit}><BsPlusCircle className="icon-custom"/>Přidat</button>
        </div>
    )
}

export default FormTask;