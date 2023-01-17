import { useState } from "react";
import TextField from "../Components/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "./taskSlice";
import { IoMdDoneAll } from "react-icons/io";

const EditTask = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const tasks = useSelector(store => store.tasks)
    const navigate = useNavigate()
    const existingTask = tasks.filter(todo => todo.id === params.id)
    const { name, text, selectValue } = existingTask[0]

    const [values, setValues] = useState({
       name,
       text,
       selectValue
    })  

    const handleEdit = () => {
        console.log(values)
        dispatch(editTask({
            id: params.id,
            name: values.name,
            text: values.text,
            selectValue: values.selectValue
        }))
        navigate("/")
    }

    return(
        <div className="container">
            <select className="select-options-category" onChange={(e) => setValues({...values, selectValue: e.target.value})}>
                <option className="current-option" value={values.selectValue}>Saoučasná katgorie: {values.selectValue}</option>
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
            <button className="add-btn" onClick={handleEdit}><IoMdDoneAll className="icon-custom" />Uložit</button>
        </div>
    )
}

export default EditTask;