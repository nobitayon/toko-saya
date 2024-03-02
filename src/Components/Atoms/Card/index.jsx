import React from 'react'

const Card = (props) => {
    const {className} = props
  return (
    <div className={[`${className} h-60 bg-gray-200`]}></div>
  )
}

export default Card