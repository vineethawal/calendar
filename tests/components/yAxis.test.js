const yAxisComponentTests = () => {
    let passed = 0
    let failed = 0

    try {
        console.log('Should throw missing param `plotWidth` error')
        YAxis({
            plotHeight: 420,
            plotStartMinutes: 0,
            plotEndMinutes: 240,
            minuteHeight: 1.75,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param plotWidth') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')

    try {
        console.log('Should throw missing param `plotHeight` error')
        YAxis({
            plotWidth: 600,
            plotStartMinutes: 0,
            plotEndMinutes: 240,
            minuteHeight: 1.75,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param plotHeight') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')

    try {
        console.log('Should throw missing param `plotStartMinutes` error')
        YAxis({
            plotWidth: 600,
            plotHeight: 420,
            plotEndMinutes: 240,
            minuteHeight: 1.75,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param plotStartMinutes') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')

    try {
        console.log('Should throw missing param `plotEndMinutes` error')
        YAxis({
            plotWidth: 600,
            plotHeight: 420,
            plotStartMinutes: 0,
            minuteHeight: 1.75,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param plotEndMinutes') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')

    try {
        console.log('Should throw missing param `minuteHeight` error')
        YAxis({
            plotWidth: 600,
            plotHeight: 420,
            plotStartMinutes: 0,
            plotEndMinutes: 240,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param minuteHeight') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')

    try {
        console.log('Should return yAxis component with valid attributes')
        const yAxis = YAxis({
            plotWidth: 600,
            plotHeight: 420,
            plotStartMinutes: 0,
            plotEndMinutes: 240,
            minuteHeight: 1.75,
        })

        const assert1 = yAxis.getAttribute('transform') === 'translate(0, 60)'

        const line = yAxis.childNodes[0]
        const assert2 = line.getAttribute('x1') === '45'
        const assert3 = line.getAttribute('y1') === '-60'
        const assert4 = line.getAttribute('x2') === '45'
        const assert5 = line.getAttribute('y2') === '420'
        const assert6 = line.getAttribute('class') === 'y-axis axis'

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
