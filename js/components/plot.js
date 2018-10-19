const Plot = ({
    plotWidth,
    plotHeight,
    plotStartMinutes,
    plotEndMinutes,
    minuteHeight,
    meetingsPlot,
}) => {
    const plot = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    plot.setAttribute('transform', `translate(${YAxis.width}, ${Calendar.bufferTop})`)

    meetingsPlot.forEach((meeting) => {
        plot.appendChild(Meeting({meeting}))
    })
    return plot
}
