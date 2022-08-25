import React from "react";
import Teacher from "./Teacher";
import { v4 as uuid } from 'uuid'
import { whatPeriod } from "../utils/what-period";

const Timetable = ({teachers, day, date}) => {

    const header = ['', '1', '2', '3', '4', 'B', '5', '6', '7', '8', '9', '10', '11']
    const period = whatPeriod(date)+1

    return (
        <table id='timetable'>
            <thead>
                <tr key='timetableheader'>
                    {header.map( (x, index) => <td className={( period === index && Number(day) === date.getDay() ) ? 'active' : 'inactive' }  key={uuid()}>{x}</td>)}
                </tr>
            </thead>
            <tbody>
                { teachers.map( (teacher) => <Teacher key={uuid()} teacher={teacher} day={day} date={date} /> )}
            </tbody>
        </table>
    )

}

export default Timetable