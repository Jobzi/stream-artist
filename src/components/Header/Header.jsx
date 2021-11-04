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
                <Link to='/'><a className={style.a}>Home</a></Link>
            </li>
            <li className={style.li}>
                <Link to='/login'><a className={style.a}>Login</a></Link>
            </li>
            <li className={style.li}>
                <Link to='/register'><a className={style.a}>Register</a></Link>
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
