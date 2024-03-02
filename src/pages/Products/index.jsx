import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setProduct } from '../../service/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../../Components/Atoms'

const AllProduct = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)



  const handleClick = (id) => {
    navigate(`/product/${id}`)
  }

  const getProducts = useCallback(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(setProduct(data)))
  })

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='py-20 px-[10%]'>
      <h1 className='pb-10 text-xl font-bold'>AllProduct</h1>

      <div className='grid grid-cols-6 gap-4'>
        {
          products.map((item, index) => {
            return <Card key={index} image={item.image} onClick={()=>handleClick(item.id)}/>
          })
        }
      </div>
    </div>

  )
}

export default AllProduct