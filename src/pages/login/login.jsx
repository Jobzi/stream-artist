import React, { useState } from 'react'
import Main from '../../layout/main'
import style from './login.module.css'

function LoginUI () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(username, password)
    console.log('submit login')
  }
  return <>
        <Main>
            <div>
                <form className={style.gridContainer} onSubmit={handleOnSubmit}>
                    <input
                        className={style.input}
                        type="text" value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                    <input
                        className={style.input}
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <button className={style.button}>Login</button>
                </form>
            </div>
        </Main>
    </>
}
export default LoginUI
