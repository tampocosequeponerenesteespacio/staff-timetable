import React, { useEffect, useState } from 'react'
import { SCI, CHE, BIO, PHY } from './utils/teachers'
import Timetable from './components/Timetable'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { whatPeriodtoString } from './utils/what-period'
import Toggle from './components/Toggle'
import Day from './components/Day'

const App = () => {
  const [date, setDate] = useState(new Date())
  const [day, setDay] = useState(new Date().getDay())
  const [darkMode, setDarkMode] = useState(localStorage.getItem('toggle') === 'true')

  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000)
  }, [])

  return (
    <div id='main' className={darkMode ? 'dark' : 'light'}>
      <Header>
        <Toggle toggle={darkMode} setToggle={setDarkMode} />
      </Header>

      <Routes>
        <Route path='/' element={<Timetable teachers={SCI} day={day} date={date} />} />
        <Route path='phy' element={<Timetable teachers={PHY} day={day} date={date} />} />
        <Route path='chem' element={<Timetable teachers={CHE} day={day} date={date} />} />
        <Route path='bio' element={<Timetable teachers={BIO} day={day} date={date} />} />
      </Routes>

      <Day day={day} setDay={setDay} date={date} />

      <div id='time'>
        <p>Period: {whatPeriodtoString(date)}</p>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    </div>
  )
}

export default App
