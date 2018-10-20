const plotSizeCalculator = ({meetings} = {}) => {

    // console.log('plotSizeCalculator inputs', {meetings})

    if (!meetings) {
        throw new Error('Missing param meetings')
    }

    if (!meetings.length) {
        return {
            plotWidth: PLOT_WIDTH,
            plotHeight: MIN_PLOT_HEIGHT,
            plotStartMinutes: 0,
            plotEndMinutes: MIN_MINUTES_TO_PLOT,
            minuteHeight: MIN_PLOT_HEIGHT/MIN_MINUTES_TO_PLOT,
            minutesOnPlot: MIN_MINUTES_TO_PLOT,
        }
    }

    let minStartMinutes = meetings[0].start
    let maxEndMinutes = meetings[0].end
    const minMinuteHeight = MIN_PLOT_HEIGHT/MIN_MINUTES_TO_PLOT
    const plotWidth = PLOT_WIDTH

    meetings.forEach((meeting) => {
        if (meeting.start < minStartMinutes) {
            minStartMinutes = meeting.start
        }
        if (meeting.end > maxEndMinutes) {
            maxEndMinutes = meeting.end
        }
    })

    // Start/end plot from beginning of an hour, +/-1 minute to add buffer space in the calendar
    const plotStartMinutes = Math.floor(Math.abs(minStartMinutes-1)/60)*60
    let plotEndMinutes = Math.ceil((maxEndMinutes+1)/60)*60

    let minutesOnPlot = plotEndMinutes - plotStartMinutes
    // To ensure min calendar minutes are displayed
    if (minutesOnPlot < MIN_MINUTES_TO_PLOT) {
        plotEndMinutes = plotStartMinutes + MIN_MINUTES_TO_PLOT
        minutesOnPlot = MIN_MINUTES_TO_PLOT
    }

    let plotHeight = minutesOnPlot * minMinuteHeight

    if (plotHeight > MAX_PLOT_HEIGHT) {
        plotHeight = MAX_PLOT_HEIGHT
    }

    const minuteHeight = plotHeight/minutesOnPlot

    // console.log('plotSizeCalculator output', {plotWidth, plotHeight, plotStartMinutes, plotEndMinutes, minuteHeight, minutesOnPlot})

    return {plotWidth, plotHeight, plotStartMinutes, plotEndMinutes, minuteHeight, minutesOnPlot}
}
