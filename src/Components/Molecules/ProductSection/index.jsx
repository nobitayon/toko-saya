import React from 'react'
import { Card, TitleSection } from '../../Atoms'
import { useNavigate } from 'react-router-dom'

const ProductSection = (props) => {
    const {title, titleMore, data, clickMore} = props

    let navigate = useNavigate()

    const handleClick = (id)=>{
      navigate(`/product/${id}`)
    }
  return (
    <div>
        <TitleSection title={title} titleMore={titleMore} clickMore={clickMore}/>
        <div className='flex justify-between'>
          {
            data.map((item,index)=>{
              return <Card key={index} className="w-[16%]" image={item.image} onClick={()=>handleClick(item.id)}/>
            })
          }
        </div>
    </div>
  )
}

export default ProductSection