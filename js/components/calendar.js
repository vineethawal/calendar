const Calendar = ({
    plotWidth,
    plotHeight,
    plotStartMinutes,
    plotEndMinutes,
    minuteHeight,
    meetingsPlot
}) => {
    const calendar = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    const boardWidth = plotWidth + YAxis.width
    const boardHeight = plotHeight + XAxis.height + Calendar.bufferTop

    calendar.setAttribute('class', 'calendar')
    calendar.setAttribute('viewBox', `0 0 ${boardWidth} ${boardHeight}`)
    calendar.setAttribute('style', `height: ${boardHeight}px`)

    calendar.appendChild(Plot({
        plotWidth,
        plotHeight,
        plotStartMinutes,
        plotEndMinutes,
        minuteHeight,
        meetingsPlot
    }))
    calendar.appendChild(XAxis({plotWidth, plotHeight}))
    calendar.appendChild(YAxis({plotWidth, plotHeight, plotStartMinutes, plotEndMinutes, minuteHeight}))

    return calendar
}

Calendar.bufferTop = 60
