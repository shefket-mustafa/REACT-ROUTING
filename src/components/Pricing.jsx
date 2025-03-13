
import { Link, Outlet} from 'react-router'




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

      <Outlet />
      
    </div>
  )
}
