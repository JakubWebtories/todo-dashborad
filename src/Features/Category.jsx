import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Category = () => {


    const tasks = useSelector(store => store.tasks)

    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const filterdTasks = tasks.filter(task => task.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <div className="container">
            <input type="text" className="search-bar" onChange={handleSearch} placeholder="Vyhledat..." />
            {filterdTasks.map((todo => {
                return(                
                    <div className="task-card" key={todo.id}>
                        <Link to={`/edit-task/${todo.id}`}>
                        <div className="">
                            <h4>{todo.name}</h4>
                            <p>{todo.text}</p>
                        </div>
                        </Link>
                        <div>
                        </div>
                    </div>
           ) }))}

        </div>
    )

}

export default Category;