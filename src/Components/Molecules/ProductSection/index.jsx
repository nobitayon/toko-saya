import React from 'react'
import { Card, TitleSection } from '../../Atoms'

const ProductSection = (props) => {
    const {title, titleMore} = props
  return (
    <div>
        <TitleSection title={title} titleMore={titleMore}/>
        <div className='flex justify-between'>
          {
            [1,1,1,1,1,1].map((item,index)=>{
              return <Card key={index} className="w-[16%]"/>
            })
          }
        </div>
    </div>
  )
}

export default ProductSection