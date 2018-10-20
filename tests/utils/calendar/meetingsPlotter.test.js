const meetingsPlotterTests = () => {
    let passed = 0
    let failed = 0

    try {
        console.log('Should throw missing param `plotHeight` error')
        meetingsPlotter({
            plotWidth: 100,
            plotStartMinutes: 0,
            plotEndMinutes: 200,
            minuteHeight: 1.5,
            meetings: [
                { id: 'New', start: 60, end: 120 },
                { id: 'New 1', start: 150, end: 270 },
                { id: 'New 2', start: 240, end: 300 },
                { id: 'New 3', start: 200, end: 360 },
                { id: 'New 4', start: 180, end: 330 }
             ],
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
        meetingsPlotter({
            plotHeight: 50,
            plotStartMinutes: 0,
            plotEndMinutes: 200,
            minuteHeight: 1.5,
            meetings: [
                { id: 'New', start: 60, end: 120 },
                { id: 'New 1', start: 150, end: 270 },
                { id: 'New 2', start: 240, end: 300 },
                { id: 'New 3', start: 200, end: 360 },
                { id: 'New 4', start: 180, end: 330 }
            ],
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
        console.log('Should throw missing param `plotStartMinutes` error')
        meetingsPlotter({
            plotWidth: 100,
            plotHeight: 50,
            plotEndMinutes: 200,
            minuteHeight: 1.5,
            meetings: [
                { id: 'New', start: 60, end: 120 },
                { id: 'New 1', start: 150, end: 270 },
                { id: 'New 2', start: 240, end: 300 },
                { id: 'New 3', start: 200, end: 360 },
                { id: 'New 4', start: 180, end: 330 }
            ],
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
        meetingsPlotter({
            plotWidth: 100,
            plotHeight: 50,
            plotStartMinutes: 200,
            minuteHeight: 1.5,
            meetings: [
                { id: 'New', start: 60, end: 120 },
                { id: 'New 1', start: 150, end: 270 },
                { id: 'New 2', start: 240, end: 300 },
                { id: 'New 3', start: 200, end: 360 },
                { id: 'New 4', start: 180, end: 330 }
            ],
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
        meetingsPlotter({
            plotWidth: 100,
            plotHeight: 50,
            plotStartMinutes: 0,
            plotEndMinutes: 200,
            meetings: [
                { id: 'New', start: 60, end: 120 },
                { id: 'New 1', start: 150, end: 270 },
                { id: 'New 2', start: 240, end: 300 },
                { id: 'New 3', start: 200, end: 360 },
                { id: 'New 4', start: 180, end: 330 }
            ],
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
        console.log('Should throw missing param `meetings` error')
        meetingsPlotter({
            plotWidth: 100,
            plotHeight: 50,
            plotStartMinutes: 0,
            plotEndMinutes: 200,
            minuteHeight: 1.5,
        })
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
        console.log('Should throw error when plotEndMinutes < plotStartMinutes')
        meetingsPlotter({
            plotWidth: 100,
            plotHeight: 50,
            plotStartMinutes: 220,
            plotEndMinutes: 200,
            minuteHeight: 1.5,
            meetings: [
                { id: 'New', start: 60, end: 120 },
                { id: 'New 1', start: 150, end: 270 },
                { id: 'New 2', start: 240, end: 300 },
                { id: 'New 3', start: 200, end: 360 },
                { id: 'New 4', start: 180, end: 330 }
            ],
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === '`plotEndMinutes` should be greater than `plotStartMinutes`') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')

    try {
        console.log('Should return empty array `meetingsPlot` when meetings.length = 0')
        const {meetingsPlot} = meetingsPlotter({
            plotWidth: 100,
            plotHeight: 50,
            plotStartMinutes: 0,
            plotEndMinutes: 200,
            minuteHeight: 1.5,
            meetings: [],
        })

        if (meetingsPlot && meetingsPlot.length === 0) {
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
        console.log('Should calculate and return meeting positioning attributes for a single meeting')
        const {meetingsPlot} = meetingsPlotter({
            'plotWidth':600,
            'plotHeight':735,
            'plotStartMinutes':0,
            'plotEndMinutes':420,
            'minuteHeight':1.75,
            'meetings': [
                {'id':'New','start':60,'end':120},
            ],
        })

        const assert1 = meetingsPlot.length === 1

        const assert2 = JSON.stringify(meetingsPlot) === '[{"id":"New","start":60,"end":120,"height":105,"top":525,"width":600,"left":0}]'

        if (assert1 && assert2) {
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
        console.log('Should calculate and return meeting positioning attributes for multiple meetings')
        const {meetingsPlot} = meetingsPlotter({
            'plotWidth':600,
            'plotHeight':735,
            'plotStartMinutes':0,
            'plotEndMinutes':420,
            'minuteHeight':1.75,
            'meetings': [
                {'id':'New','start':60,'end':120},
                {'id':'New 1','start':150,'end':270},
                {'id':'New 2','start':240,'end':300},
                {'id':'New 3','start':200,'end':360},
                {'id':'New 4','start':180,'end':330}
            ],
            'overlaps': {
                'New':{'counter':1,'total':1,'overlapsWith':{}},
                'New 1':{'counter':1,'total':4,'overlapsWith':{}},
                'New 2':{'counter':2,'total':4,'overlapsWith':{}},
                'New 3':{'counter':3,'total':4,'overlapsWith':{}},
                'New 4':{'counter':4,'total':4,'overlapsWith':{}}
            },
            'meetingsWidthRatio':   {'New':1,'New 1':0.25,'New 2':0.25,'New 3':0.25,'New 4':0.25}
        })

        const assert1 = meetingsPlot.length === 5

        const assert2 = JSON.stringify(meetingsPlot) === '[{"id":"New","start":60,"end":120,"height":105,"top":525,"width":600,"left":0},{"id":"New 1","start":150,"end":270,"height":210,"top":262,"width":150,"left":0},{"id":"New 2","start":240,"end":300,"height":105,"top":210,"width":150,"left":150},{"id":"New 3","start":200,"end":360,"height":280,"top":105,"width":150,"left":300},{"id":"New 4","start":180,"end":330,"height":262,"top":157,"width":150,"left":450}]'

        if (assert1 && assert2) {
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
