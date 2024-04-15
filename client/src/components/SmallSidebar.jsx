import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from "react-icons/fa"
import { useDashboardContext } from "../pages/DashboardLayout"
import { NavLink } from "react-router-dom";
import Logo from "./Logo"
import links from "../utils/links"
import  Navlinks  from "./Navlinks"

function SmallSidebar() {
  const {showSidebar, toggleSidebar} = useDashboardContext()
  return (
 <Wrapper>
  <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
    <div className="content">
      <button type="button" className="close-btn" onClick={toggleSidebar}><FaTimes /></button>
      <header>
        <Logo />
        <h4 className="logo-text">dashboard</h4>
      </header>
     <Navlinks/>
    </div>
  </div>
</Wrapper>
  )
}

export default SmallSidebar
