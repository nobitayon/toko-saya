import React from 'react'
import { Header, Slider } from '../../Components/Atoms'
import { ProductSection } from '../../Components/Molecules'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {

  let navigate = useNavigate()


  const dispatch = useDispatch()
  const products = useSelector((state)=>state.product.products)

  const clickMoreTerlaris = ()=>{
    navigate("/products/terlaris")
  }

  const clickMoreFavorit = ()=>{
    navigate("/products/favorit")
  }



  return (
    <div className='px-[10%] pb-20 w-full min-h-screen'>

      <div className='pt-20'></div>

      <Slider />
      <ProductSection
        titleSection="Produk Terlaris"
        titleMore="Lihat Semua" 
        data={products.slice(0,6)}
        clickMore = {()=>clickMoreTerlaris()}
      />
      <ProductSection 
        titleSection="Produk Favorit" 
        titleMore="Lihat Semua"
        data={products.slice(0,6)} 
        clickMore = {()=>clickMoreFavorit()}
      />
    </div>
  )
}

export default Home