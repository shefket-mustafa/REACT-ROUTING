import { Route, Routes  } from 'react-router'

import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import Catalog from './components/Catalog'
import Contact from './components/Contact'
import Error404 from './components/Error404'
import ProductDetails from './components/ProductDetails'
import Pricing from './components/Pricing'
import IndividualPricing from './components/IndividualPricing.jsx'
import BusinessPricing from './components/BusinessPricing.jsx'




function App() {


  return (
    <div className="bg-white">
      
    <Header />

    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/catalog' element={<Catalog />} />
    <Route path='/catalog/:productId' element={<ProductDetails />} />
    <Route path='/contacts' element={<Contact/>} />
    <Route path='/pricing' element={<Pricing/>}>
        <Route path='individual' element = {<IndividualPricing />} />
        <Route path='business' element = {<BusinessPricing />} />
    </Route>

    <Route path='*' element={<Error404 />}/>


    </Routes>
      
    
    </div>
  )
}

export default App
