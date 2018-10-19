const meetingsPlotter = ({
    plotWidth,
    plotHeight,
    plotStartMinutes,
    plotEndMinutes,
    minuteHeight,
    meetings,
    overlaps = {},
    meetingsWidthRatio = {},
}) => {

    if (!plotHeight) {
        throw new Error('Missing param plotHeight')
    }
    if (!plotWidth) {
        throw new Error('Missing param plotWidth')
    }
    if (plotStartMinutes === undefined) {
        throw new Error('Missing param plotStartMinutes')
    }
    if (!plotEndMinutes) {
        throw new Error('Missing param plotEndMinutes')
    }
    if (!minuteHeight) {
        throw new Error('Missing param minuteHeight')
    }
    if (plotEndMinutes <= plotStartMinutes) {
        throw new Error('`plotEndMinutes` should be greater than `plotStartMinutes`')
    }
    if (!meetings) {
        throw new Error('Missing param meetings')
    }
    if (!meetings.length) {
        return {meetingsPlot: []}
    }

    const meetingsPlot = meetings.map(({id, start, end}) => {
        const meeting = {id, start, end}
        const meetingCounter = (overlaps[id] && overlaps[id].counter) || 1

        meeting.height = Math.floor((meeting.end - meeting.start) * minuteHeight)
        meeting.top = Math.floor((plotEndMinutes - meeting.end) * minuteHeight)

        meeting.width = plotWidth * (meetingsWidthRatio[id] || 1)
        meeting.left = plotWidth * (meetingCounter - 1) * (meetingsWidthRatio[id] || 1)

        return meeting
    })

    // console.log('meetingsPlotter output', {meetingsPlot})

    return {meetingsPlot}
}
