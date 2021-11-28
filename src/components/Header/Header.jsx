import React from 'react'
import { Link } from 'wouter'
import useUser from '../../hooks/useUser'
import style from './header.module.css'
function Header () {
  const { handleSignOut } = useUser()
  return <>
    <nav className={style.nav}>
        <ul className={style.ul}>
            <li className={style.li}>
                <Link to='/' className={style.a}>Home</Link>
            </li>
            <li className={style.li}>
                <Link to='/login' className={style.a}>Login</Link>
            </li>
            <li className={style.li}>
                <Link to='/register'className={style.a}>Register</Link>
            </li>
            <li className={style.li}>
                <Link to='/dashboard'className={style.a}>Dashboard</Link>
            </li>
            {true &&
                <li className={style.li}>
                    <a className={style.a} onClick={handleSignOut}>Sign Out</a>
                </li>
            }
        </ul>
    </nav>
</>
}

export default Header
