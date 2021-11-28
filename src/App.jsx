import React, { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { Route, Switch } from 'wouter'
import Header from './components/Header/Header'
import IndexUI from './pages/index'
import LoginUI from './pages/login/login'
import RegisterUI from './pages/register/register'

import './App.css'
import { db } from './firebase/firebaseConfig.js'
import Footer from './components/Footer/Footer'
import DashboardUI from './pages/dashboard/dashboard'

function App () {
  useEffect(() => {
    const getUser = async () => {
      const datos = await getDocs(collection(db, 'users'))
      console.log(datos)
    }
    getUser()
  }, [])
  return (
    <>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' component={IndexUI}/>
          <Route path='/login' component={LoginUI}/>
          <Route path='/register' component={RegisterUI}/>
          <Route path='/dashboard' component={DashboardUI}/>
        </Switch>
        <Footer/>
      </div>
    </>
  )
}

export default App
