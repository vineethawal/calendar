const Meeting = ({
    id,
    left,
    top,
    width,
    height,
}) => {
    if (!id) {
        throw new Error('Missing param id')
    }
    if (left === undefined) {
        throw new Error('Missing param left')
    }
    if (top === undefined) {
        throw new Error('Missing param top')
    }
    if (!width) {
        throw new Error('Missing param width')
    }
    if (!height) {
        throw new Error('Missing param height')
    }

    const meeting = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    meeting.setAttribute('transform', `translate(${left}, ${top})`)
    meeting.setAttribute('class', 'meeting-container')

    const box = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    box.setAttribute('class', 'meeting-box')
    box.setAttribute('x', 0)
    box.setAttribute('y', 0)
    box.setAttribute('width', width)
    box.setAttribute('height', height)

    const handle = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    handle.setAttribute('class', 'meeting-handle')
    handle.setAttribute('x', 0)
    handle.setAttribute('y', 0)
    handle.setAttribute('width', Meeting.handleWidth)
    handle.setAttribute('height', height)

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    text.setAttribute('class', 'meeting-text')
    text.setAttribute('x', width/2)
    text.setAttribute('y', height/2)
    text.innerHTML = `Meeting - ${id}`

    meeting.appendChild(handle)
    meeting.appendChild(box)
    meeting.appendChild(text)

    return meeting
}

Meeting.handleWidth = 6
