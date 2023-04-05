import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import ContactDetail from './pages/ContactDetail'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path="blogs" element={<Blogs/>}/>
           <Route path="contact" element={<Contact/>}/>
           <Route path="*" element={<NoPage/>}/>
           <Route path="contact/:id" element={<ContactDetail/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router