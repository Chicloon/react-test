import React from 'react'
import loader from '../helpers/loader/three-dots.svg'

const Spinner = () => (
  <div>
    <img src={loader} alt="" style={{ height: '12px', margin: '12px' }} />
  </div>
)

export default Spinner
