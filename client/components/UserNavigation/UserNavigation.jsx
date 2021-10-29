import React, { Fragment, useState, useContext, useEffect } from 'react'
import { Style } from './style.js'
import Link from 'next/link'
import { AuthContext } from '../../context/AuthContext.js'
const UserNavigation = () => {
    // const [showMenu, setShowMenu] = useState(true)
    const { logoutUser } = useContext(AuthContext)
    return (
        <Fragment>
            <Style>
                <h2>Hello</h2>

                <div className="menu">
                    <ul>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li onClick={logoutUser}>Logout</li>
                    </ul>
                </div>
            </Style>
        </Fragment>
    )
}

export default UserNavigation
