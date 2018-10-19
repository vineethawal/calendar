const Meeting = ({
    meeting
}) => {
    const meetingContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    meetingContainer.setAttribute('transform', `translate(${meeting.left}, ${meeting.top})`)
    meetingContainer.setAttribute('class', 'meeting-container')

    const box = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    box.setAttribute('class', 'meeting-box')
    box.setAttribute('x', 0)
    box.setAttribute('y', 0)
    box.setAttribute('width', meeting.width)
    box.setAttribute('height', meeting.height)

    const handle = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    handle.setAttribute('class', 'meeting-handle')
    handle.setAttribute('x', 0)
    handle.setAttribute('y', 0)
    handle.setAttribute('width', Meeting.handleWidth)
    handle.setAttribute('height', meeting.height)

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    text.setAttribute('class', 'meeting-text')
    text.setAttribute('x', meeting.width/2)
    text.setAttribute('y', meeting.height/2)
    text.innerHTML = `Meeting - ${meeting.id}`

    meetingContainer.appendChild(handle)
    meetingContainer.appendChild(box)
    meetingContainer.appendChild(text)

    return meetingContainer
}

Meeting.handleWidth = 6
