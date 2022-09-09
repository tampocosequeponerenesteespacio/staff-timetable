import React, { useEffect, useState } from 'react'
import { SCI, CHE, BIO, PHY } from './utils/teachers'
import Timetable from './components/Timetable'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { whatPeriodtoString } from './utils/what-period'
import Toggle from './components/Toggle'
import Day from './components/Day'
import Hours from './components/Hours'
import Time from './components/Time'

const App = () => {
  const [date, setDate] = useState(new Date())
  const [day, setDay] = useState(new Date().getDay())
  const [darkMode, setDarkMode] = useState(localStorage.getItem('toggle') === 'true')
  const [modal, setModal] = useState(false)

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
      <Hours modal={modal} setModal={setModal} />

      <Routes>
        <Route path='/' element={<Timetable teachers={SCI} day={day} date={date} />} />
        <Route path='phy' element={<Timetable teachers={PHY} day={day} date={date} />} />
        <Route path='chem' element={<Timetable teachers={CHE} day={day} date={date} />} />
        <Route path='bio' element={<Timetable teachers={BIO} day={day} date={date} />} />
      </Routes>

      <Day day={day} setDay={setDay} date={date} />

      <Time date={date} moodal={modal} setModal={setModal} />
    </div>
  )
}

export default App
