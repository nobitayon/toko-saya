import React from 'react'
import { Card, TitleSection } from '../../Atoms'

const ProductSection = (props) => {
    const {title, titleMore, data, clickMore} = props
  return (
    <div>
        <TitleSection title={title} titleMore={titleMore} clickMore={clickMore}/>
        <div className='flex justify-between'>
          {
            data.map((item,index)=>{
              return <Card key={index} className="w-[16%]" image={item.image}/>
            })
          }
        </div>
    </div>
  )
}

export default ProductSection