const xAxisComponentTests = () => {
    let passed = 0
    let failed = 0

    try {
        console.log('Should throw missing param `plotWidth` error')
        XAxis({
            plotHeight: 600,
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
        XAxis({
            plotWidth: 600,
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
        console.log('Should return xAxis component with valid attributes')
        const xAxis = XAxis({
            plotHeight: 420,
            plotWidth: 600,
        })

        const assert1 = xAxis.getAttribute('transform') === 'translate(45, 480)'

        const line = xAxis.childNodes[0]
        const assert2 = line.getAttribute('x1') === '0'
        const assert3 = line.getAttribute('y1') === '0'
        const assert4 = line.getAttribute('x2') === '600'
        const assert5 = line.getAttribute('y2') === '0'
        const assert6 = line.getAttribute('class') === 'x-axis axis'

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
