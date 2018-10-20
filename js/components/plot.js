const Plot = ({
    plotWidth,
    plotHeight,
    plotStartMinutes,
    plotEndMinutes,
    minuteHeight,
    meetingsPlot,
}) => {
    if (!plotWidth) {
        throw new Error('Missing param plotWidth')
    }
    if (!plotHeight) {
        throw new Error('Missing param plotHeight')
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
    if (!meetingsPlot) {
        throw new Error('Missing param meetingsPlot')
    }

    const plot = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    plot.setAttribute('transform', `translate(${YAxis.width}, ${Calendar.bufferTop})`)

    meetingsPlot.forEach((meeting) => {
        plot.appendChild(Meeting({meeting}))
    })
    return plot
}
