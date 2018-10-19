const meetingsWidthRatioCalculator = ({meetings, overlaps = {}}) => {
    if (!meetings) {
        throw new Error('Missing param meetings')
    }
    const meetingsWidthRatio = {}

    if (!meetings.length) {
        return { meetingsWidthRatio }
    }

    meetings.forEach((meeting) => {
        const {overlapsWith, total} = (overlaps[meeting.id] && overlaps[meeting.id]) || {}

        if (!overlapsWith || !overlapsWith.size) {
            meetingsWidthRatio[meeting.id] = 1
        }

        let maxPeerOverlaps = total
        overlapsWith && overlapsWith.forEach((meetingId) => {
            if (overlaps[meetingId] && (overlaps[meetingId].total > maxPeerOverlaps)) {
                maxPeerOverlaps = overlaps[meetingId].total
            }
        })

        meetingsWidthRatio[meeting.id] = 1/maxPeerOverlaps
    })

    console.log('meetingsWidthRatioCalculator output', {meetingsWidthRatio})

    return {meetingsWidthRatio}
}
