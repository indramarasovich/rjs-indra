import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Carrousel from './components/Carrousel/Carrousel'
import Contacto from './components/Contacto/Contacto'
import { Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      
      <Header />

      <hr/>
      
      <Routes>
        <Route path="/" element={<Carrousel />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={ <Navigate to={"/"}/> } />

      </Routes>

      <hr/>
      <Footer />
      
    </BrowserRouter>
  )
}

export default App
