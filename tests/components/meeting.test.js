const meetingComponentTests = () => {
    let passed = 0
    let failed = 0

    try {
        console.log('Should throw missing param `id` error')
        Meeting({
            'start':60,
            'end':120,
            'height':105,
            'top':525,
            'width':600,
            'left':0,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param id') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')

    try {
        console.log('Should throw missing param `height` error')
        Meeting({
            'id':'New',
            'start':60,
            'end':120,
            'top':525,
            'width':600,
            'left':0,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param height') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')

    try {
        console.log('Should throw missing param `top` error')
        Meeting({
            'id':'New',
            'start':60,
            'end':120,
            'height':105,
            'width':600,
            'left':0,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param top') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')

    try {
        console.log('Should throw missing param `width` error')
        Meeting({
            'id':'New',
            'start':60,
            'end':120,
            'height':105,
            'top':525,
            'left':0,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param width') {
            passed++
            console.log('PASSED')
        } else {
            failed++
            console.error('FAILED')
        }
    }
    console.log('-------------------------')

    try {
        console.log('Should throw missing param `left` error')
        Meeting({
            'id':'New',
            'start':60,
            'end':120,
            'height':105,
            'top':525,
            'width':600,
        })
        failed++
        console.error('FAILED')
    } catch (error) {
        console.log(error)
        if (error.message === 'Missing param left') {
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
        const meeting = Meeting({
            'id':'New',
            'start':60,
            'end':120,
            'height':105,
            'top':525,
            'width':600,
            'left':0,
        })

        const assert1 = meeting.getAttribute('class') === 'meeting-container'
        const assert2 = meeting.getAttribute('transform') === 'translate(0, 525)'

        const handle = meeting.childNodes[0]
        const assert3 = handle.getAttribute('class') === 'meeting-handle'
        const assert4 = handle.getAttribute('x') === '0'
        const assert5 = handle.getAttribute('y') === '0'
        const assert6 = handle.getAttribute('width') === '6'
        const assert7 = handle.getAttribute('height') === '105'

        const box = meeting.childNodes[1]
        const assert8 = box.getAttribute('class') === 'meeting-box'
        const assert9 = box.getAttribute('x') === '0'
        const assert10 = box.getAttribute('y') === '0'
        const assert11 = box.getAttribute('width') === '600'
        const assert12 = box.getAttribute('height') === '105'

        const text = meeting.childNodes[2]
        const assert13 = text.getAttribute('class') === 'meeting-text'
        const assert14 = text.getAttribute('x') === '300'
        const assert15 = text.getAttribute('y') === '52.5'
        const assert16 = text.innerHTML === 'Meeting - New'

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
