// import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import WeekendSharpIcon from '@mui/icons-material/WeekendSharp';
import './Seat.css'

import React from 'react'

function Seat() {
  return (
    <div> 
        <div className='seat-container'>
            {[...Array(40)].map(( index) => (
            <button className='seat-button'>
              <WeekendSharpIcon key={index} style={{ height: '50px', width: '50px', margin:'4px', color:'white',  stroke: 'black', strokeWidth: 1}} className="seat"/>
            </button>
            ))}
       </div>
       
    </div>
    
  )
}

export default Seat