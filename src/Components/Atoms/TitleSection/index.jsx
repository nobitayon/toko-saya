import React from 'react'

const TitleSection = (props) => {
  const { titleSection, titleMore, clickMore } = props
  return (
    <div className='flex items-center pt-10 pb-5 justify-between'>
      <h1 className='text-lg font-bold'>{titleSection}</h1>
      <p className="text-sm cursor-pointer" to="/products"
        onClick={clickMore}
      >
        {titleMore}
      </p>
    </div>
  )
}

export default TitleSection