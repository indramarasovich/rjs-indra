import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <> 
      <Navbar />
      <hr/>
      <ItemListContainer />
    </>
  )
}

export default App
