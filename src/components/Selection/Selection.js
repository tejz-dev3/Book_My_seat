import { useState } from 'react'
import React from 'react'
import './Selection.css'
import Seat from '../Seat/Seat'


function Selection() {
  const [selectedTicketType, setSelectedTicketType] = useState('')
  const [quantityNumber, setQunatityNumber] = useState('')
  
  //Handle Ticket Type
  const handleTicketType = (e) =>{
    setSelectedTicketType(e.target.value)
    console.log(e.target.value)
  }

  //Handle Qunatity Type
  const HandleQuantityNumber = (e) =>{
    setQunatityNumber(e.target.value) 
  }

  return (
    <div>
    <select value={selectedTicketType}  onChange={handleTicketType} className='ticket-type' >
        <option value="">Ticket Type</option>
        <option value="Standard"> Standard </option>
        <option value="Premium">  Premium </option>
   </select>
   
   <Seat selectedTicketType={selectedTicketType} />

  <select value={quantityNumber} onChange={HandleQuantityNumber} className='qty'>
        <option value="">Qty</option>
        <option value="option1">1</option>
        <option value="option2">2</option>
        <option value="option3">3</option>
        <option value="option4">4</option>
  </select>

  </div>
  )
}

export default Selection