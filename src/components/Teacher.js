import React from "react"
import { v4 as uuid } from 'uuid'

const Teacher = ({teacher, date}) => {

    const day = date.getDay()
    const classes = teacher.slice( 12*(day-1) + 1 , 12*(day) + 1)
    
    return (
        <tr key={uuid()}>
            <td key={uuid()}>{teacher[0].replace(/"/g,"")}</td>
            {classes.map( (block) => <td key={uuid()}>{block.replace(/"/g,"")}</td>)}
        </tr>
    )

}

export default Teacher