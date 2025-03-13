import { Route, Routes  } from 'react-router'

import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Catalog from './components/Catalog'
import Contact from './components/Contact'
import Error404 from './components/Error404'
import ProductDetails from './components/ProductDetails'



function App() {


  return (
    <div className="bg-white">
      
    <Header />

    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/catalog' element={<Catalog />} />
    <Route path='/catalog/:productId' element={<ProductDetails />} />
    <Route path='/about' element={<About/>} />
    <Route path='/contacts' element={<Contact/>} />
    <Route path='*' element={<Error404 />}/>


    </Routes>
      
    
    </div>
  )
}

export default App
