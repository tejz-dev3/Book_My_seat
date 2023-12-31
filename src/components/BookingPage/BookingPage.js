import React from 'react'
import './BookingPage.css'
import Selection from '../Selection/Selection'
import './BookingPage.css'
import Seat from '../Seat/Seat'
import WeekendSharpIcon from '@mui/icons-material/WeekendSharp';
import { premiumData, standardData } from '../Utils/Utils'


function BookingPage() {
  return (
    <div className='booking-container'>
        {/* Ticket type, Qty Component*/}
        <Selection />
        {/* all seats display*/}
        <div className='seat-map'>
           <Seat premiumData={premiumData} standardData={standardData}/>
        </div>
        {/* available, unavailable, your selected seats  */}
        <div>
          <div className='referance-container'>
            <h3>Key to Seat</h3>
            <div className='icons-container'>
              <WeekendSharpIcon style={{ height: '40px', width: '40px',color:'white',  stroke: 'black' }} />
              <span className='span'>Available</span>
            </div>
            <div className='icons-container'>
              <WeekendSharpIcon style={{ height: '40px', width: '40px', fill:'gray'}}  />
              <span className='span'>Unavailable</span>
            </div>
            <div className='icons-container'>
              <WeekendSharpIcon style={{ height: '40px', width: '40px', fill:'#50C878' }}  />
              <span className='span'>Your Selection</span>
            </div>
            {/* proceed button */}
            <button className='proceed-btn'>Proceed</button>
          </div>
       </div>
       
    </div>
  )
}

export default BookingPage

