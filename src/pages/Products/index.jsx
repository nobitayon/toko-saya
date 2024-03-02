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
    navigate(`/products/${id}`)
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
    <div>
      <div>AllProduct</div>

      <div className='flex justify-between'>
        {
          products.map((item, index) => {
            return <Card key={index} className="w-[16%]" image={item.image} />
          })
        }
      </div>
    </div>

  )
}

export default AllProduct