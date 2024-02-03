import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from 'react-router-dom'
import {Home,Login,Register,Dashboard } from './components/index.js'



const router=createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>} />
      </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
