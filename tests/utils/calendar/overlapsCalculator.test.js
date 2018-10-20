const overlapsCalculatorTests = () => {
    let passed = 0
    let failed = 0

    try {
        console.log('Should throw missing param `meetings` error')
        overlapsCalculator()
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
        console.log('Should return empty object `overlaps` when meetings.length = 0')
        const {overlaps} = overlapsCalculator({meetings: []})

        const assert1 = JSON.stringify(overlaps) === '{}'

        if (assert1) {
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
        console.log('Should return overlap for a single meeting')
        const {overlaps} = overlapsCalculator({
            meetings: [
                {'id':'New','start':60,'end':120},
            ],
        })

        const assert1 = JSON.stringify(overlaps) === '{"New":{"counter":1,"total":1,"overlapsWith":{}}}'

        if (assert1) {
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
        console.log('Should return overlap for multiple meetings')
        const {overlaps} = overlapsCalculator({
            meetings: [
                { id: 'New', start: 60, end: 120 },
                { id: 'New 1', start: 150, end: 270 },
                { id: 'New 2', start: 240, end: 300 },
                { id: 'New 3', start: 200, end: 360 },
                { id: 'New 4', start: 180, end: 330 },
            ],
        })

        const assert1 = JSON.stringify(overlaps) === '{"New":{"counter":1,"total":1,"overlapsWith":{}},"New 1":{"counter":1,"total":4,"overlapsWith":{}},"New 2":{"counter":2,"total":4,"overlapsWith":{}},"New 3":{"counter":3,"total":4,"overlapsWith":{}},"New 4":{"counter":4,"total":4,"overlapsWith":{}}}'

        const assert2 = overlaps['New 1'].overlapsWith.has('New 2')
        const assert3 = overlaps['New 1'].overlapsWith.has('New 3')
        const assert4 = overlaps['New 1'].overlapsWith.has('New 4')

        const assert5 = overlaps['New 4'].overlapsWith.has('New 1')
        const assert6 = overlaps['New 4'].overlapsWith.has('New 2')
        const assert7 = overlaps['New 4'].overlapsWith.has('New 3')

        if (assert1 && assert2 && assert3 && assert4 && assert5 && assert6 && assert7) {
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
