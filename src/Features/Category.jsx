import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

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
            <div className="container-row">
                <input type="text" className="search-bar" onChange={handleSearch} placeholder="Vyhledat..." />
                <BiSearchAlt className="icon-custom" />
            </div>
            {filterdTasks.map((todo => {
                return(                
                    <div className="task-card" key={todo.id}>
                        <Link to={`/edit-task/${todo.id}`}>
                        <div className="">
                            <div>{todo.selectValue}</div>
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