import React from 'react'
import Main from '../../layout/main'

function RegisterUI () {
  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
  }
  return <>
        <Main>
            <form onSubmit={handleOnSubmit}>
                <input type="text" />
                <input type="text" />
                <span>Google</span>
                <span>Facebook</span>
                <button>Register</button>
            </form>
        </Main>
    </>
}
export default RegisterUI
