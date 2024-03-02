import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DetailProduct = () => {
    let { id } = useParams()

    let navigate = useNavigate()

    const [product, setProduct] = useState({})

    const getProducts = useCallback(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
    })

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='px-[20%] py-20'>
            <button onClick={()=>navigate(-1)} className='mb-10'>back</button>
            <img className='w-full p-10 h-96 object-contain border' src={product.image} />
            <div className='pt-20'>
                <h2 className='text-2xl font-bold'>{product.title}</h2>
                <h1 className='py-5 text-4xl font-bold'>${product.price}</h1>
                <p>{product.description}</p>
            </div>

        </div>
    )
}

export default DetailProduct