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
    const { name, text } = existingTask[0]

    const [values, setValues] = useState({
       name,
       text
    })

    const handleEdit = () => {
        setValues({ name: "", text: ""})
        console.log(values)
        dispatch(editTask({
            id: params.id,
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
            <button className="add-btn" onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default EditTask;