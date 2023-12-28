import { NavLink } from "react-router-dom";

export default function Sidebar(){
    return(<div className="parent-side" ><NavLink activeclassname="active" to="Users"className="side-bar"><i className="fa-solid fa-users"></i>Users</NavLink>
    <NavLink activeclassname="active" to="Create"className="side-bar"><i className="fa-solid fa-user-plus"></i> New Users</NavLink>
    <NavLink  activeclassname="active" to="Setings"className="side-bar">
    <i className="fa-solid fa-gears"></i> Setings</NavLink>
   <div>

    
    
   </div>
    </div>)
}