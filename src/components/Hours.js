import React from 'react'

const Hours = ({ modal, setModal }) => {
  const handleClose = () => {
    setModal(false)
  }

  if (!modal) return null
  return (
    <div id='overlay' onClick={handleClose}>
      <div id='hours' onClick={(e) => e.stopPropagation()}>
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                Senior School Timetable 2022
                <button id='closeBtn' className='ttButton' onClick={() => setModal(false)}>
                  X
                </button>
              </td>
            </tr>
            <tr>
              <td>1ST PERIOD REGISTER</td>
              <td>7:45 - 8:00</td>
            </tr>
            <tr>
              <td>2nd PERIOD</td>
              <td>8:05 - 8:45</td>
            </tr>
            <tr>
              <td>3rd PERIOD</td>
              <td>8:50 - 9:30</td>
            </tr>
            <tr>
              <td>4th PERIOD</td>
              <td>9:35 - 10:15</td>
            </tr>
            <tr>
              <td>BREAK</td>
              <td>10:15 - 10:40</td>
            </tr>
            <tr>
              <td>5th PERIOD</td>
              <td>10:40 - 11:20</td>
            </tr>
            <tr>
              <td>6th PERIOD</td>
              <td>11:25 - 12:05</td>
            </tr>
            <tr>
              <td>7th PERIOD</td>
              <td>12:10 - 12:50</td>
            </tr>
            <tr>
              <td>8th PERIOD</td>
              <td>12:55 - 13:35</td>
            </tr>
            <tr>
              <td>9th PERIOD</td>
              <td>13:40 - 14:20</td>
            </tr>
            <tr>
              <td>10th PERIOD</td>
              <td>14:25 - 15:05</td>
            </tr>
            <tr>
              <td>11th PERIOD</td>
              <td>15:10 - 15:50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Hours
