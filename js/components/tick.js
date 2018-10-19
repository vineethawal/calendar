const Tick = ({
    tickMinute,
    plotHeight,
    plotWidth,
    minuteHeight,
    plotStartMinutes,
}) => {
    const tick = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    const top = plotHeight - ((tickMinute - plotStartMinutes) * minuteHeight)
    tick.setAttribute('transform', `translate(0, ${top-(Tick.fontSize/2)})`)

    const dash = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    dash.setAttribute('x1', YAxis.width - Tick.dashLength)
    dash.setAttribute('y1', Tick.fontSize/2)
    dash.setAttribute('x2', YAxis.width)
    dash.setAttribute('y2', Tick.fontSize/2)
    dash.setAttribute('class', 'tick-dash')

    const gridLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    gridLine.setAttribute('x1', YAxis.width)
    gridLine.setAttribute('y1', Tick.fontSize/2)
    gridLine.setAttribute('x2', YAxis.width + plotWidth)
    gridLine.setAttribute('y2', Tick.fontSize/2)
    gridLine.setAttribute('class', 'grid-line')

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    text.setAttribute('x', 0)
    text.setAttribute('y', Tick.fontSize)
    text.setAttribute('class', 'tick-text')
    text.setAttribute('style', `font-size: ${Tick.fontSize}px`)
    text.innerHTML = getReadableHours({tickMinute})

    tick.appendChild(dash)
    tickMinute && tick.appendChild(gridLine)
    tick.appendChild(text)

    return tick
}

Tick.dashLength = 6
Tick.fontSize = 14
