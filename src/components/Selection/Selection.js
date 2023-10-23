import React from 'react'
import './Selection.css'

function Selection() {
  return (
    <div>
    <select value="" className='ticket-type'>
        <option>Ticket Type</option>
        <option>Standard</option>
        <option>Premium</option>
  </select>
  <select value="" className='qty'>
        <option value="">Qty</option>
        <option value="option1">1</option>
        <option value="option2">2</option>
        <option value="option3">3</option>
        <option value="option4">4</option>
  </select></div>
  )
}

export default Selection