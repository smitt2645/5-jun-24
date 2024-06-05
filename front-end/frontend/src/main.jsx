import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import "./index.css"
import { Store } from './Store/Store.js'
import { Register } from './components/Register.jsx'
import Login from './components/Login.jsx'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
    
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />

    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />


    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={Store}>
    
    <RouterProvider router={Router}/>
  
  </Provider>

  </React.StrictMode>,
)
