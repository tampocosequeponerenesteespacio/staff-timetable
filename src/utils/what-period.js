

const isLess = (a, b) => {
    let time1 = a.split(':')
    let time2 = b.split(':')

    let totalSeconds1 = parseInt(time1[0] * 3600 + time1[1] * 60 )
    let totalSeconds2 = parseInt(time2[0] * 3600 + time2[1] * 60 )

    if ( totalSeconds1 <= totalSeconds2 ) {
        return (
            true
        )
    } 
    return false 
}


export const whatPeriod = (date) => {
    const hour = new Date(date).toLocaleTimeString()
    

    if ( isLess( hour,'8:05') ) { return 0 }
    else if ( isLess( hour,'8:50') ) { return 1 }
    else if ( isLess( hour,'9:35') ) { return 2 }
    else if ( isLess( hour,'10:15') ) { return 3 }
    else if ( isLess( hour,'10:40') ) { return 4 }
    else if ( isLess( hour,'11:25') ) { return 5 }
    else if ( isLess( hour,'12:10') ) { return 6 }
    else if ( isLess( hour,'12:55') ) { return 7 }
    else if ( isLess( hour,'13:40') ) { return 8 }
    else if ( isLess( hour,'14:25') ) { return 9 }
    else if ( isLess( hour,'15:10') ) { return 10 }
    else if ( isLess( hour,'15:50') ) { return 11 }
    else { return 12}
}

//return period as it should be named 
export const whatPeriodtoString = (date) => {
    const periodString = ['1', '2', '3', '4', 'B', '5', '6', '7', '8', '9', '10', '11', 'Home']
    return periodString[whatPeriod(date)]
}

