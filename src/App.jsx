import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Mangas from './components/Mangas'
import Inicio from './components/Inicio'
import Novelas from './components/Novelas'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartWidget from './components/CartWidget'
import DetailNovelasContainer from './components/DetailNovelasContainer'



function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Mangas/MangasId' element={<Mangas/>} />
          <Route path='/item/:id' element={<ItemDetailContainer /> } />
          <Route path='/item/:id' element={<DetailNovelasContainer />} />
          <Route path='/Novelas/NovelasId' element={<Novelas />} />
          <Route path='/cart' element={<CartWidget />} />
        </Routes>
    </div>
  )
}

export default App
