import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import Main from '../../layout/main'
import style from './login.module.css'

function LoginUI () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { handleSignInWithEmailAndPassword } = useUser()

  const handleOnSubmit = (event) => {
    event.preventDefault()
    handleSignInWithEmailAndPassword(username, password).then(() => {
      setUsername('')
      setPassword('')
    })
  }
  return <>
        <Main>
            <div>
                <form className={style.gridContainer} onSubmit={handleOnSubmit}>
                    <input
                        className={style.input}
                        placeholder="Email"
                        type="text" value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                    <input
                        className={style.input}
                        type="password"
                        placeholder="Password"
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
