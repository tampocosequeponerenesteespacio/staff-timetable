import React from 'react'
import { whatPeriodtoString } from '../utils/what-period'

const Time = ({ date, modal, setModal }) => {
  return (
    <div id='time'>
      <div className='timeInfo' id='period'>
        Period: {whatPeriodtoString(date)}
        <button className='ttButton' id='openModalBtn' onClick={() => setModal(true)}>
          ?
        </button>
      </div>
      <div className='timeInfo' id='localTime'>
        {date.toLocaleTimeString('en-GB')}
      </div>
    </div>
  )
}

export default Time
