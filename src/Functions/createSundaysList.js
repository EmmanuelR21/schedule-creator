import NUM_TO_MONTH from "./Maps/numToMonth"

const createSundaysList = (numOfSundays) => {
    const CURRENT_DATE = new Date()
    const SUNDAYS = []

    while (CURRENT_DATE.getDay() !== 0) {
        CURRENT_DATE.setDate(CURRENT_DATE.getDate() + 1)
    }

    for (let i = 0; i < numOfSundays; i++) {
        SUNDAYS.push(`${NUM_TO_MONTH[CURRENT_DATE.getMonth()]} ${CURRENT_DATE.getDate()}, ${CURRENT_DATE.getFullYear()}`)

        if (CURRENT_DATE.getDate() + 7 < CURRENT_DATE.getDate()) {
            CURRENT_DATE.setMonth(CURRENT_DATE.getMonth() + 1)
        } else {
            CURRENT_DATE.setDate(CURRENT_DATE.getDate() + 7)
        }
    }
    return SUNDAYS
}

export default createSundaysList;