import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Register from './Register.jsx'
import Login from './Login.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Menu from './components/Menu.jsx'
import Admin from './Admin.jsx'
import PaymentPage from './components/PaymentPage.jsx'
import Products from './components/Products.jsx'
import BookTable from './components/BookTable.jsx'
import OrderPage from './components/OrderPage.jsx'
import VegPage from './components/VegPage.jsx'
import NonVeg from './components/NonVeg.jsx'
import Juice from './components/Juice.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<App/>}></Route>
   <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/app' element={<App/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/menu' element={<Menu/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
    <Route path='/payment' element={<PaymentPage/>}></Route>
    <Route path='/admin/products' element={<Products/>}></Route>
    <Route path='/book-table' element={<BookTable/>}></Route> 
    <Route path="/order" element={<OrderPage />} />
    <Route path="/veg" element={<VegPage />} />
    <Route path="/nonveg" element={<NonVeg />} />
    <Route path="/juice" element={<Juice />} />
   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
  
)
