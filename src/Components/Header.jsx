import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import { BsFiles } from "react-icons/bs";
import { BsListTask } from "react-icons/bs";

const Header = () => {

    return(
        <header>            
            <ul className="menu-list">
                <li>
                    <NavLink to="/"><BsListTask className="icon-custom"/>Úkoly</NavLink>
                </li>
                <li>
                    <NavLink to="/category"><BsFiles className="icon-custom"/>Přehled</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;