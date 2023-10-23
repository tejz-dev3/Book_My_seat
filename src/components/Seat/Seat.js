import WeekendSharpIcon from '@mui/icons-material/WeekendSharp';
import './Seat.css'
import React from 'react'

function Seat(props) {
const {premiumData, standardData, selectedTicketType } = props

 const seatsToDisplay = selectedTicketType === 'Premium' ? premiumData : standardData;

 return (
  <div>
    <div className='seat-container'>
    {seatsToDisplay?.map((seat) => (
          <button key={seat.No} className='seat-button'>
            <WeekendSharpIcon
              style={{
                height: '50px',
                width: '50px',
                margin: '4px',
                color: 'white',
                stroke: 'black',
              }}
              className='seat'
            />
            <p>{seat.No}</p>
          </button>
        ))}
    </div>
  </div>
 )
}
export default Seat

