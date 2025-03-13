import { Route, Routes  } from 'react-router'

import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/Pricing'
import Catalog from './components/Catalog'
import Contact from './components/Contact'
import Error404 from './components/Error404'
import ProductDetails from './components/ProductDetails'
import Pricing from './components/Pricing'



function App() {


  return (
    <div className="bg-white">
      
    <Header />

    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/catalog' element={<Catalog />} />
    <Route path='/catalog/:productId' element={<ProductDetails />} />
    <Route path='/pricing/*' element={<Pricing/>} />
    <Route path='/contacts' element={<Contact/>} />
    <Route path='*' element={<Error404 />}/>


    </Routes>
      
    
    </div>
  )
}

export default App
