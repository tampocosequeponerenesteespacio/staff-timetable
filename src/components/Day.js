import React from 'react'

const Day = ({day, setDay, date}) => {
  return (
    <div id='day'>
      <select id='daySelect' value={day} onChange={(e) => setDay(e.target.value)}>
        <option value='1'>Lunes</option>
        <option value='2'>Martes</option>
        <option value='3'>Miercoles</option>
        <option value='4'>Jueves</option>
        <option value='5'>Viernes</option>
      </select>
      <button id='dayButton' disabled={day === date.getDay()} onClick={() => setDay(date.getDay())}>
        TODAY
      </button>
    </div>
  )
}

export default Day
