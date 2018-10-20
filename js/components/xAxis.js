const XAxis = ({
    plotWidth,
    plotHeight
}) => {
    if (!plotWidth) {
        throw new Error('Missing param plotWidth')
    }
    if (!plotHeight) {
        throw new Error('Missing param plotHeight')
    }

    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    xAxis.setAttribute('transform', `translate(${YAxis.width}, ${plotHeight+Calendar.bufferTop})`)

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    line.setAttribute('x1', '0')
    line.setAttribute('y1', '0')
    line.setAttribute('x2', plotWidth)
    line.setAttribute('y2', '0')
    line.setAttribute('class', 'x-axis axis')

    xAxis.appendChild(line)

    return xAxis
}

XAxis.height = 30
