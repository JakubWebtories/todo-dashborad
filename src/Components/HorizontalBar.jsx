import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const HorizontalBar = () => {

    const tasks = useSelector(store => store.tasks)

    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const filterdTasks = tasks.filter(task => task.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <section className="horizontal-bar">
            <div className="left-width">
                <h1 id="heading-main">Dashboard</h1>
            </div>
            <div className="right-width">
                <input type="text" className="search-bar" onChange={handleSearch} />
                {/* <div className="search-result-div" >
                    {filterdTasks.map((task => {
                        return(
                            <div >
                            <Link to={`edit-task/${task.id}`}>
                                <p>{task.name}</p>
                            </Link>                        
                            </div>
                        )
                    }))}
                </div> */}
            </div>
        </section>
    )
}

export default HorizontalBar;