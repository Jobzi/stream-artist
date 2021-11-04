import React, { useState, useEffect } from 'react'
import style from './register.module.css'
import Main from '../../layout/main'
import useUser from '../../hooks/useUser'

function RegisterUI () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const { error, handleCreateUserWithEmailAndPassword } = useUser()

  useEffect(() => {
    console.log(error)
  }, [error])
  const handleOnSubmit = (event) => {
    event.preventDefault()
    handleCreateUserWithEmailAndPassword(email, password, username).then(() => {
      setUsername('')
      setPassword('')
      setEmail('')
    })
  }
  return <>
        <Main>
            <form className = {style.gridContainer} onSubmit={handleOnSubmit}>
                <input
                  placeholder="Fullname"
                  className={style.input}
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <input
                  placeholder="Email"
                  className={style.input}
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  placeholder="Password"
                  className={style.input}
                  type="text"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <span className={style.span}>Google</span>
                <span className={style.span}>Facebook</span>
                {!error && <button className={style.button}>Register</button>}
            </form>
        </Main>
    </>
}
export default RegisterUI
