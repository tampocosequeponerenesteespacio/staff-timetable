import React from "react"
import { v4 as uuid } from 'uuid'



const Teacher = ({teacher, day, date}) => {

    const period = 6
    const classes = teacher.slice( 12*(day-1) + 1 , 12*(day) + 1)
    
    
    
    
    return (
        <tr key={uuid()}>
            <td key={uuid()}>{teacher[0].replace(/"/g,"")}</td>
            
            {classes.map( (block, index) => 
            
            <td className={( period === index && Number(day) === date.getDay() ) ? 'active' : 'inactive' } 
                key={uuid()}>{block.replace(/"/g,"")}</td>)}
                
        </tr>
    )

}

export default Teacher