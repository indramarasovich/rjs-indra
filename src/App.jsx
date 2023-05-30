import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <> 
      <Navbar />
      <hr/>
      <ItemListContainer mensaje='Somos una empresa joven, innovadora y que apuesta a crecer. Realizamos una gran variedad de productos.' />
    </>
  )
}

export default App
