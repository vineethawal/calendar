const plotSizeCalculatorTests = () => {
    let passed = 0
    let failed = 0

    try {
        console.log('Should throw missing param `meetings` error')
        plotSizeCalculator()
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param meetings') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')


    try {
        console.log('Should return min plot metrics when meetings.length = 0')
        const metrics = plotSizeCalculator({meetings: []})

        const assert1 = metrics.plotWidth === PLOT_WIDTH
        const assert2 = metrics.plotHeight === MIN_PLOT_HEIGHT
        const assert3 = metrics.plotStartMinutes === 0
        const assert4 = metrics.plotEndMinutes === MIN_MINUTES_TO_PLOT
        const assert5 = metrics.minuteHeight === MIN_PLOT_HEIGHT/MIN_MINUTES_TO_PLOT
        const assert6 = metrics.minutesOnPlot === MIN_MINUTES_TO_PLOT

        if (assert1 && assert2 && assert3 && assert4 && assert5 && assert6) {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    } catch (error) {
        console.error(error)
        failed++
        console.error('FAILED')
    }
    console.log('-------------------------')

    try {
        console.log('Should return plot metrics when height < MIN_PLOT_HEIGHT & meetings.length = 1')
        const metrics = plotSizeCalculator({
            meetings: [
                { id: 'New', start: 60, end: 120 },
            ],
        })

        const assert1 = metrics.plotWidth === PLOT_WIDTH
        const assert2 = metrics.plotHeight === MIN_PLOT_HEIGHT
        const assert3 = metrics.plotStartMinutes === 0
        const assert4 = metrics.plotEndMinutes === MIN_MINUTES_TO_PLOT
        const assert5 = metrics.minuteHeight === MIN_PLOT_HEIGHT/MIN_MINUTES_TO_PLOT
        const assert6 = metrics.minutesOnPlot === MIN_MINUTES_TO_PLOT

        if (assert1 && assert2 && assert3 && assert4 && assert5 && assert6) {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    } catch (error) {
        console.error(error)
        failed++
        console.error('FAILED')
    }
    console.log('-------------------------')

    try {
        console.log('Should return plot metrics when meetings.length > 1 & plotStartMinutes = 0')
        const metrics = plotSizeCalculator({
            meetings: [
                { id: 'New', start: 60, end: 120 },
                { id: 'New 1', start: 150, end: 270 },
                { id: 'New 2', start: 240, end: 300 },
                { id: 'New 3', start: 200, end: 360 },
                { id: 'New 4', start: 180, end: 330 },
            ],
        })

        const assert1 = metrics.plotWidth === 600
        const assert2 = metrics.plotHeight === 735
        const assert3 = metrics.plotStartMinutes === 0
        const assert4 = metrics.plotEndMinutes === 420
        const assert5 = metrics.minuteHeight.toFixed(2) === '1.75'
        const assert6 = metrics.minutesOnPlot === 420

        if (assert1 && assert2 && assert3 && assert4 && assert5 && assert6) {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    } catch (error) {
        console.error(error)
        failed++
        console.error('FAILED')
    }
    console.log('-------------------------')

    try {
        console.log('Should return plot metrics when meetings.length = 1 & plotStartMinutes > 0')
        const metrics = plotSizeCalculator({
            meetings: [
                { id: 'New', start: 150, end: 270 },
            ],
        })

        const assert1 = metrics.plotWidth === 600
        const assert2 = metrics.plotHeight === 420
        const assert3 = metrics.plotStartMinutes === 120
        const assert4 = metrics.plotEndMinutes === 360
        const assert5 = metrics.minuteHeight.toFixed(2) === '1.75'
        const assert6 = metrics.minutesOnPlot === 240

        if (assert1 && assert2 && assert3 && assert4 && assert5 && assert6) {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    } catch (error) {
        console.error(error)
        failed++
        console.error('FAILED')
    }
    console.log('-------------------------')
    return {passed, failed}
}
