const drawCalendar = (meetings) => {
    const {plotWidth, plotHeight, plotStartMinutes, plotEndMinutes, minuteHeight} = plotSizeCalculator({meetings})

    const {overlaps} = overlapsCalculator({meetings})

    const {meetingsWidthRatio} = meetingsWidthRatioCalculator({meetings, overlaps})

    const {meetingsPlot} = meetingsPlotter({
        plotWidth,
        plotHeight,
        plotStartMinutes,
        plotEndMinutes,
        minuteHeight,
        meetings,
        overlaps,
        meetingsWidthRatio,
    })

    const calendarContainer = document.getElementById('calendar-container')
    calendarContainer.innerHTML = ''

    calendarContainer.appendChild(Calendar({
        plotWidth,
        plotHeight,
        plotStartMinutes,
        plotEndMinutes,
        minuteHeight,
        meetings,
        meetingsPlot,
    }))
}

drawCalendar(example3)

console.log('=================================================')
console.log('To try out different examples, call function `drawCalendar(example1...example4)`')
