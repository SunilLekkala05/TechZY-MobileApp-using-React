import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

function User() {

    const { user } = useContext(UserContext);

    return (
        <div className="user-greeting">
            <span className="user-greeting-icon">👤</span>
            <span className="user-greeting-text">Hi, {user.toUpperCase()}</span>
        </div>
    )
}

export default User;