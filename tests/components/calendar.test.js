const calendarComponentTests = () => {
    let passed = 0
    let failed = 0

    try {
        console.log('Should throw missing param `plotWidth` error')
        Calendar({
            plotHeight: 600,
            plotStartMinutes: 0,
            plotEndMinutes: 240,
            minuteHeight: 1.75,
            meetingsPlot: [
                {'id':'New','start':60,'end':120,'height':105,'top':525,'width':600,'left':0},
                {'id':'New 1','start':150,'end':270,'height':210,'top':262,'width':150,'left':0},
                {'id':'New 2','start':240,'end':300,'height':105,'top':210,'width':150,'left':150},
                {'id':'New 3','start':200,'end':360,'height':280,'top':105,'width':150,'left':300},
                {'id':'New 4','start':180,'end':330,'height':262,'top':157,'width':150,'left':450}
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
        console.log('Should throw missing param `plotHeight` error')
        Calendar({
            plotWidth: 600,
            plotStartMinutes: 0,
            plotEndMinutes: 240,
            minuteHeight: 1.75,
            meetingsPlot: [
                {'id':'New','start':60,'end':120,'height':105,'top':525,'width':600,'left':0},
                {'id':'New 1','start':150,'end':270,'height':210,'top':262,'width':150,'left':0},
                {'id':'New 2','start':240,'end':300,'height':105,'top':210,'width':150,'left':150},
                {'id':'New 3','start':200,'end':360,'height':280,'top':105,'width':150,'left':300},
                {'id':'New 4','start':180,'end':330,'height':262,'top':157,'width':150,'left':450}
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
        console.log('Should throw missing param `plotStartMinutes` error')
        Calendar({
            plotWidth: 600,
            plotHeight: 420,
            plotEndMinutes: 240,
            minuteHeight: 1.75,
            meetingsPlot: [
                {'id':'New','start':60,'end':120,'height':105,'top':525,'width':600,'left':0},
                {'id':'New 1','start':150,'end':270,'height':210,'top':262,'width':150,'left':0},
                {'id':'New 2','start':240,'end':300,'height':105,'top':210,'width':150,'left':150},
                {'id':'New 3','start':200,'end':360,'height':280,'top':105,'width':150,'left':300},
                {'id':'New 4','start':180,'end':330,'height':262,'top':157,'width':150,'left':450}
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
        Calendar({
            plotWidth: 600,
            plotHeight: 420,
            plotStartMinutes: 0,
            minuteHeight: 1.75,
            meetingsPlot: [
                {'id':'New','start':60,'end':120,'height':105,'top':525,'width':600,'left':0},
                {'id':'New 1','start':150,'end':270,'height':210,'top':262,'width':150,'left':0},
                {'id':'New 2','start':240,'end':300,'height':105,'top':210,'width':150,'left':150},
                {'id':'New 3','start':200,'end':360,'height':280,'top':105,'width':150,'left':300},
                {'id':'New 4','start':180,'end':330,'height':262,'top':157,'width':150,'left':450}
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
        Calendar({
            plotWidth: 600,
            plotHeight: 420,
            plotStartMinutes: 0,
            plotEndMinutes: 240,
            meetingsPlot: [
                {'id':'New','start':60,'end':120,'height':105,'top':525,'width':600,'left':0},
                {'id':'New 1','start':150,'end':270,'height':210,'top':262,'width':150,'left':0},
                {'id':'New 2','start':240,'end':300,'height':105,'top':210,'width':150,'left':150},
                {'id':'New 3','start':200,'end':360,'height':280,'top':105,'width':150,'left':300},
                {'id':'New 4','start':180,'end':330,'height':262,'top':157,'width':150,'left':450}
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
        console.log('Should return calendar component with valid attributes')
        const calendar = Calendar({
            plotWidth: 600,
            plotHeight: 420,
            plotStartMinutes: 0,
            plotEndMinutes: 240,
            minuteHeight: 1.75,
            meetingsPlot: [
                {'id':'New','start':60,'end':120,'height':105,'top':525,'width':600,'left':0},
                {'id':'New 1','start':150,'end':270,'height':210,'top':262,'width':150,'left':0},
                {'id':'New 2','start':240,'end':300,'height':105,'top':210,'width':150,'left':150},
                {'id':'New 3','start':200,'end':360,'height':280,'top':105,'width':150,'left':300},
                {'id':'New 4','start':180,'end':330,'height':262,'top':157,'width':150,'left':450}
            ],
        })

        const assert1 = calendar.getAttribute('class') === 'calendar'
        const assert2 = calendar.getAttribute('viewBox') === `0 0 645 510`
        const assert3 = calendar.getAttribute('style') === `height: 510px`

        if (assert1 && assert2 && assert3) {
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
