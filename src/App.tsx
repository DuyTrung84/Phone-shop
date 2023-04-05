import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import UserLayout from "./components/userLayout"
import Home from './pages/home'
import ProductDetail from './components/productDetail'
import AdminLayout from './components/admin/adminLayout'
import Show from './components/admin/show'
import Create from './components/admin/create'
import Signin from './components/signin'
import Signup from './components/signup'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='/detail' element={<ProductDetail />} />

      </Route>
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Show />} />
        <Route path='create' element={<Create />} />
      </Route>

    </Routes>
  </BrowserRouter>
}
export default App
