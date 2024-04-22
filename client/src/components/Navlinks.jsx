
import { useDashboardContext } from "../pages/DashboardLayout"
import links from "../utils/links"
import { NavLink } from "react-router-dom"

const Navlinks = () => {
    const{user,toggleSidebar} = useDashboardContext();
  return (
    <div className="nav-links">
        {links.map((link) => {
          const {  text, icon, path , id} = link;
          return <NavLink to={path} key={id} className="nav-link" onClick={toggleSidebar} end><span className="icon">{icon}</span>{text}</NavLink>})}
      </div>
  )
}

export default Navlinks
