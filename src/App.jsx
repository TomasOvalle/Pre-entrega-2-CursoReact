import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Mangas from './components/Mangas'
import Inicio from './components/Inicio'
import Novelas from './components/Novelas'
import ItemDetailContainer from './components/ItemDetailContainer'
import DetailNovelasContainer from './components/DetailNovelasContainer'
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout'




const App = () => {
  return (
      <CartContextProvider>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Mangas/MangasId' element={<Mangas/>} />
          <Route path='/item/:id' element={<ItemDetailContainer /> } />
          <Route path='/item/:id' element={<DetailNovelasContainer />} />
          <Route path='/Novelas/NovelasId' element={<Novelas />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartContextProvider>
  )
}

export default App
