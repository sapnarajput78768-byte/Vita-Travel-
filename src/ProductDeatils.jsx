import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDeatils = () => {
    const {id} = useParams()

    console.log(id)


  return (
    <div>ProductDeatils</div>
  )
}

export default ProductDeatils