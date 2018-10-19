const getReadableHours = ({tickMinute} = {}) => {
    if (tickMinute === undefined) {
        throw new Error('Missing param tickMinute')
    }

    const minuteOfDay = (DAY_START_TIME * 60) + tickMinute

    let hours = Math.floor(minuteOfDay/60)
    let minutes = minuteOfDay%60

    if (hours < 10) {
        hours = '0' + hours
    }

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    return `${hours}.${minutes}`
}
