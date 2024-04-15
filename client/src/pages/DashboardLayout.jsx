/* eslint-disable react-refresh/only-export-components */
import { Link, Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import {BigSidebar,SmallSidebar, Navbar} from "../components"
import { useState , createContext, useContext} from "react"
const DashboardContext = createContext()


function DashboardLayout() {
const user={name:"Mirjanaa"}
const[showSidebar, setShowSidebar] =useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const toggleSidebar = () => setShowSidebar(!showSidebar)
  const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme)
  const logoutUser = async()=>{
   setTimeout(() => {
     window.location.href = '/'
   })
  }
  return (
    <DashboardContext.Provider value={{user, showSidebar,isDarkTheme,toggleDarkTheme,toggleSidebar, logoutUser}} >
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet/>
          </div>
        </div>
        <Outlet />
      </main>
    </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout

