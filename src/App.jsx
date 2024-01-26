import { Route, Routes } from 'react-router-dom'
import Mangas from './components/Mangas'
import Inicio from './components/Inicio'
import Novelas from './components/Novelas'
import ItemDetailContainer from './components/ItemDetailContainer'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Mangas/:MangasId' element={<Mangas/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/Novelas/:NovelasId' element={<Novelas />} />
      </Routes>
    </div>
  )
}

export default App
