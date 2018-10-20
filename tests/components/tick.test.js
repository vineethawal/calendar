const tickComponentTests = () => {
    let passed = 0
    let failed = 0

    try {
        console.log('Should throw missing param `tickMinute` error')
        Tick({
            plotHeight: 420,
            plotWidth: 600,
            minuteHeight: 1.75,
            plotStartMinutes: 0,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param tickMinute') {
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
        Tick({
            tickMinute: 120,
            plotWidth: 600,
            minuteHeight: 1.75,
            plotStartMinutes: 0,
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
        console.log('Should throw missing param `plotWidth` error')
        Tick({
            tickMinute: 120,
            plotHeight: 420,
            minuteHeight: 1.75,
            plotStartMinutes: 0,
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
        console.log('Should throw missing param `minuteHeight` error')
        Tick({
            tickMinute: 120,
            plotHeight: 420,
            plotWidth: 600,
            plotStartMinutes: 0,
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
        console.log('Should throw missing param `plotStartMinutes` error')
        Tick({
            tickMinute: 120,
            plotHeight: 420,
            plotWidth: 600,
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
        console.log('Should return meeting component with valid attributes')
        const tick = Tick({
            tickMinute: 120,
            plotHeight: 420,
            plotWidth: 600,
            minuteHeight: 1.75,
            plotStartMinutes: 0,
        })

        const assert1 = tick.getAttribute('transform') === 'translate(0, 203)'

        const dash = tick.childNodes[0]
        const assert2 = dash.getAttribute('x1') === '39'
        const assert3 = dash.getAttribute('y1') === '7'
        const assert4 = dash.getAttribute('x2') === '45'
        const assert5 = dash.getAttribute('y2') === '7'
        const assert6 = dash.getAttribute('class') === 'tick-dash'

        const gridLine = tick.childNodes[1]
        const assert7 = gridLine.getAttribute('x1') === '45'
        const assert8 = gridLine.getAttribute('y1') === '7'
        const assert9 = gridLine.getAttribute('x2') === '645'
        const assert10 = gridLine.getAttribute('y2') === '7'
        const assert11 = gridLine.getAttribute('class') === 'grid-line'

        const text = tick.childNodes[2]
        const assert12 = text.getAttribute('x') === '0'
        const assert13 = text.getAttribute('y') === '14'
        const assert14 = text.getAttribute('class') === 'tick-text'
        const assert15 = text.getAttribute('style') === 'font-size: 14px'
        const assert16 = text.innerHTML === '11.00'

        if (assert1 && assert2 && assert3 && assert4 && assert5 && assert6 && assert7 &&
            assert8 && assert9 && assert10 && assert11 && assert12 && assert13 &&
            assert14 && assert15 && assert16) {
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
