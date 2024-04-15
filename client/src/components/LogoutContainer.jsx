import React, { useState } from 'react';
import Wrapper from "../assets/wrappers/LogoutContainer"
import { useDashboardContext } from "../pages/DashboardLayout"
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';


function LogoutContainer() {
    const [showLogout, setShowLogout] = useState(false);
    const { user, logoutUser } = useDashboardContext();

    return (
        <Wrapper>
            <button className='btn logout-btn' onClick={() => setShowLogout(!showLogout)}>
                <FaUserCircle />
                {user?.name}
                <FaCaretDown />
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                <div className="dropdown-btn" onClick={logoutUser}>logout</div>
            </div>
        </Wrapper>
    )
}

export default LogoutContainer
