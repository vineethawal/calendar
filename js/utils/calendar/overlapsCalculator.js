const overlapsCalculator = ({meetings}) => {
    const overlaps = {}

    if (!meetings) {
        throw new Error('Missing param meetings')
    }

    if (!meetings.length) {
        return overlaps
    }


    overlaps[meetings[0].id] = {counter: 1, total: 1, overlapsWith: new Set()}

    for (let forwardCounter = 1; forwardCounter < meetings.length; forwardCounter++) {
        let currentMeeting = meetings[forwardCounter]
        overlaps[currentMeeting.id] = {counter: 1, total: 1, overlapsWith: new Set()}

        for (let retroCounter = 0; retroCounter < forwardCounter; retroCounter++) {
            const prevMeeting = meetings[retroCounter]

            const currentStartsBetween = currentMeeting.start > prevMeeting.start && currentMeeting.start < prevMeeting.end
            const currentEndsBetween = currentMeeting.end > prevMeeting.start && currentMeeting.end < prevMeeting.end
            const prevStartsBetween = prevMeeting.start > currentMeeting.start && prevMeeting.start < currentMeeting.end
            const prevEndsBetween = prevMeeting.end > currentMeeting.start && prevMeeting.end < currentMeeting.end
            const sameStartEndTime = prevMeeting.start === currentMeeting.start && prevMeeting.end === currentMeeting.end

            if (currentStartsBetween || currentEndsBetween || prevStartsBetween || prevEndsBetween || sameStartEndTime) {
                overlaps[currentMeeting.id].total = ++overlaps[prevMeeting.id].total
                overlaps[currentMeeting.id].counter = overlaps[currentMeeting.id].total
                overlaps[currentMeeting.id].overlapsWith.add(prevMeeting.id)
                overlaps[prevMeeting.id].overlapsWith.add(currentMeeting.id)
            }
        }
    }

    // console.log('overlapsCalculator output', {overlaps})

    return {overlaps}
}
