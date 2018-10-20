const runTests = () => {

    const suites = []

    console.log('----------------------------------------------------------------------------------')
    suites.push(getReadableHoursTests())
    console.log('Tested getReadableHours', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    console.log('----------------------------------------------------------------------------------')
    suites.push(meetingsPlotterTests())
    console.log('Tested meetingsPlotter', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    console.log('----------------------------------------------------------------------------------')
    suites.push(meetingsWidthRatioCalculatorTests())
    console.log('Tested meetingsWidthRatioCalculator', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    console.log('----------------------------------------------------------------------------------')
    suites.push(overlapsCalculatorTests())
    console.log('Tested overlapsCalculator', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    console.log('----------------------------------------------------------------------------------')
    suites.push(plotSizeCalculatorTests())
    console.log('Tested plotSizeCalculator', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    console.log('----------------------------------------------------------------------------------')
    suites.push(calendarComponentTests())
    console.log('Tested calendarComponent', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    console.log('----------------------------------------------------------------------------------')
    suites.push(meetingComponentTests())
    console.log('Tested meetingComponent', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    console.log('----------------------------------------------------------------------------------')
    suites.push(plotComponentTests())
    console.log('Tested plotComponent', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    console.log('----------------------------------------------------------------------------------')
    suites.push(tickComponentTests())
    console.log('Tested tickComponent', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    console.log('----------------------------------------------------------------------------------')
    suites.push(xAxisComponentTests())
    console.log('Tested xAxisComponent', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    console.log('----------------------------------------------------------------------------------')
    suites.push(yAxisComponentTests())
    console.log('Tested yAxisComponent', suites[suites.length - 1])
    console.log('----------------------------------------------------------------------------------')

    const {passed, failed} = suites.reduce((prev, curr) => {

        curr.passed += prev.passed
        curr.failed += prev.failed

        return curr
    }, {passed: 0, failed: 0})

    return `TOTAL: ${passed + failed} || PASSED: ${passed} || FAILED: ${failed}`
}

console.log('=================================================')
console.log('To run test cases call function `runTests()`. ')
console.log('=================================================')

