import React from 'react'

const TitleSection = (props) => {
    const {titleSection,titleMore} = props
  return (
    <div className='flex items-center pt-10 pb-5 justify-between'>
        <h1 className='text-lg font-bold'>{titleSection}</h1>
        <a className='text-sm'>{titleMore}</a>
    </div>
  )
}

export default TitleSection