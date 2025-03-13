
import { Link, Route, Routes } from 'react-router'
import IndividualPricing from './IndividualPricing'
import BusinessPricing from './BusinessPricing'



export default function Pricing() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      
      <div className="hidden lg:flex lg:gap-x-12">

  <Link
    className="text-sm/6 font-semibold text-gray-900"
    to='/pricing/individual'
    
    >
      Individual
      </Link>

      <Link
    className="text-sm/6 font-semibold text-gray-900"
    to='/pricing/business'
    
    >
      Business
      </Link>
      </div>


      <Routes>

        <Route path='individual' element = {<IndividualPricing />} />
        <Route path='business' element = {<BusinessPricing />} />
        
      </Routes>
      
      
    </div>
  )
}
