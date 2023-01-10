import { useState } from "react"
import TextField from "../Components/TextField"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { editTask } from "./taskSlice"

const EditTask = () => {

    const params = useParams()
    const dispatch = useDispatch()
    console.log(params.id)
    const tasks = useSelector(store => store.tasks)
    const navigate = useNavigate()
    const existingTask = tasks.filter(todo => todo.id === params.id)
    console.log(existingTask)
    const { name, text, note } = existingTask[0]

    const [values, setValues] = useState({
       name,
       text,
       note
    })

    const handleEdit = () => {
        setValues({ name: "", text: "", note: ""})
        console.log(values)
        dispatch(editTask({
            id: params.id,
            name: values.name,
            text: values.text,
            note: values.note
        }))
        navigate("/")
    }

    return(
        <div className="container">
            <input
                type="text"
                value={values.note}
                onChange={(e) => setValues({...values, note: e.target.value})}
            />
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
            <button className="add-btn" onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default EditTask;