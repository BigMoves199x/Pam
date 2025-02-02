import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './ui/Signup'
import Login from './ui/Login'
import Home from './components/Home'
import ProductForm from './ui/ProductForm'
import Dashboard from './components/Dashboard'


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/product' element={<ProductForm />}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
