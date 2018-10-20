const meetingsWidthRatioCalculatorTests = () => {
    let passed = 0
    let failed = 0

    try {
        console.log('Should throw missing param `meetings` error')
        meetingsWidthRatioCalculator()
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
        console.log('Should return empty object `meetingsWidthRatio` when meetings.length = 0')
        const {meetingsWidthRatio} = meetingsWidthRatioCalculator({meetings: []})

        const assert1 = JSON.stringify(meetingsWidthRatio) === '{}'

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
        console.log('Should calculate width ratio for a single meeting')
        const {meetingsWidthRatio} = meetingsWidthRatioCalculator({
            meetings: [
                {'id':'New','start':60,'end':120},
            ],
        })

        const assert1 = JSON.stringify(meetingsWidthRatio) === '{"New":1}'

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
        console.log('Should calculate width ratio for multiple meetings')
        const {meetingsWidthRatio} = meetingsWidthRatioCalculator({
            meetings: [
                { id: 'New', start: 60, end: 120 },
                { id: 'New 1', start: 150, end: 270 },
                { id: 'New 2', start: 240, end: 300 },
                { id: 'New 3', start: 200, end: 360 },
                { id: 'New 4', start: 180, end: 330 },
            ],
            overlaps: {
                'New': {'counter':1,'total':1,'overlapsWith': new Set()},
                'New 1': {'counter':1,'total':4,'overlapsWith': new Set('New 2', 'New 3', 'New 4')},
                'New 2': {'counter':2,'total':4,'overlapsWith': new Set('New 1', 'New 3', 'New 4')},
                'New 3': {'counter':3,'total':4,'overlapsWith': new Set('New 1', 'New 2', 'New 4')},
                'New 4': {'counter':4,'total':4,'overlapsWith': new Set('New 1', 'New 2', 'New 3')}
            }
        })

        const assert1 = JSON.stringify(meetingsWidthRatio) === '{"New":1,"New 1":0.25,"New 2":0.25,"New 3":0.25,"New 4":0.25}'

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
    return {passed, failed}
}
