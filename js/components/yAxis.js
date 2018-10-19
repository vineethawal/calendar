const YAxis = ({
    plotWidth,
    plotHeight,
    plotStartMinutes,
    plotEndMinutes,
    minuteHeight,
}) => {
    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    yAxis.setAttribute('transform', `translate(0, ${Calendar.bufferTop})`)

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    line.setAttribute('x1', YAxis.width)
    line.setAttribute('y1', -Calendar.bufferTop)
    line.setAttribute('x2', YAxis.width)
    line.setAttribute('y2', plotHeight)
    line.setAttribute('class', 'y-axis axis')

    yAxis.appendChild(line)

    let tickMinute = plotStartMinutes

    while (tickMinute <= plotEndMinutes) {
        yAxis.appendChild(Tick({tickMinute, plotHeight, plotWidth, minuteHeight, plotStartMinutes}))
        tickMinute += YAxis.tickFrequency
    }

    return yAxis
}

YAxis.width = 45
YAxis.tickFrequency = 60 // in minutes
