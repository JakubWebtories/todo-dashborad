import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { deleteTask } from "./taskSlice";
import { BsPlusCircle } from "react-icons/bs";

const TaskList = () => {

    const tasks = useSelector(store => store.tasks)
    const dispatch = useDispatch()

    const renderCard = () => tasks.map(todo => (
                <div className="task-card" key={todo.id}>
                    <div className="">
                        <div>{todo.selectValue}</div>
                        <span>{todo.note}</span>
                        <h4>{todo.name}</h4>
                        <p>{todo.text}</p>
                    </div>
                    <div>
                        <div className="buttons-card">
                        <Link to={`/edit-task/${todo.id}`}>
                            <button className="card-btn"><AiOutlineEdit className="icon-custom"/>Upravit</button>
                        </Link>
                            <button className="card-btn" onClick={() => {dispatch(deleteTask({id: todo.id}))}}><AiFillDelete className="icon-custom"/>Smazat</button>
                        </div>
                    </div>

                </div>
    ))
    
    return(
        <div className="container">
            <h2>Seznam úkolů</h2>
            <Link to={`/add-task`} className="add-task">
                <button className="card-btn"><BsPlusCircle className="icon-custom"/>Přidat úkol</button>
            </Link>
            {tasks.length ? renderCard() : <p className="span-style">Žádné úkoly</p>}
        </div>
    )
}

export default TaskList;