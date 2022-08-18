import React, { useEffect, useState } from "react";
import { SCI, CHE, BIO, PHY } from "./utils/teachers";
import Timetable from "./components/Timetable";



const App = () => {

  const [date, setDate] = useState( new Date() )

  useEffect( () => {
    setDate( new Date() )
  },[])

  return (
   <div>
    <Timetable teachers={PHY} date={date} />
   </div>
)

}



export default App;
