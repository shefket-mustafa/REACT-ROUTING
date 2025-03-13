import { useEffect, useState } from "react"
import CatalogItem from "./CatalogItem"

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'

import { ChevronDownIcon} from '@heroicons/react/20/solid'
import { Link, useSearchParams } from "react-router"

const sortOptions = [
  { name: 'All', href: '/catalog', current: true },
  { name: 'Best Rating', href: '/catalog?rating=4', current: false },
  { name: 'Popularity', href: '/catalog?ratingCount=100', current: false },
  { name: 'Price: Low to High', href: '/catalog?sortBy=price&dir=asc', current: false },
  { name: 'Price: High to Low', href: '/catalog?sortBy=price&dir=dsc', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const [products, setProducts]  = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(result =>{
      setProducts(result)
    })
  },[]);

  useEffect(()=>{
    const filter = Object.fromEntries(searchParams);

    if(filter.sortBy){
      setDisplayProducts([...products.sort((p1,p2) => filter.dir === 'asc' ? p1.price - p2.price : p2.price - p1.price)]);
    } else {
      setDisplayProducts(products);
    }
  },[products, searchParams])
  return (
    <div className="bg-white">


      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <Link
                          to={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                          )}
                        >
                          {option.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {displayProducts.map((product) => (
            <CatalogItem key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}
