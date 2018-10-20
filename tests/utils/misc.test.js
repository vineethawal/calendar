const getReadableHoursTests = () => {
    let passed = 0
    let failed = 0

    try {
        console.log('Should throw missing param `tickMinute` error')
        getReadableHours()
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
        console.log('Should return readable hours with 0 prepended')
        const hours = getReadableHours({tickMinute: 0})

        if (hours === '09.00') {
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
        console.log('Should return readable hours without 0 prepended')
        const hours = getReadableHours({tickMinute: 195})

        if (hours === '12.15') {
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
