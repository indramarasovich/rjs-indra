import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Carrousel from './components/Carrousel/Carrousel'
import Contacto from './components/Contacto/Contacto'
import { Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
      
      <Navbar />

      <hr></hr>
      
      <Routes>
        <Route path="/" element={<Carrousel />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={ <Navigate to={"/"}/> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
