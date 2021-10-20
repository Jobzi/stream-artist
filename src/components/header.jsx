import { Link } from 'wouter'
import style from './header.module.css'
function Header(){
    return<>
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li className={style.li}>
                    <Link to='/'><a>Home</a></Link>
                </li>
                <li className={style.li}>
                    <Link to='/login'><a>Login</a></Link>
                </li>
                <li className={style.li}>
                    <Link to='/register'><a>Register</a></Link>
                </li>
            </ul>
        </nav>
    </>
}

export default Header