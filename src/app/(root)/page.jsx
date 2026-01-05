import React from 'react'
import ToyCarScroll from '../../components/ToyCarScroll.jsx'
import ProductsPage from '../../components/ProductsPage'

const Page = () => {
  return (
    <div className='bg-[#F7F8FA]'>
      <ToyCarScroll />
      <div>
        <ProductsPage />
      </div>
    </div>
  )
}

export default Page
